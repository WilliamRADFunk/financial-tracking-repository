<?php
session_start();
header("content-type:application/json");
include_once "config.php";

$input = file_get_contents('php://input');
$object = json_encode($input, JSON_FORCE_OBJECT);

$inputArray = explode(",", $input);

$company = substr($inputArray[0], 12, strlen($inputArray[0])-13);
$paidDate = substr($inputArray[1], 12, strlen($inputArray[1])-13);
$category = substr($inputArray[2], 12, strlen($inputArray[2])-13);
$taxLocal = substr($inputArray[3], 12, strlen($inputArray[3])-13);
$taxFed = substr($inputArray[4], 10, strlen($inputArray[4])-11);
$country = substr($inputArray[5], 11, strlen($inputArray[5])-12);
$amount = substr($inputArray[6], 10, strlen($inputArray[6])-12);
$today = date("Y-m-d H:i:s");

// Create connection
$conn = new mysqli($hostname, $username, $password, $dbname);
// Check connection
if ($conn->connect_error)
{
    die("Connection failed: " . $conn->connect_error);
}

// Make sure username has no special characters before checking database.
if( (preg_match('/[^\w\s]/s' , $company)) || (preg_match('/[^\w\s]/s' , $paidDate)) || (preg_match('/[^\w\s]/s' , $category)) ||
	(preg_match('/[^\w\s]/s' , $taxLocal)) || (preg_match('/[^\w\s]/s' , $taxFed)) || (preg_match('/[^\w\s]/s' , $country)) ||
	(preg_match('/[^\w\s]/s' , $amount)) )
{
	$reply = '{"success":"invalid character(s)"}';
	print $reply;
	$conn->close();
}
else
{
	// If value received, send query to insert.
	if($_SESSION["key"] == $key)
	{
		$sql = "INSERT INTO Expense (Company, PaidDate, Category, TaxLocal, ";
		$sql .= "TaxFederal, Country, Cost, DateEntered) ";
		$sql .= "VALUES ('" . $company . "','" . $paidDate . "','" . $category . "','";
		$sql .= $taxLocal . "','" . $taxFed . "','" . $country . "','" . $amount . "','" . $today . "')";

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
		$reply = '{"success":"No Key"}';
		print $reply;
	}

	$conn->close();
}
?>