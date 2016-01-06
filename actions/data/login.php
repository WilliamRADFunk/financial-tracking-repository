<?php
header("content-type:application/json");
include_once "config.php";

$input = file_get_contents('php://input');
$object = json_encode($input, JSON_FORCE_OBJECT);

$inputArray = explode(",", $input);
$name = $inputArray[0];
$pwd = $inputArray[1];

// Create connection
$conn = new mysqli($hostname, $username, $password, $dbname);
// Check connection
if ($conn->connect_error)
{
    die("Connection failed: " . $conn->connect_error);
}
// Getting password attached to username.
$sql = "SELECT Password FROM Login WHERE Username='" . name . "'";
$result = $conn->query($sql);
$pwd_db = "";
while ( $db_row = $result->fetch_array(MYSQLI_ASSOC) )
{
	$pwd_db = $db_row['Password'];
}

//Now compare input password with password in database
if($pwd_db == "")
{

}
else if($pwd_db != $pwd)
{

}
else
{
	
}

$conn->close();
?>