var speed = 1000;
var percentFocus = 60;
var percentOthers = ((100 - percentFocus) / 2 ) - 1;
percentFocus -= 1;
percentFocus += ''+ '%';
percentOthers += ''+ '%';
/*
function show(div){
	var main = $('#main');
	var cv = $('#cv');
	var pres = $('#pres');
	$('#main').removeClass("show");
	$('#cv').removeClass("show");
	$('#pres').removeClass("show");
	
	$('#main').removeClass("cacher");
	$('#cv').removeClass("cacher");
	$('#pres').removeClass("cacher");
	
	$("#"+div).addClass("show");
	
	if(!$('#main').hasClass("show")){
		$('#main').addClass('cacher');
	}
	
	if(!$('#cv').hasClass("show")){
		$('#cv').addClass('cacher');
	}
	
	if(!$('#pres').hasClass("show")){
		$('#pres').addClass('cacher');
	}
	
	$('.cacher').each(function(){
		w = Math.round(($(this).width()*100)/$(window).width());
		w += "" + "%";
		if(w != percentOthers){
			$(this).animate({"width":percentOthers}, speed);
		}
	});
	
	
	var w = Math.round(($('.show').width()*100)/$(window).width());
	w += ""+"%"
	if(w != percentFocus){
		$('.show').animate({"width": percentFocus }, speed);
	}
	$('#main').trigger('changeClass');
}


$(document).ready(function(){
	$('.pf').width(percentFocus);
	$('.po').width(percentOthers);
	$('#main').click(function(){
		$('#main').stop();
		$('#cv').stop();
		$('#pres').stop();
		show("main");
	});
	$('#cv').click(function(){
		$('#main').stop();
		$('#cv').stop();
		$('#pres').stop();
		show("cv");
	});
	$('#pres').click(function(){
		$('#main').stop();
		$('#cv').stop();
		$('#pres').stop();
		show("pres");
	});
	
		
});
*/
