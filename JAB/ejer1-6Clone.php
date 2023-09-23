<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["idusuario"];
    $correo = $_POST["idactividad"];
    $contrasena = $_POST["nota1"];
    $rol = $_POST["nota2"];
    $nombre = $_POST["nota3"];
    $correo = $_POST["nota4"];
    $contrasena = $_POST["nota5"];
    $rol = $_POST["prom"];
    
    $api_url = 'https://pr2006.000webhostapp.com/apiescuela/controlador/postnota.php';
    $data = array('idusuario' => $idusuario, 'idactividad' => $idactividad, 'nota1' => $nota1, 'nota2' => $nota2,'nota3' => $nota3, 'nota4' => $nota4, 'nota5' => $nota5, 'prom' => $prom);

    $ch = curl_init($api_url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));

    $response = curl_exec($ch);
    $http_status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    // Verificar la respuesta de la API y realizar acciones en consecuencia
    if ($http_status == 200) {
        // Autenticación exitosa, redirigir o mostrar un mensaje de éxito
        echo $http_status;
        // header("Location: welcome.php");
        // exit;
    } else {
        // Autenticación fallida, mostrar un mensaje de error
        $error_message = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/practiceClone.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap" rel="stylesheet">
</head>

<body>
    <section>
        <form action="https://pr2006.000webhostapp.com/apiescuela/controlador/postnota.php" method="post">
            <input type="text" id="idusuario" name="idusuario" class="inputs" placeholder="Ingrese el id del estudiante"><br>
            <input type="text" id="idactividad" name="idactividad" class="inputs" placeholder="Ingrese el id de la actividad"><br>
            <input type="text" id="nota1" name="nota1" class="inputs" placeholder="Ingrese la nota #1"><br>
            <input type="text" id="nota2" name="nota2" class="inputs" placeholder="Ingrese la nota #2"><br>
            <input type="text" id="nota3" name="nota3" class="inputs" placeholder="Ingrese la nota #3"><br>
            <input type="text" id="nota4" name="nota4" class="inputs" placeholder="Ingrese la nota #4"><br>
            <input type="text" id="nota5" name="nota5" class="inputs" placeholder="Ingrese la nota #5"><br>
            <input type="text" id="prom" name="prom" class="result"><br>
            <br><input type="button" id="resultado" class="btn imp" value="Sacar promedio"><br>
            <br><input type="submit" id="guardar" class="btn save" value="Guardar nota"><br>
        </form>
        <button class="reload"><b>Realizar otra consulta</b></button>
    </section>
    <script src="js/ejer1-6Clone.js"></script>
</body>

</html>