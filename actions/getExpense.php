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
	$sql = "SELECT * FROM Expense";
	$sql .= " WHERE Country='" . $country . "'";
	$sql .= " AND Category='" . $category . "'";
	$sql .= " ORDER BY PaidDate DESC";
	$result = $conn->query($sql);

	$rows = '{"rows":[';
	$expenses = floatval(0);
	$taxes1 = floatval(0);
	$taxes2 = floatval(0);
	while ( $db_row = $result->fetch_array(MYSQLI_ASSOC) )
	{
		$rows .= '{"PaidDate":"' . $db_row['PaidDate'];
		$rows .= '", "Company":"' . $db_row['Company'] . '", "Cost":' . $db_row['Cost'];
		$rows .= ', "TaxLocal":' . $db_row['TaxLocal'] . ', "TaxFederal":' . $db_row['TaxFederal'];
		$rows .= ', "Country":"' . $db_row['Country'];
		$rows .= '", "Category":"' . $db_row['Category'];
		$rows .= '", "DateEntered":"' . $db_row['DateEntered'] . '"},';
		$expenses += floatval($db_row['Cost']);
		$taxes1 += floatval($db_row['TaxLocal']);
		$taxes2 += floatval($db_row['TaxFederal']);
	}
	$rows = rtrim($rows, ",");
	$rows .= '], "total":[' . $expenses . ', '. $taxes1 . ', '. $taxes2 .']}';
	print $rows;
}
else
{
	$reply = '{"success":"No Key"}';
	print $reply;
}
$conn->close();
?>