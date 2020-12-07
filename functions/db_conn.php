<?php
function connectToDb(){
    if(defined("DB_HOST") && defined("DB_USER") && defined("DB_PASS") && defined("DB_NAME")){
        $conn=mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);
        if($conn){
            //echo "Connection successfull";
            return $conn;
        }
        else
        {
            echo "connection failed";
        }
    }

}




?>