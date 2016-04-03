<?php

$host = 'localhost';
$name = 'root';
$password = '';
$error = 'Could not Connect to the database';
$database = 'reboot2k14';
if(mysql_connect($host,$name,$password) && mysql_select_db($database))
{
	$con=mysql_connect('localhost',$name,$password);
	mysql_select_db($database) or die( "Unable to select database");
	//echo "Connected";
}
else
{
echo mysql_error();
}
?>