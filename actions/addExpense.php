<?php
session_start();
header("content-type:application/json");
include_once "config.php";

$input = file_get_contents('php://input');
$object = json_encode($input, JSON_FORCE_OBJECT);

$inputArray = explode(",", $input);

$client = substr($inputArray[0], 11, strlen($inputArray[0])-12);
$invoice = substr($inputArray[1], 11, strlen($inputArray[1])-12);
$country = substr($inputArray[2], 11, strlen($inputArray[2])-12);
$subDate = substr($inputArray[3], 11, strlen($inputArray[3])-12);
$recDate = substr($inputArray[4], 11, strlen($inputArray[4])-12);
$depDate = substr($inputArray[5], 11, strlen($inputArray[5])-12);
$amount = substr($inputArray[6], 10, strlen($inputArray[6])-11);
$taxes = substr($inputArray[7], 9, strlen($inputArray[7])-10);
$payee = substr($inputArray[8], 9, strlen($inputArray[8])-11);
$today = date("Y-m-d H:i:s");

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
	$sql = "INSERT INTO Income (Client, InvoiceNumber, Country, SubmissionDate, ";
	$sql .= "ReceivedDate, DepositedDate, Income, TaxPercentage, Payee, DateEntered) ";
	$sql .= "VALUES ('" . $client . "', '" . $invoice . "', '" . $country . "', '";
	$sql .= $subDate . "', '" . $recDate . "', '" . $depDate . "', '" . $amount . "', '";
	$sql .= $taxes . "', '" . $payee . "', '" . $today . "')";

	if($conn->query($sql) === TRUE)
	{
		$reply = '{"success":"true"}';
		print $reply;
	}
	else
	{
		$reply = '{"success":"false"}';
		print $reply;
	}
}
else
{
	$reply = '{"success":"false"}';
	print $reply;
}
$conn->close();
?>