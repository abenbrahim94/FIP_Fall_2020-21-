
    var ajax= new XMLHttpRequest();
    var method="GET";
    var url="api/experience.php";
    var asyn=true;
    ajax.open(method,url,asyn);
    ajax.send();
    ajax.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            
            const resObj=JSON.parse(this.responseText);
            console.log(resObj);
            document.getElementById("exp-position").innerHTML=resObj[0].position;
            document.getElementById("exp-startdate").innerHTML=resObj[0].ex_start_date;
            document.getElementById("exp-enddate").innerHTML=resObj[0].ex_end_date;
            document.getElementById("exp-company").innerHTML=resObj[0].company;
            document.getElementById("exp-position2").innerHTML=resObj[1].position;
            document.getElementById("exp-startdate2").innerHTML=resObj[1].ex_start_date;
            document.getElementById("exp-enddate2").innerHTML=resObj[1].ex_end_date;
            document.getElementById("exp-company2").innerHTML=resObj[1].company;
            // document.getElementsByClassName("name").innerHTML=resObj.lname;
        }
    }