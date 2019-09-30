<?php
  if (isset($_SERVER['HTTP_ORIGIN'])) {
    //header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Credentials: true');
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
  }
  if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers:{$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
  }

  $servername = "localhost";
  $username   = "mtf_user";
  $password   = "h8ZVLmVNEtzpV87s";
  $dbname     = "mtf";

  // $language   = strtoupper($_REQUEST['language']);

  $method = $_SERVER['REQUEST_METHOD'];

  function get_value ($val) {
    if ( $val === "" || $val === '' )  {
      return "NULL";
    } else {
      return "'".$val."'";
    }
  }

  switch($method)
  {
    case "GET":
      include 'select.php';
      do_select($_REQUEST);
      break;

    case "POST":
      include 'insert.php';
      do_insert($_REQUEST);
      break;

    case "PUT":
      include 'update.php';
      do_update($_REQUEST);
      break;

    case "DELETE":
      include 'delete.php';
      do_delete($_REQUEST);
      break;

    default:
      // include 'select.php';
      // do_select($_REQUEST);
      break;
  }
?>
