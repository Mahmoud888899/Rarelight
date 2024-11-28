var pass=document.getElementById("i4");
var img=document.getElementById("i5");

img.onclick=function(){
    var img_val = img.getAttribute("src")
    var pass_type = pass.getAttribute("type")

    if(img_val == "3.png"){
        img.setAttribute("src","2.png")
        pass.setAttribute("type","text")
    }else{
        img.setAttribute("src","3.png")
        pass.setAttribute("type","password") 
    }
}

