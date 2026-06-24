<?php
    /**
     * adatbazis kapcsolat include file
     * mysql, db neve: repadb
     */
   $serverName = "localhost";
$dbUsername = "repauser";
$dbPassword = "repatitok";
$dbName = "repadb";


    $conn = mysqli_connect($serverName, $dbUsername, $dbPassword, $dbName);

if (!$conn) {
    die(
        "MySQL connect error (" . mysqli_connect_errno() . "): "
        . mysqli_connect_error()
    );
}
