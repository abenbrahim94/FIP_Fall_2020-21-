var ajax= new XMLHttpRequest();
    var method="GET";
    var url="api/person.php";
    var asyn=true;
    ajax.open(method,url,asyn);
    ajax.send();
    ajax.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            
            const resObj=JSON.parse(this.responseText);
            console.log(resObj);
            
        
                // setTimeout(function() {
                //   __flowai_webclient_app.open()
                //   }, 5000)
                // document.getElementById("fname").innerHTML=resObj.fname;
                // document.getElementById("lname").innerHTML=resObj.lname;
                // document.getElementById("descp").innerHTML=resObj.description;
                document.getElementById("ab-content").innerHTML=resObj.about;
               
                
            
        }
    }


 

   

