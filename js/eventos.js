var empiezaApp = function()
{
	var Desplegado=false;
	$("#login").addClass('active');
	$("#Home").addClass('active');
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
		$("#divHome").show("slow");
	}

	var Home =function()
	{
		$("#divHome").show("slow");
		$("#divResultados").hide("fast");
		$("#divCalendario").hide("fast");
		$("#divEstadisticas").hide("fast");
	}
	var Resultados =function()
	{
		$("#divResultados").show("slow");
		$("#ResultadosTab").show("slow");
		$("#muestraResultados").show("slow");
		$("#divHome").hide("fast");
		$("#divCalendario").hide("fast");
		$("#divEstadisticas").hide("fast");
		
	}
	var Calendario =function()
	{
		$("#divCalendario").show("slow");
		$("#divResultados").hide("fast");
		$("#divHome").hide("fast");
		$("#divEstadisticas").hide("fast");
		$("#FECHA").addClass('active');
		$("#EQUIPO").removeClass('active');
		$("#divEQUIPO").hide("fast");
		$("#divFECHA").show('fast');
	}
	var Estadisticas =function()
	{
		$("#divEstadisticas").show("slow");
		$("#divResultados").hide("fast");
		$("#divCalendario").hide("fast");
		$("#divHome").hide("fast");
		//activar tab selecionado
		$("#GENERAL").addClass('active');
		$("#PICHEO").removeClass('active');
		$("#BATEO").removeClass('active');
		// mostrar div
		$("#divPICHEO").hide("fast");
		$("#divBATEO").hide("fast");
		$("#divGENERAL").show('fast');
	}
	var General =function () 
	{
		//activar tab selecionado
		$("#GENERAL").addClass('active');
		$("#PICHEO").removeClass('active');
		$("#BATEO").removeClass('active');
		// mostrar div
		$("#divPICHEO").hide("fast");
		$("#divBATEO").hide("fast");
		$("#divGENERAL").show('fast');
	}
	var Picheo =function () 
	{
		//activar tab selecionado
		$("#PICHEO").addClass('active');
		$("#GENERAL").removeClass('active');
		$("#BATEO").removeClass('active');
		// mostrar div
		$("#divPICHEO").show('fast');
		$("#divBATEO").hide("fast");
		$("#divGENERAL").hide("fast");
	}
	var Bateo =function () 
	{
		//activar tab selecionado
		$("#BATEO").addClass('active');
		$("#GENERAL").removeClass('active');
		$("#PICHEO").removeClass('active');
		// mostrar div
		$("#divBATEO").show('fast');
		$("#divPICHEO").hide("fast");
		$("#divGENERAL").hide("fast");
	}
	var Fecha =function ()
	{
		$("#FECHA").addClass('active');
		$("#EQUIPO").removeClass('active');
		$("#divEQUIPO").hide("fast");
		$("#divFECHA").show('fast');
	}
	var Equipo =function ()
	{
		$("#EQUIPO").addClass('active');
		$("#FECHA").removeClass('active');
		$("#divFECHA").hide("fast");
		$("#divEQUIPO").show('fast');
	}
	var Despliega =function ()
	{
		if (!Desplegado) 
		{
			$("#y").hide("fast");
			$("#z").hide("fast");
			$("#divDespliega").show('fast');
			Desplegado=true;
		} 
		else 
		{
			$("#y").show("fast");
			$("#z").show("fast");
			$("#divDespliega").hide('fast');
			Desplegado=false;
		}
	}

	$("#btnNoLogin").on("click",noLogin);
	$("#btncontinuarFace").on("click",continuarFAce);
	$("#selectLiga").on("click",Consultas);
	$("#btnEnviar").on("click",Entrar);
	$("#Home").on("click",Home);
	$("#Resultados").on("click",Resultados);
	$("#Calendario").on("click",Calendario);
	$("#Estadisticas").on("click",Estadisticas);
	$("#BATEO").on("click",Bateo);
	$("#PICHEO").on("click",Picheo);
	$("#GENERAL").on("click",General);
	$("#EQUIPO").on("click",Equipo);
	$("#FECHA").on("click",Fecha);
	$("#Despliega").on("click",Despliega);
}
//inicializamos el JQuery
$(document).on("ready",empiezaApp);