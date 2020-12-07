function submit(){
    e.preventDefault();
var name=document.getElementById("fname").value;
var email=document.getElementById("email").value;
var phone=document.getElementById("phone").value;
var msg=document.getElementById("msg").value;




var ajax= new XMLHttpRequest();
var method="POST";
var url="api/contact.php";
var asyn=true;
ajax.open(method,url,asyn);
    ajax.send(name,email,phone,msg);
    ajax.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            
            const resObj=JSON.parse(this.responseText);
            console.log(resObj);
            document.getElementById("msg").innerHTML="Message sent sucessfully!";
     
        }
        document.getElementById("msg").innerHTML="Message failed";
    }


}