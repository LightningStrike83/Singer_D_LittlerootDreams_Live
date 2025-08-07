<?php

$dsn = "mysql:host=localhost;dbname=kkwjajen_pokemon_db;charset=utf8mb4";
try {
$connection = new PDO($dsn, 'kkwjajen_public', 'cgrD~664=ak5');
} catch (Exception $e) {
  error_log($e->getMessage());
  exit('unable to connect');
}

?>