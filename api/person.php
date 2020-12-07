<?php include_once("../functions/constant.php"); ?>
<?php include_once("../functions/db_conn.php"); ?>

<?php

$conn=connectToDb();
if(! $conn ) {
    die('Could not connect: ');
 }
$sql="SELECT * FROM person";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
echo json_encode($row);


mysqli_close($conn);


?>