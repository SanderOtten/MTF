<?php
  function do_update($request) {

    global $servername;
    global $username;
    global $password;
    global $dbname;

    $class      = "";
    $where      = "";
    $set        = "";

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
   	      if ( $set === "" ) {
	          $set = "set ".$key." = ".get_value($val);
	        } else {
	          $set = $set.", ".$key." = ".get_value($val);
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

    $sql = "update ".$dbname."_".$class."s ".$set." ".$where;

    // echo $sql;  // for testing purposes

    $result = $conn->query($sql);

    echo $result;

    $conn->close();
  }
?>
