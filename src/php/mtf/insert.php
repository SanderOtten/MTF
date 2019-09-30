<?php
  function do_insert($request) {

    global $servername;
    global $username;
    global $password;
    global $dbname;

    $class      = "";
    $insert_str = "";
    $value_str  = "";

    foreach($request as $key => $val)
    {
      switch($key)
      {
        case "class":
          $class = $val;
	        break;

        default:
   	      if ( $insert_str === "" ) {
	          $insert_str = $key;
            $value_str  = get_value($val);
	        } else {
	          $insert_str = $insert_str.", ".$key;
            $value_str  = $value_str.", ".get_value($val);
	        }
	        break;
      }
    }

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }

    $sql = "insert into ".$dbname."_".$class."s ( ".$insert_str." ) values ( ".$value_str." )";

    // echo $sql;

    $result = $conn->query($sql);

    echo $result;

    $conn->close();
  }
?>
