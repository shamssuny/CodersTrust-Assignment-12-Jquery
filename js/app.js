$(document).ready(function(){

	$("#text").keyup(function(){
		var num= $("#text").val();
		num = 160 - num.length;
        $("#p").text(num);
        if(num<0){
        	$("#p").addClass("red");
        	$("#p").removeClass("nocolor");
        }
        else if(num>0 || num ==0){
        	$("#p").addClass("nocolor");
        	$("#p").removeClass("red");
        }
	});


	$("#bname").click(function(){

		var fn = $("#name").text();
		$("#fname").val(fn);
		this.disabled = true;

	});

	$("#bins1").click(function(){

		var fn = $("#ins1").text();
		$("#fins1").val(fn);
		this.disabled = true;

	});

	$("#bins2").click(function(){

		var fn = $("#ins2").text();
		$("#fins2").val(fn);
		this.disabled = true;

	});

	$("#bbatch").click(function(){

		var fn = $("#batch").text();
		$("#fbatch").val(fn);
		this.disabled = true;

	});

	$("#bbye").click(function(){

		var fn = $("#bye").text();
		$("#fbye").val(fn);
		this.disabled = true;

	});



	$("#all").click(function(){
		//disable all button
		$(':button').prop('disabled', true);

		var fn = $("#name").text();
		$("#fname").val(fn);
		

		var fn = $("#ins1").text();
		$("#fins1").val(fn);

		var fn = $("#ins2").text();
		$("#fins2").val(fn);

		var fn = $("#batch").text();
		$("#fbatch").val(fn);

		var fn = $("#bye").text();
		$("#fbye").val(fn);


	});

	$("#res").click(function(){
		//to enable all buttons
		$(':button').prop('disabled', false);
	});

});