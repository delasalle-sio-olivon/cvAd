<?php
session_start();
include_once '../model/DAO.class.php';
$dao= new DAO();
$postdata = file_get_contents("php://input");
if($postdata){
	$request = json_decode($postdata);
	$dao->setData($request);
}else{
	
	$dao->getData();
}