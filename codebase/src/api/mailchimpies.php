<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: access-control-allow-methods, access-control-allow-origin");
header("Access-Control-Allow-Credentials", "true");

$host = "localhost"; 
$user = "root"; 
$password = "Mailchimp!!:3"; 
$dbname = "mailchimpies"; 
$id = '';

$con = mysqli_connect($host, $user, $password, $dbname);

$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));

if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}


switch ($method) {
    case 'GET':
      $name = 'Andrew Kou';
      $sql = "select * from bill".($name?" where name=$name":''); 
      break;
    case 'POST':
      $name = $_POST["name"];
      $major = $_POST["major"];
      $year = $_POST["year"];
      $birthday = $_POST["birthday"];
      $favfood = $_POST["favfood"];
      $funfact = $_POST["funfact"];

      $sql = "insert into bill (name, major, year, birthday, favfood, funfact) values ('$name', '$major', '$year', '$birthday', '$favfood', '$funfact')"; 
      break;
}

// run SQL statement
$result = mysqli_query($con,$sql);

// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($con));
}

if ($method == 'GET') {
    if (!$id) echo '[';
    for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
      echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
    if (!$id) echo ']';
  } elseif ($method == 'POST') {
    echo json_encode($result);
  } else {
    echo mysqli_affected_rows($con);
  }

$con->close();