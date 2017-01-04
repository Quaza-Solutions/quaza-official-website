function clientFunction1() {
	if( $("#client-1").hasClass("part-1") ) {
		$("#client-1").removeClass("part-1");
		} else {
		$("#client-1").addClass("part-1");
		$("#client-2").removeClass("part-2");
		$("#client-3").removeClass("part-3");
		$("#client-4").removeClass("part-4");
		$("#client-5").removeClass("part-5");
		
		}
}

function clientFunction2() {
	if( $("#client-2").hasClass("part-2") ) {
		$("#client-2").removeClass("part-2");
		
		} else {
		$("#client-2").addClass("part-2");
		$("#client-1").removeClass("part-1");
		$("#client-3").removeClass("part-3");
		$("#client-4").removeClass("part-4");
		$("#client-5").removeClass("part-5");
		
		}
}

function clientFunction3() {
	if( $("#client-3").hasClass("part-3") ) {
		$("#client-3").removeClass("part-3");
		} else {
		$("#client-3").addClass("part-3");
		$("#client-1").removeClass("part-1");
		$("#client-2").removeClass("part-2");
		$("#client-4").removeClass("part-4");
		$("#client-5").removeClass("part-5");
		}
}

function clientFunction4() {
	if( $("#client-4").hasClass("part-4") ) {
		$("#client-4").removeClass("part-4");		
		} else {
		$("#client-4").addClass("part-4");
		$("#client-1").removeClass("part-1");
		$("#client-2").removeClass("part-2");
		$("#client-3").removeClass("part-3");
		$("#client-5").removeClass("part-5");
		
		}
}

function clientFunction5() {
	if( $("#client-5").hasClass("part-5") ) {
		$("#client-5").removeClass("part-5");
		
		} else {
		$("#client-5").addClass("part-5");
		$("#client-1").removeClass("part-1");
		$("#client-2").removeClass("part-2");
		$("#client-3").removeClass("part-3");
		$("#client-4").removeClass("part-4");		
		}
}


	$(document).ready(function(){
  		$("#partners-2").hide();
  		$("#partners-3").hide();
  		$("#partners-4").hide();
  		$("#partners-5").hide();
       $("#partners-1").show();
	   
     $("#partn-1").click(function(){
		$("#partners-1").show();
        $("#partners-2").hide();
        $("#partners-3").hide();
        $("#partners-4").hide();
        $("#partners-5").hide();
    });
	 
     $("#partn-2").click(function(){
		$("#partners-1").hide();
        $("#partners-2").show();
        $("#partners-3").hide();
        $("#partners-4").hide();
        $("#partners-5").hide();
    });
	 
    $("#partn-3").click(function(){
		$("#partners-1").hide();
		$("#partners-2").hide();
        $("#partners-3").show();
		$("#partners-4").hide();
		$("#partners-5").hide();
    });
    $("#partn-4").click(function(){
  		$("#partners-1").hide();
		$("#partners-2").hide();
        $("#partners-3").hide();
        $("#partners-4").show();
        $("#partners-5").hide();
    });
    $("#partn-5").click(function(){
  		$("#partners-1").hide();
		$("#partners-2").hide();
        $("#partners-3").hide();
        $("#partners-4").hide();
        $("#partners-5").show();
    });
});