
    var ajax= new XMLHttpRequest();
    var method="GET";
    var url="api/project.php";
    var asyn=true;
    ajax.open(method,url,asyn);
    ajax.send();
    ajax.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            
            const resObj=JSON.parse(this.responseText);
            console.log(resObj);
            document.getElementById("proj-name").innerHTML=resObj[0].p_name;
            document.getElementById("proj-descp").innerHTML=resObj[0].p_description;
            document.getElementById("proj-tool1").innerHTML=resObj[0].tool1;
            document.getElementById("proj-tool2").innerHTML=resObj[0].tool2;
            document.getElementById("proj-tool3").innerHTML=resObj[0].tool3;
            document.getElementById("proj1-name").innerHTML=resObj[1].p_name;
            document.getElementById("proj1-descp").innerHTML=resObj[1].p_description;
            document.getElementById("proj1-tool1").innerHTML=resObj[1].tool1;
            document.getElementById("proj1-tool2").innerHTML=resObj[1].tool2;
            document.getElementById("proj1-tool3").innerHTML=resObj[1].tool3;
            document.getElementById("proj2-name").innerHTML=resObj[2].p_name;
            document.getElementById("proj2-descp").innerHTML=resObj[2].p_description;
            document.getElementById("proj2-tool1").innerHTML=resObj[2].tool1;
            document.getElementById("proj2-tool2").innerHTML=resObj[2].tool2;
            document.getElementById("proj2-tool3").innerHTML=resObj[2].tool3;
            // document.getElementsByClassName("name").innerHTML=resObj.lname;
        }
    }