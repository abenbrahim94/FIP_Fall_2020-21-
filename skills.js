
    var ajax= new XMLHttpRequest();
    var method="GET";
    var url="api/skills.php";
    var asyn=true;
    ajax.open(method,url,asyn);
    ajax.send();
    ajax.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            
            const resObj=JSON.parse(this.responseText);
            console.log(resObj);
             document.getElementById("skill1").innerHTML=resObj[0].skill1;
            document.getElementById("skill2").innerHTML=resObj[0].skill2;
            document.getElementById("skill3").innerHTML=resObj[0].skill3;
        }
    }