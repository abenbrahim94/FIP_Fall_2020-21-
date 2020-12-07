<?php include_once("../functions/constant.php"); ?>
<?php include_once("../functions/db_conn.php"); ?>

<?php
$conn=connectToDb();
if(! $conn ) {
    die('Could not connect: ');
 }
$sql="SELECT * FROM education";
$result=mysqli_query($conn,$sql);
$recordsFound=mysqli_num_rows($result);
if($recordsFound>0){
for($i=0;$i<$recordsFound;$i++)
$row[$i]=mysqli_fetch_assoc($result);
}
echo json_encode($row);


mysqli_close($conn);

?>