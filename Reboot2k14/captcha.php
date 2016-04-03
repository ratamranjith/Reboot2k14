<?php 
session_start(); 
$text = rand(100000,999999); 
$_SESSION["vercode"] = $text; 
$height = 25; 
$width = 75; 
  
$image_p = imagecreate($width, $height); 
$black = imagecolorallocate($image_p, 20, 10, 40); 
$white = imagecolorallocate($image_p, 255, 255, 255); 
$font_size = 16; 
  
imagestring($image_p, $font_size, 5, 5, $text, $white); 
imagejpeg($image_p, null, 80); 
?>