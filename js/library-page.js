$(document).ready(function(){
	$("#page1").click(function(){
		$("#page2-div").addClass("hide");
		$("#page3-div").addClass("hide");
		$("#page4-div").addClass("hide");
		$("#page5-div").addClass("hide");
		$("#page1-div").removeClass("hide");
		$("#page1").addClass("active");
		$("#page2").removeClass("active");
		$("#page3").removeClass("active");
		$("#page4").removeClass("active");
		$("#page5").removeClass("active");
		
	});
	
	$("#page2").click(function(){
		$("#page1-div").addClass("hide");
		$("#page3-div").addClass("hide");
		$("#page4-div").addClass("hide");
		$("#page5-div").addClass("hide");
		$("#page2-div").removeClass("hide");
		$("#page2").addClass("active");
		$("#page1").removeClass("active");
		$("#page3").removeClass("active");
		$("#page4").removeClass("active");
		$("#page5").removeClass("active");
	});

	$("#page3").click(function(){
		$("#page2-div").addClass("hide");
		$("#page1-div").addClass("hide");
		$("#page4-div").addClass("hide");
		$("#page5-div").addClass("hide");
		$("#page3-div").removeClass("hide");
		$("#page3").addClass("active");
		$("#page2").removeClass("active");
		$("#page1").removeClass("active");
		$("#page4").removeClass("active");
		$("#page5").removeClass("active");
	});
	
	$("#page4").click(function(){
		$("#page2-div").addClass("hide");
		$("#page3-div").addClass("hide");
		$("#page1-div").addClass("hide");
		$("#page5-div").addClass("hide");
		$("#page4-div").removeClass("hide");
		$("#page4").addClass("active");
		$("#page2").removeClass("active");
		$("#page3").removeClass("active");
		$("#page1").removeClass("active");
		$("#page5").removeClass("active");
	});
	
	$("#page5").click(function(){
		$("#page2-div").addClass("hide");
		$("#page3-div").addClass("hide");
		$("#page4-div").addClass("hide");
		$("#page1-div").addClass("hide");
		$("#page5-div").removeClass("hide");
		$("#page5").addClass("active");
		$("#page2").removeClass("active");
		$("#page3").removeClass("active");
		$("#page4").removeClass("active");
		$("#page1").removeClass("active");
	});
});