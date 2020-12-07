
    var ajax= new XMLHttpRequest();
    var method="GET";
    var url="api/social-links.php";
    var asyn=true;
    ajax.open(method,url,asyn);
    ajax.send();
    ajax.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            
            const resObj=JSON.parse(this.responseText);
            console.log(resObj);
            document.getElementById("fb").href=resObj[0].link;
            document.getElementById("insta").href=resObj[1].link;
            document.getElementById("twt").href=resObj[2].link;
            document.getElementById("yt").href=resObj[3].link;

        }
    }