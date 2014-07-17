$(document).ready(function() {
    var i = 0;
    var info = 0;

    $.ajax({
        url : 'data/guitar.json',
        type : 'GET',
        dataType : 'json',
        success : function(data) {
            info = data;
            var imgpath = "images/";
            imgpath = imgpath + info.allProducts[i].image_path;

            $("#myimg").attr('src', imgpath);
            
            $("#price").text(info.allProducts[i].price_de);
            

            
            $("#innerproduct").text(info.allProducts[i].product_discription);
            
            $("#innershipping").text(info.allProducts[i].shipping_details);
            $("#innercusto").text(info.allProducts[i].custmer_reviews);
        }

    });

    
   

    $('#btnpre').click(function() {
        i--;
        
//if(i==0){i=6;}
        if(i>=0){
        var imgpath = 'images/' + info.allProducts[i].image_path;
        $('#myimg').attr('src', imgpath);}
        else{i=7;}
        $("#price").text(info.allProducts[i].price_de);
        
        $("#innerproduct").text(info.allProducts[i].product_discription);
        $("#innershipping").text(info.allProducts[i].shipping_details);
        $("#innercusto").text(info.allProducts[i].custmer_reviews);
i=0;
    });
    
    $('#btnnext').click(function() {

        i++;
        if(i<7){
        
           
        var imgpath = 'images/' + info.allProducts[i].image_path;
        $('#myimg').attr('src', imgpath);
        }
        else{i=-1;}
        
        $("#price").text(info.allProducts[i].price_de);
        
        $("#innerproduct").text(info.allProducts[i].product_discription);
        $("#innershipping").text(info.allProducts[i].shipping_details);
        $("#innercusto").text(info.allProducts[i].custmer_reviews);
    });
    
    
    $("#innerproduct").hide();
$("#innerbtn1").click(function(){
	$("#innerproduct").toggle(1000);

		var currentText=$(this).text();
		if(currentText=="-"){
			$(this).text("+");
		}
		else{
			$(this).text("-");

		}
		
		$("#mydiv").toggle();

	});
$("#innershipping").hide();
$("#innerbtn2").click(function(){
	$("#innershipping").toggle();

		var currentText=$(this).text();
		if(currentText=="-"){
			$(this).text("+");
		}
		else{
			$(this).text("-");

		}
		$("#mydiv").toggle();

	});
$("#innercusto").hide();
$("#innerbtn3").click(function(){
	$("#innercusto").toggle();

		var currentText=$(this).text();
		if(currentText=="-"){
			$(this).text("+");
		}
		else{
			$(this).text("-");

		}
		$("#mydiv").toggle();

	});

$("#buy").click(function(){
    window.location="guiter2.html";
    localStorage.store=i;
   
});
    
});
    
