function insertFooterTemplate()
{
		
	var template = '\
					<!-- Template -->\
					<table align="center" class="index">\
					<tr>\
					<td class="butoaneFooter" align="center">\
						\
					<a href="contact.html" class="butonFooter">\
					<table><tr>\
					<td><img src="images/images_footer/contact.png" alt="Misiune" width="48" height="48" align="middle"></td>\
					<td><div class="textButonFooter">Contact</div></td></tr>\
					</table>\
					</a>\
						\
					<a href="resurse.html" class="butonFooter">\
					<table><tr>\
					<td><img src="images/images_footer/rapoarte.png" alt="Echipa" width="48" height="48" align="middle"></td>\
					<td><div class="textButonFooter">Resurse</div></td></tr>\
					</table>\
					</a>\
					</td>\
					</tr>\
					\
					</table>\
					<table align="center" class="index">\
					<tr><td bgcolor="#091C35">\
					</td></tr>\
					</table>\
';
					
	document.getElementById("footerTemplate").innerHTML = template;
	
}


// call insertFooterTemplate once the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function () {
  insertFooterTemplate();
});