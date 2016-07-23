var empiezaApp = function()
{
	$("#login").addClass('active');
	$("#divlogin").show('fast');
	$("#liga").removeClass('active');

	var cargar = function()
	{
		$("#logocargando").hide("fast");//ocultamos
		$("#registro").show("fast");//mostramos
		$("#logo").show("fast");
	}
	setTimeout(cargar, 1000);

	var noLogin =function()
	{
		$("#liga").addClass('active');
		$("#divlogin").hide("fast");
		$("#divliga").show('fast');
		$("#login").removeClass('active');
	}
	var continuarFAce =function()
	{
		$("#liga").addClass('active');
		$("#divlogin").hide("fast");
		$("#divliga").show('fast');
		$("#login").removeClass('active');
	}

	var Consultas =function()
	{

	}

	var Entrar =function()
	{
		$("#logo").hide("fast");
		$("#registro").hide("fast");
		$("#x").show("slow");
		$(".menu").show("slow");
		$(".comentarios").show("slow");
	}

	$("#btnNoLogin").on("click",noLogin);
	$("#btncontinuarFace").on("click",continuarFAce);
	$("#selectLiga").on("click",Consultas);
	$("#btnEnviar").on("click",Entrar);
}
//inicializamos el JQuery
$(document).on("ready",empiezaApp);