
    var ajax= new XMLHttpRequest();
    var method="GET";
    var url="api/animate.php";
    var asyn=true;
    ajax.open(method,url,asyn);
    ajax.send();
    ajax.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            
            const resObj=JSON.parse(this.responseText);
            console.log(resObj);
               
             document.getElementById("img-logo").src=resObj[1].back_pic;
             document.getElementById("img-fb").src=resObj[2].back_pic;
             document.getElementById("img-insta").src=resObj[3].back_pic;
             document.getElementById("img-twt").src=resObj[4].back_pic;
             document.getElementById("img-yt").src=resObj[5].back_pic;
            
        }
    }