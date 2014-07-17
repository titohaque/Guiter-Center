$(document).ready(function(){
	
    
    	//var i = 0;
    	var info = 0;

    	    $.ajax({
    	        url : 'data/guitar.json',
    	        type : 'GET',
    	        dataType : 'json',
    	        success : function(data) {
    	        info = data;
    	        var imgpath = "images/";
    	        imgpath = imgpath+ info.allProducts[localStorage.store].image_path;
    	       
    	         $("#myimg2").attr('src', imgpath);
    	        $("#guitar2div").text(info.allProducts[localStorage.store].product_discription);
    	        }

    	        });
    
    
    
    			
	$("#reviewform").hide();
	$("#reviewOrder").click(function(){
	
		var isvalid=0;
//Firtst name*********************************************************************************************************8
		var a=$("#fname").val();
		$("#fname1").text(a);

			if(a==""){
				$("#fname").css('border','1px solid red');
		}
			else	
		
			{$("#fname").css('border','');isvalid++;}
			
			//Middle name ***********************************************************************************
			var m=$("#mname").val();
			$("#mname1").text(m);
			
			if(m==""){
				$("#mname").css('border','1px solid red');
				
			}
			else	
				
			{$("#mname").css('border','');isvalid++;}

			//Last name **********************************************************************************************
		var b=$("#lname").val();
		$("#lname1").text(b);
		
		if(b==""){
			$("#lname").css('border','1px solid red');
			
		}
		else	
			
		{$("#lname").css('border','');isvalid++;}
		
		//Email address *************************************************8
		var x=$("#email").val();
        var check_x = /^([a-z A-Z 0-9_\.\-\+])+\@(([a-z A-Z 0-9\-])+\.)+([a-z A-Z 0-9]{2,4})+$/;
        var y=check_x.test(x);
       
        if(y==true){
            $("#email1").text(x);
            $("#email").val('');
            $("#email").css('border',''); isvalid++;
}
        
        else {	$("#email").css('border','1px solid red');}
		
		/*var c=$("#email").val();
		$("#email1").text(c);
if(c==""){
	$("#email").css('border','1px solid red');
}
else	
{$("#email").css('border','');isvalid++;}*/


//Cuty ******************************************************************

var p=$("#city1").val();
$("#city11").text(p);

	if(p==""){
		$("#city1").css('border','1px solid red');
}
	else	

	{
	isvalid++;

}
		
		
		var e=$("#add").val();
		$("#add1").text(e);
		if(e==""){
			$("#add").css('border','1px solid red');}
		else	
			
		{$("#add").css('border','');isvalid++;}
		

		if(isvalid==6){
			console.log(isvalid);
			$("#purchaceform").hide();
			$("#reviewform").show();
		}

		
		
	
	});
	
	$("#previewOrder").click(function(){
		$("#reviewform").hide();
		
		$("#purchaceform").show();
		
	});
	
	$("#buy").click(function(){
	    window.location="guiter3.html";
	    localStorage.details=localStorage.store;
	    localStorage.fname=$("#fname").val();
	    localStorage.mname=$("#mname").val();
	    localStorage.lname=$("#lname").val();
	    localStorage.email=$("#email").val();
	    localStorage.city1=$("#city1").val();
	    localStorage.add=$("#add").val();

	   

	   
	});

});

















