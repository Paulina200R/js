<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $contrasena = $_POST["contrasena"];

    $api_url = 'link';
    $data = array('nombre' => $nombre, 'correo' => $correo, 'contrasena' => $contrasena);

    $ch = curl_init($api_url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));

    $response = curl_exec($ch);
    $http_status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if($http_status == 200){

    }else{
        $error_message = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    }
}
?>