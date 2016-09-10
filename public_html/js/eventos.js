var empiezaApp = function()
{
	var clickliga=0;
	var app_id='1578830289112258';
	var scopes='email, user_friends,';// user_online_presence

	var btn_login='<button type="button" href="#" id="login" class="btn btn-default azul" align="center"><i class="fa fa-facebook" aria-hidden="true"></i>	Iniciar sesion con Facebook</button>';

	var div_session="<div id='facebook-session'>"+
					"<table>"+
					"<tr><td><img height='130'></td>"+
					"<td><em></em>"+
					"<a href='#' id='logout' class='btn btn-danger'>Cerrar sesión</a></td>"+
					"</tr>"
					"</div>";

	//funcion facebook
	window.fbAsyncInit = function() {
		FB.init({
			appId      : app_id,
			status     : true,
			cookie     : true,
			xfbml      : true, 
			version    : 'v2.2' 
		});
		FB.getLoginStatus(function(response) {
			statusChangeCallback(response, function() {

			});
		});
	 };

	var statusChangeCallback = function(response, callback) {
	    console.log('statusChangeCallback');
	    console.log(response);
	    if (response.status === 'connected') {
	    	getFacebookData();
	    	//mostarFace();
	    } else {
	    	callback(false);
	    }
	}

	var checkLoginState = function(callback) {
	    FB.getLoginStatus(function(response) {
	      statusChangeCallback(response, function(data) {
	      	callback(data);
			});
	    });
	}
	var getFacebookData =function()
	{
		FB.api('/me', function(response){
			$('#login').after(div_session);
			$('#login').remove();
			$('#facebook-session em').text(""+response.name);
			$('#facebook-session img').attr('src','img/face.png?type=large');
		})

	}
	var facebookLogin = function() {
		checkLoginState(function(response) {
			if(!response){
				FB.login(function(response){
					if(response.status ==='connected')
						getFacebookData();
						mostarFace();
				},{scope: scopes});
			}
		})
	}
	var facebookLogout = function(){
		FB.getLoginStatus(function(response) {
			if (response.status === 'connected') {
				FB.logout(function(response){
					$('#facebook-session').before(btn_login);
					$('#facebook-session').remove();
					mostarNoFace();
				})
			}
		});
	}
	//funciones

	var mostarFace = function()
	{
		$("#gSignIn").hide("slow");
		$("#btnNoLogin").hide("slow");
		$("#btncontinuarFace").show("fast");
	}
	var mostarNoFace = function()
	{
		$("#gSignIn").show("slow");
		$("#btnNoLogin").show("slow");
		$("#btncontinuarFace").hide("fast");
	}
	var continuarFAce = function()
	{
		$("#contenrdorLogin").hide("slow");
		$("#selecionaliga").show("fast");
		tab();
	}

	var cargar = function()
	{
		$("#logocargando").hide("slow");//ocultamos
		$(".container").show("slow");//mostramos
		$(".logo").show("slow");
	}
	setTimeout(cargar, 1000);
	var noLogin = function()
	{
		$("#contenrdorLogin").hide("slow");
		$("#selecionaliga").show("fast");
		tab();
	}
	// Select all tabs
	
	var tab = function(){
			//var tab_id = $(this).attr('data-tab');

			$('ul.tabs li').removeClass('current');
			$('.tab-content').removeClass('current');

			$(".selecionaliga").addClass('current');
			$("#selecionaliga").addClass('current');
			//Consultas();
			//selecionaliga
	}
	var Consultas = function()
	{
		if (clickliga<1) 
		{
			clickliga=(clickliga+1);
			var parametros = "opc=ConsultaLiga"+
							 "&id="+Math.random();
			$.ajax({
				cache:false,
				type: "POST",
				dataType: "json",
				url: "php/ConsultaLiga.php",
				data: parametros,
				 success: function (response) {
					 	$("#selectLiga").html("");
						$("#selectLiga").append(response.liga);
						$("#selectCategoria").html("");
						$("#selectCategoria").append(response.rama);
						$("#selectCuidad").html("");
						$("#selectCuidad").append(response.ciudad);
						$("#selectEstado").html("");
						$("#selectEstado").append(response.deporte);
				  },
			      error: function (response) {
						//.append("<option value=\""+k+"\">"+v+"</option>")
						//$.each(data, function(k,v){
				        //    $("#poblaciones").append("<option value=\""+k+"\">"+v+"</option>");
				        //}).removeAttr("disabled");
			          console.log("Conexion no exitosa");
			      }
				
			});	
		}
		else
		{
			clickliga=(clickliga+1);	
		}
	}
	var Entrar = function()
	{
		$(".logo").hide("fast");
		$(".container").hide("fast");
		$(".contedor2").show("slow");
		$(".menu").show("slow");
		$(".comentarios").show("slow");
	}

	$("#btnNoLogin").on("click",noLogin);
	$("#btncontinuarFace").on("click",continuarFAce);
	$("#selectLiga").on("click",Consultas);
	$("#btnEnviar").on("click",Entrar);

	$(document).on('click', '#login', function(e){
		e.preventDefault();

		facebookLogin();
	})
	$(document).on('click', '#logout', function(e){
		e.preventDefault();
		if (confirm('¿Está seguro?'))
			facebookLogout();
		else
			return false;
	})
}
//inicializamos el JQuery
$(document).on("ready",empiezaApp);