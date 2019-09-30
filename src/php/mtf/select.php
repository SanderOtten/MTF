<?php
  function do_select($request) {

    global $servername;
    global $username;
    global $password;
    global $dbname;

    $class      = "";
    $columns    = "*";
    $json       = "N";
    $mtf        = "N";
    $where      = "where 1 = 1";

    $rows       = array();
    $mtfrows    = "";

    foreach($request as $key => $val)
    {
      switch($key)
      {
        case "class":
          $class = $val;
	        break;

        case "columns":
  	      $columns = $val;
	        break;

        case "json":
	        $json = $val;
	        break;

        case "mtf":
	        $mtf = $val;
	        break;

        default:
	        $where = $where." and ".$key." = '".$val."'";
	        break;
      }
    }

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }

    $sql = "select ".$columns." from ".$dbname."_".$class."s_vw ".$where;

    //echo $sql;  // for testing purposes

    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
      while($row = $result->fetch_assoc()) {
        if ( $mtf === "Y" ) {
   	      if ( $mtfrows === "" ) {
	          $mtfrows = '{ "'.$row["label"].'" : "'.$row["translation"].'"';
	        } else {
	          $mtfrows = $mtfrows.', "'.$row["label"].'" : "'.$row["translation"].'"';
	        }
        } else {
  	      $rows[] = $row;
        }
      }

      if ( $mtf === "Y" ) {
        echo $mtfrows.' }';
      } else {
        echo json_encode($rows);
      }
    } else {
      echo '0';
    }

    $conn->close();
  }
?>
