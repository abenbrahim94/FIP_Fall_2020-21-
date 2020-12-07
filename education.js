
    var ajax= new XMLHttpRequest();
    var method="GET";
    var url="api/education.php";
    var asyn=true;
    ajax.open(method,url,asyn);
    ajax.send();
    ajax.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            
            const resObj=JSON.parse(this.responseText);
            console.log(resObj);
            document.getElementById("edu-degree").innerHTML=resObj[0].degree;
            document.getElementById("edu-institute").innerHTML=resObj[0].institute;
            document.getElementById("edu-startdate").innerHTML=resObj[0].edu_start_date;
            document.getElementById("edu-enddate").innerHTML=resObj[0].edu_end_date;
            document.getElementById("edu-degree2").innerHTML=resObj[1].degree;
            document.getElementById("edu-institute2").innerHTML=resObj[1].institute;
            document.getElementById("edu-startdate2").innerHTML=resObj[1].edu_start_date;
            document.getElementById("edu-enddate2").innerHTML=resObj[1].edu_end_date;
            document.getElementById("edu-degree3").innerHTML=resObj[2].degree;
            document.getElementById("edu-institute3").innerHTML=resObj[2].institute;
            document.getElementById("edu-startdate3").innerHTML=resObj[2].edu_start_date;
            document.getElementById("edu-enddate3").innerHTML=resObj[2].edu_end_date;

            // document.getElementsByClassName("name").innerHTML=resObj.lname;
        }
    }
