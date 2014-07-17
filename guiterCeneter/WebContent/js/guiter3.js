$(document).ready(function() {
var info = 0;
$.ajax({
url : 'data/guitar.json',
type : 'GET',
dataType : 'JSON',
success : function(data) {
info = data;
var imgpath = "images/";
imgpath = imgpath+ info.allProducts[localStorage.details].image_path;

$("#myimg3").attr('src', imgpath);

}

});

$("#conf1").html(localStorage.fname);
$("#conf2").html(localStorage.lname);
$("#conf3").html(localStorage.mname);

$("#conf4").html(localStorage.email);
$("#conf5").html(localStorage.city1);
$("#conf6").html(localStorage.add);



	
	
$("#gohome").click(function(){
    window.location="guiter1.html";
   
});
   
});
