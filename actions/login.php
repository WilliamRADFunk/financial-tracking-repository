<?php
header("content-type:application/json");
include_once "config.php";

$input = file_get_contents('php://input');
$object = json_encode($input, JSON_FORCE_OBJECT);

$inputArray = explode(",", $input);
$name = substr($inputArray[0], 9, strlen($inputArray[0])-10);
$pwd = substr($inputArray[1], 7, strlen($inputArray[1])-9);

// Create connection
$conn = new mysqli($hostname, $username, $password, $dbname);
// Check connection
if ($conn->connect_error)
{
    die("Connection failed: " . $conn->connect_error);
}

// Getting password attached to username.
$sql = 'SELECT Password FROM Login WHERE Username="' . $name . '"';
$result = $conn->query($sql);
$pwd_db = "";
while ( $db_row = $result->fetch_array(MYSQLI_ASSOC) )
{
	$pwd_db = $db_row['Password'];
}
//Now compare input password with password in database
if( ($pwd_db == "") || ($pwd_db != $pwd) )
{
	$reply = '{"success":"false"}';
	print $reply;
}
else
{
	$_SESSION["key"] = $key;
	$reply = '{"success":"true"}';
	print $reply;
}
$conn->close();
?>