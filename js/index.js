window.onload=function(){
    var active = document.getElementById("active");
    var currentX;
    var div = document.getElementById("frame");
    var li = div.children[0].children[0].children[0];
    active.style.left=li.offsetLeft+"px";
    var beginX = li.offsetLeft;
    var lis = div.children[0].children;
    for(var i=0;i<lis.length;i++){
        if(i%2 !=0){
            continue;
        }
        lis[i].onmouseover = function(event){
            event = window.event||event;
            var src = event.srcElement;
            currentX = src.offsetLeft;
            setInterval(function(){
                beginX= beginX+(currentX-beginX)/10;
                active.style.left = beginX+"px";
            },25);
        }
    }
}