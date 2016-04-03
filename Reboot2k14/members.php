<!DOCTYPE html>
<html>
    <!-- This code is only meant for previewing your Reflow design. -->
    <head>
	
	<meta charset="utf-8">
	<meta name="viewport" content="initial-scale = 1.0,maximum-scale = 1.0" />
    <script language="javascript" type="text/javascript">
		function closeWindow() 
		{
			window.open('','_parent','');
			window.close();
		}
	</script> 
    <style type="text/css">
#f1_container {
  position: relative;
  margin: 20px auto;
  float:left;
 
  width: 200px;
  height: 200px;
  z-index: 1;
}
#f1_container {
  perspective: 1000;
}
#f1_card {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 1.0s linear;
}
#f1_container:hover #f1_card {
  transform: rotateY(180deg);
  box-shadow: -5px 5px 5px #aaa;
}
.face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}
.face.back {
  display: block;
  transform: rotateY(180deg);
  box-sizing: border-box;
  padding: 10px;
  color: white;
  text-align: center;
  background-color: #aaa;
}
</style>
    </head>
    <body >
    
    <center>
    <div id="full">
  <div  style="margin:20px; float:left">
   	
<div id="f1_container">
<div id="f1_card" class="shadow">
  <div class="front face">
    <img src="images/members/co1.jpg"/>
  </div>
  <div class="back face center">
    <p>This is nice for exposing more information about an image.</p>
    <p>Any content can go here.</p>
  </div>
</div>
</div>




<div id="f1_container">
<div id="f1_card" class="shadow">
  <div class="front face">
    <img src="images/members/co2.jpg"/>
  </div>
  <div class="back face center">
    <p>This is nice for exposing more information about an image.</p>
    <p>Any content can go here.</p>
  </div>
</div>
</div>
</div>
<br/>


<div id="f1_container">
<div id="f1_card" class="shadow">
  <div class="front face">
    <img src="images/members/unknown.jpg".jpg"/>
  </div>
  <div class="back face center">
    <p>This is nice for exposing more information about an image.</p>
    <p>Any content can go here.</p>
  </div>
</div>
</div>


    
<div id="f1_container">
<div id="f1_card" class="shadow">
  <div class="front face">
    <img src="images/members/madangles.jpg".jpg"/>
  </div>
  <div class="back face center">
    <p>This is nice for exposing more information about an image.</p>
    <p>Any content can go here.</p>
  </div>
</div>
</div>


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
    
    
    
    <input  id="close" type="button" onClick="closeWindow()" value="Close"/>
    </center>
</body>
</html>