<?php include_once("functions/constant.php"); ?>
<?php include_once("functions/db_conn.php"); 



?>

<?php
$msg="";

if(isset($_REQUEST["btnsubmit"]) && ($_REQUEST["name"]!='') && ($_REQUEST["email"]!='') && ($_REQUEST["phone"]!='') && ($_REQUEST["message"]!='') ){
    $conn=connectToDb();
$name=$_REQUEST["name"];
$email=$_REQUEST["email"];
$phone=$_REQUEST["phone"];
$message=$_REQUEST["message"];
if(! $conn ) {
    die('Could not connect: ');
 }
$sql="INSERT into contact (contact_name,c_email,c_no,message) VALUES ('$name','$email','$phone','$message')";
$result=mysqli_query($conn,$sql);
if($result){
$msg="successfull";
// include_once("phpmailer/class.phpmailer.php");
// $mail=new PHPMailer;
// $mail->Host='smtp.gmail.com';
// $mail->Port=587;
// $mail->SMTPAuth=true;
// $mail->SMTPSecure='tls';
// $mail->Username='wajeeh346@gmail.com';
// $mail->Password='12345';

// $mail->setFrom($_REQUEST["email"], $_REQUEST["name"]);
// $mail->addAddress("wajeeh346@gmail.com");
// $mail->addReplyTo($_REQUEST["email"], $_REQUEST["name"]);

// $mail->isHTML(true);
// $mailSubject="form submission";
// if(!$mail->send()){
//     echo "Something went wrong";

// }
// else{
//     echo "message send successfully";
// }



}
else{
    $msg="error";
}



mysqli_close($conn);

}

?>