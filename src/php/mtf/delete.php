<?php
  function do_delete($request) {

    global $servername;
    global $username;
    global $password;
    global $dbname;

    $class      = "";
    $where      = "";

    foreach($request as $key => $val)
    {
      switch($key)
      {
        case "class":
          $class = $val;
	        break;

        case "id":
	        $where = "where ".$key." = ".$val;
          break;

        default:
          break;
	    }
    }

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }

    $sql = "delete from ".$dbname."_".$class."s ".$where;

    echo $sql;  // for testing purposes

    $result = $conn->query($sql);

    echo $result;

    $conn->close();
  }
?>
