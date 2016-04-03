<?php
include('db.php');
if(isset($_POST['rmobile']))
{
$mobile=mysql_real_escape_string($_POST['rmobile']);
$query=mysql_query("select * from users where umobile='$mobile'");
$row=mysql_num_rows($query);
if($row==0)
{
echo "<span style='color:green;'>Available</span>";
}
else
{
echo "<span style='color:red;'>Already exist</span>";
}
}

if(isset($_POST['rmail']))
{
$email=htmlspecialchars($_POST['rmail']);
$querys=mysql_query("select * from users where uemail='$email'");
$rows=mysql_num_rows($querys);
if($rows==0)
{
echo "<span style='color:green;'>Available</span>";
}
else
{
echo "<span style='color:red;'>Email Exists</span>";
}
}


?>