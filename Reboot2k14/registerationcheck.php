<?php require("db.php"); ?>
<?php
session_start();




//User Mail address

$uname1 = $_POST['rname'];
$uname = strtoupper($uname1);
$uemail = $_POST['rmail'];
$ucollege1 = $_POST['rcollege'];
$ucollege = strtoupper($ucollege1);
$udept1 = $_POST['rdept'];
$udept = strtoupper($udept1);
$umobile = $_POST['rmobile'];

if ($_POST["vercode"] != $_SESSION["vercode"] OR $_SESSION["vercode"]=='')  { 
     echo  '<strong>Incorrect verification code.</strong>'; 
	 header("location:index.php",true,303);
} else { 
    


$query = "SELECT uregid FROM users ";
$result = mysql_query($query);

if(!$result)
{
	echo "Error in DBase";
}else
{
	




//




        

//
//$reg = 0;
$row = mysql_num_rows($result);

	

$reg = $row + 1;

//$add = 551;
$uregid = "REB14".$reg;
//echo $uregid;

$res = "INSERT INTO users (`uid`,
							 `uname`,
							 `uemail`,
							 `udept`,
							 `ucollege`,
							 `umobile`,
							 `uregid`)
							 
							 VALUES
							 ('','$uname','$uemail','$udept','$ucollege',$umobile,'$uregid')";
							 
							 	 
	if(mysql_query($res))
	{
		//echo "Inserted";
		//session_start();
		$_SESSION['regid'] = $uregid;
		header("location:thanks/thankyou.php",5);
	}
	else
	{
		echo mysql_error();
	}
	



}
}; 


?>