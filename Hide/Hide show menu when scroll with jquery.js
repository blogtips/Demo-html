

<!DOCTYPE html>
<html >
  <head>
    <meta charset="UTF-8">


    <title>Hide/show menu when scroll with jquery</title>
    
    
    
    
        <style>
      ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover:not(.active) {
    background-color: #111;
}

.active {
    background-color: #4CAF50;
}
.menu-wrapper{width:100%;background:#303030;display:inline-block;position:fixed;left:0;top:0;z-index: 99;}
.scroll{top:-90px}
.no-scroll{top:0;z-index:9999}
 @media screen and (max-width:500px){.menu-wrapper{position: relative!important; z-index: initial;}}
    </style>

    
    
    
  </head>

  <body translate="no" >

    <div class='menu-wrapper'>
<ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>
</div>
https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>https://upsot.blogspot.com/<br/>
<script  src='//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js'></script>
<script type='text/javascript'>
//<![CDATA[     
$(function(){var o=$(document).scrollTop(),n=$(".menu-wrapper").outerHeight();$(window).scroll(function(){var s=$(document).scrollTop();$(document).scrollTop()>=50?$(".menu-wrapper").css("position","fixed"):$(".menu-wrapper").css("position","fixed"),s>n?$(".menu-wrapper").addClass("scroll"):$(".menu-wrapper").removeClass("scroll"),s>o?$(".menu-wrapper").removeClass("no-scroll"):$(".menu-wrapper").addClass("no-scroll"),o=$(document).scrollTop()})});
//]]>
</script>
    
    
    
    
    
    
  </body>
</html>
 
