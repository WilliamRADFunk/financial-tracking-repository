<?php
session_start();
header("content-type:application/json");
include_once "config.php";

$input = file_get_contents('php://input');
$object = json_encode($input, JSON_FORCE_OBJECT);

$inputArray = explode(",", $input);

$category = substr($inputArray[0], 13, strlen($inputArray[0])-14);
$country = substr($inputArray[1], 11, strlen($inputArray[1])-13);

if($category === "andrea") $category = "bill";
else if($category === "bill") $category = "andrea";
else $category = "";

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
	$sql = "SELECT * FROM Income";
	$sql .= " WHERE Country='" . $country . "'";
	$sql .= " AND NOT Payee='" . $category . "'";
	$sql .= " ORDER BY InvoiceNumber DESC";
	$result = $conn->query($sql);

	$rows = '{"rows":[';
	$income = floatval(0);
	$taxes = floatval(0);
	while ( $db_row = $result->fetch_array(MYSQLI_ASSOC) )
	{
		$rows .= '{"InvoiceNumber":' . $db_row['InvoiceNumber'];
		$rows .= ', "Client":"' . $db_row['Client'] . '", "Income":' . $db_row['Income'];
		$rows .= ', "Payee":"' . $db_row['Payee'] . '", "Country":"' . $db_row['Country'];
		$rows .= '", "SubmissionDate":"' . $db_row['SubmissionDate'];
		$rows .= '", "ReceivedDate":"' . $db_row['ReceivedDate'];
		$rows .= '", "DepositedDate":"' . $db_row['DepositedDate'];
		$rows .= '", "TaxPercentage":' . $db_row['TaxPercentage'];
		$rows .= ', "DateEntered":"' . $db_row['DateEntered'] . '"},';
		$income += floatval($db_row['Income']);
		$taxes += floatval($db_row['Income']) * (floatval($db_row['TaxPercentage']) / 100.0);
	}
	$rows = rtrim($rows, ",");
	$rows .= '], "total":[' . $income . ', '. $taxes .']}';
	print $rows;
}
else
{
	$reply = '{"success":"No Key"}';
	print $reply;
}
$conn->close();
?>