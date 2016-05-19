<?php
session_start();
header("content-type:application/json");
include_once "config.php";

$input = file_get_contents('php://input');
$object = json_encode($input, JSON_FORCE_OBJECT);

$inputArray = explode(",", $input);

$purpose = substr($inputArray[0], 12, strlen($inputArray[0])-13);
$person = substr($inputArray[1], 10, strlen($inputArray[1])-11);
$country = substr($inputArray[2], 11, strlen($inputArray[2])-12);
$madeDate = substr($inputArray[3], 13, strlen($inputArray[3])-14);
$subtract = substr($inputArray[4], 14, strlen($inputArray[4])-15);
$add = substr($inputArray[5], 9, strlen($inputArray[5])-10);
$borrow = substr($inputArray[6], 12, strlen($inputArray[6])-14);
$today = date("Y-m-d H:i:s");

// Create connection
$conn = new mysqli($hostname, $username, $password, $dbname);
// Check connection
if ($conn->connect_error)
{
    die("Connection failed: " . $conn->connect_error);
}

// Make sure username has no special characters before checking database.
if( (preg_match('/[^\w\s-\(\)]/s' , $purpose)) || (preg_match('/[^\w\s]/s' , $person)) ||
	(preg_match('/[^\w\s]/s' , $country)) || (preg_match('/[^\w\s]/s' , $madeDate)) ||
	(preg_match('/[^\w\s\.]/s' , $subtract)) || (preg_match('/[^\w\s\.]/s' , $add)) ||
	(preg_match('/[^\w\s\.]/s' , $borrow)) )
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
		$sql = "INSERT INTO Borrow (Purpose, Person, Country, TransDate, ";
		$sql .= "Subtracted, Added, Borrowed, DateEntered) ";
		$sql .= "VALUES ('" . $purpose . "', '" . $person . "', '" . $country . "', '";
		$sql .= $madeDate . "', '" . $subtract . "', '" . $add . "', '" . $borrow . "', '";
		$sql .= $today . "')";

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