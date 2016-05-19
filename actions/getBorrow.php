<?php
session_start();
header("content-type:application/json");
include_once "config.php";

$input = file_get_contents('php://input');
$object = json_encode($input, JSON_FORCE_OBJECT);

$inputArray = explode(",", $input);

$category = substr($inputArray[0], 13, strlen($inputArray[0])-14);
$country = substr($inputArray[1], 11, strlen($inputArray[1])-13);

// Create connection
$conn = new mysqli($hostname, $username, $password, $dbname);
// Check connection
if ($conn->connect_error)
{
    die("Connection failed: " . $conn->connect_error);
}
// If value received, send query to insert.
if($_SESSION["key"] == $key)
{
	// Get all relevant income rows
	$sql = "SELECT * FROM Borrow";
	$sql .= " WHERE Person='" . $category . "'";
	$sql .= " AND Country='" . $country . "'";
	$sql .= " ORDER BY TransDate DESC";
	$result = $conn->query($sql);

	$rows = '{"rows":[';
	$inAccount = floatval(0);
	$added = floatval(0);
	$borrowed = floatval(0);
	$subtracted = floatval(0);
	while ( $db_row = $result->fetch_array(MYSQLI_ASSOC) )
	{
		$rows .= '{"TransDate":"' . $db_row['TransDate'];
		$rows .= '", "Person":"' . $db_row['Person'] . '", "Purpose":"' . $db_row['Purpose'];
		$rows .= '", "Subtracted":' . $db_row['Subtracted'] . ', "Borrowed":' . $db_row['Borrowed'];
		$rows .= ', "Added":' . $db_row['Added'];
		$rows .= ', "Country":"' . $db_row['Country'];
		$rows .= '", "DateEntered":"' . $db_row['DateEntered'] . '"},';
		$added += floatval($db_row['Added']);
		$borrowed += floatval($db_row['Borrowed']);
		$subtracted += floatval($db_row['Subtracted']);
		$inAccount += floatval($db_row['Added']) - floatval($db_row['Borrowed']) - floatval($db_row['Subtracted']);
	}
	$rows = rtrim($rows, ",");
	$rows .= '], "total":[' . $inAccount . ', '. $subtracted . ', '. $borrowed . ', '. $added .']}';
	print $rows;
}
else
{
	$reply = '{"success":"No Key"}';
	print $reply;
}
$conn->close();
?>