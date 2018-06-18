function insertHeaderTemplate()
{
		
	var template = '\
					<!-- Template -->\
					<table align="center" class="header" cellspacing="0" cellpadding="0">\
					<!--HEADER-->\
					<tr><td><img src="images/header.png"></td>\
				    </tr>\
					<tr><td bgcolor="#091C35" colspan="2">\
<div>\
  <button id="buton1" class="button_header"  >Procesarea Numerică <br/> a Semnalelor <br/></button>\
  <button id="buton2" class="button_header"  >Prelucrarea <br/>Imaginilor <br/></button>\
  <button id="buton3" class="button_header"  ></button>\
  <button id="buton4" class="button_header"  ></button>\
  <button id="buton5" class="button_header"  ></button>\
</div>\
</td></tr>\
</table>\
<br/>\
';
					
	document.getElementById("headerTemplate").innerHTML = template;
    
    document.getElementById("buton1").addEventListener("click", function () {
       open("PNS.html","_self");
    });
    document.getElementById("buton2").addEventListener("click", function () {
       open("PI.html","_self");
    });
	
}


// call insertHeaderTemplate once the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function () {
  insertHeaderTemplate();
});
