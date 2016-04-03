<!DOCTYPE html>
<html>
    <!-- This code is only meant for previewing your Reflow design. -->
    <head>
	<link rel="stylesheet" href="boilerplate.css" />
	<link rel="stylesheet" href="reflow.css" />
	<meta charset="utf-8">
	<meta name="viewport" content="initial-scale = 1.0,maximum-scale = 1.0" />
    <title>REBOOT | 2K14</title>
    </head>
    <body>
    <?php 
	require("db.php");
	session_start();
	
	$regid = $_SESSION['regid'];
	
	
	?>
    	<div id="primaryContainer" class="primaryContainer clearfix">
               <div id='box' class='clearfix'>
               <img id='image' src='img/ssn-logo1.png' class='image' />
               <center>
           <p id='text'>
           REBOOT 2K14
           </p>
           
           <p id='text1'>
           Bootstrap Your Imagination
           </p>
           
         
         
           <p>&nbsp;</p>
           <p>&nbsp;</p>
           <center>
            
             <p>&nbsp;</p>
             <p>&nbsp;</p>
             <p>&nbsp;</p>
             <p>&nbsp;</p>
             <h2>Thanks for Registering With us</h2>
             <table  width="548" height="244" border="0">
             <b>
             <tr>
               <td width="199">REGISTERATION ID</td>
               <td width="333"><?php echo $regid; 
			   
			   $query = "SELECT * FROM `users` where `uregid` = '$regid' ";
			   $res = mysql_query($query,$con) or die(mysql_error());
			   while($row = mysql_fetch_array($res))
			   {
			    
			   
			   
			   ?>
			   </td>
             </tr>
             <tr>
               <td>NAME:</td>
               <td><?php echo $row[1]; ?></td>
             </tr>
             <tr>
               <td>EMAIL:</td>
               <td><?php echo $row[2]; ?></td>
             </tr>
             <tr>
               <td>DEPARTMENT:</td>
               <td><?php echo $row[3]; ?></td>
             </tr>
             <tr>
               <td>COLLEGE:</td>
               <td><?php echo $row[4]; ?></td>
             </tr>
            <tr>
               <td>MOBILE:</td>
               <td><?php echo $row[5]; ?></td>
             </tr>
            
			<?php
			
			
			
//  recipients
$to  = 'ranjitkumar.v@somca.ssn.edu.in'; // note the comma

// subject
$subject = 'REBOOT 2K14';

// message
$message = $row[0];

// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Additional headers
$headers .= 'From:<reboot.ssnmca@gmail.com>' . "\r\n";

// Mail it
if( mail($to, $subject, $message, $headers))
echo "Mail Sent Successfully";
else
echo "Mail not Sent Successfully";
			
			
			
			
			
			
			
			
			
			
			
			 } ?>
            </b>
           </table>
           
           <button onclick="javascript:window.print()">Print This Page</button>
           </center>
       </div>



</center>
	</div>
    </body>
</html>