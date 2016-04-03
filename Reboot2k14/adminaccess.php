<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Reboot Report</title>
</head>

<body>
<?php require("db.php"); ?>
<?php 

$querys = "SELECT * FROM users";
$results = mysql_query($querys);
if(!$results)
{
	echo "Error in DBase";
}
else
{

?>
<center>
<table width="1200" border="1">
  <tr align="center">
    <td width="65">Sno</td>
    <td width="154">Name</td>
    <td width="223">Email</td>
    <td width="125">Departmentl</td>
    <td width="364">College</td>
    <td width="138">Mobile</td>
    <td width="82">Registeration No</td>
  </tr>
  
  <?php 
  while($row = mysql_fetch_row($results))
{
	
	?>
	
	<tr>
  
    <td width="65">
	<?php 
	echo $row[0];
	?>
    </td>
    <td width="154">
   <?php 
	echo $row[1];
	?>
    </td>
    <td width="223">
    <?php 
	echo $row[2];
	?>
    </td>
    <td align="center" width="125">
    <?php 
	echo $row[3];
	?>
    </td>
    <td width="364">
    <?php 
	echo $row[4];
	?>
    </td>
    <td width="138">
    <?php 
	echo $row[5];
	?>
    </td>
    <td width="82">
    <?php 
	echo $row[6];
	?>
    </td>
    </tr>
    <?php } } ?>
  
  
</table>
</center>
</body>
</html>