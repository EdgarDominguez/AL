<?php
function ConsultaLiga()
{

	$respuesta= false;
	$conexion = mysql_connect('mysql13.000webhost.com','a4576835_bdal','Bytikop1');
	
	$res1=mysql_query('use a4576835_bdal');
	//mysql_select_db('a4576835_bdal');
	mysql_query('SET NAMES utf8');//caracteres latinos
	$consulta = sprintf('select c.nombre as ciudad,d.DESCRIPCION as deporte,r.DESCRIPCION as rama,l.nombre as liga from t_liga l INNER JOIN c_ciudad c on l.fk_ciudad=c.id_ciudad INNER JOIN c_rama r on l.FK_RAMA=r.ID_RAMA INNER JOIN c_deporte d on l.FK_DEPORTE=d.ID_DEPORTE');
	$resconsulta=mysql_query($consulta);
	$selectCiudad="";
	$selectDeporte="";
	$selectRama="";
	$selectLiga="";
	if(mysql_num_rows($resconsulta)>0)//si hay datos
	{
		//armar btnselect
		//$btnselect="<option>Seleccionar</option>";
		//extraer datos
		while ($fila = mysql_fetch_array($resconsulta)) 
		{
			$selectCiudad.="<option>".$fila["ciudad"]."</option>";
			$selectDeporte.="<option>".$fila["deporte"]."</option>";
			$selectRama.="<option>".$fila["rama"]."</option>";
			$selectLiga.="<option>".$fila["liga"]."</option>";
		}
		$respuesta=true;
	}
	else
	{
		$selectCiudad="xxxxxxxx";
		$selectDeporte="No disponible";
		$selectRama="No disponible";
		$selectLiga="No disponible";
	}
	$salidaJSON = array('respuesta' => $respuesta,
						'ciudad' => $selectCiudad,
						'deporte' => $selectDeporte,
						'rama' => $selectRama,
						'liga' => $selectLiga);

	print json_encode($salidaJSON);
}
$opc = $_POST["opc"];
switch ($opc) {
	case 'ConsultaLiga':
		ConsultaLiga();
		break;
	
	default:
		# code...
		break;
}
?>