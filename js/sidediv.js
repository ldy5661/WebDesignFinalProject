function showbox()
    { 
        if(document.getElementById("sideDiv1").style.display != "")
        {document.getElementById("sideDiv1").style.display = "";} 
        else{document.getElementById("sideDiv1").style.display = "none";} 
    }

function changeImage() {
    if (document.getElementById("hoursicon").className.match("glyphicon glyphicon-plus-sign red")) {
       document.getElementById("hoursicon").setAttribute("class","glyphicon glyphicon-minus-sign red");
    }else{
		document.getElementById("hoursicon").setAttribute("class","glyphicon glyphicon-plus-sign red");
	} 
}

$(document).ready(function(){
	$("#sidepanel1 p.menu_head").mouseover(function(){
		$(this).next("div.menu_body").slideDown(500).siblings("div.menu_body").slideUp("slow");
	});
});

