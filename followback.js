function followuser(href)
{
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log(this.responseText);
		}
	}
	xhttp.open("POST", href, true);
	xhttp.send();
}


var userindex = 0;

// var ulist = $(".item-content").find("#follow-user");
var users = document.getElementsByClassName("item-content")

function follownextuser()
{
	// var user = $(ulist.get(userindex++));	
	var done = false;
	// while(user.hasClass("f-hide")) {
	while(!done) {
		var user = users[userindex++];
		var follow_btn = user.getElementsByClassName("ai-c")[0].getElementsByClassName("btn")[0];
		done = follow_btn.getAttribute("class").indexOf("f-hide") >= 0;
	}
	console.log("Follow : " + user.getElementsByTagName("label")[0].getElementsByTagName("h5")[0].innerText;
	// followuser(user.attr("data-ajax-href"))
	follow_user(follow_btn.getAttribute("data-ajax-href"));
}

setInterval(follownextuser, 500);
