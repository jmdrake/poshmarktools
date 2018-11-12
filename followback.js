/* function followusers()
{
	var userlist = $(".item-content").find("#follow-user");
	for(var i = 0; (i < userlist.length) ; i++) {
		var user = $(userlist.get(i));
		if(!user.hasClass("f-hide")) {
			console.log("Follow : " + user.parent().parent().find("label h5 a").html());
			followqueue++;
			followuser(user.attr("data-ajax-href"))
		}
	}
}

followusers(); */

function followuser(href)
{
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log(this.responseText);
		}
	}
	xhttp.open("POST", href, true)
	xhttp.send();
}


var userindex = 0;

var ulist = $(".item-content").find("#follow-user");

function follownextuser()
{
	var user = $(ulist.get(userindex++));
	while(user.hasClass("f-hide")) {
		user = $(ulist.get(userindex++));
	}
	console.log("Follow : " + user.parent().parent().find("label h5 a").html());
	followuser(user.attr("data-ajax-href"))
}

setInterval(follownextuser, 500);
