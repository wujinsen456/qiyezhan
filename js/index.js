/**
 * Created by 三木 on 2018/8/23.
 */
window.onload=function () {
    let banner=document.getElementsByClassName("banner")[0];
    let imgLi=banner.getElementsByTagName("img");
    console.log(imgLi);

    let pot=document.getElementsByClassName("pot")[0];
    let potLi=pot.getElementsByClassName("pot1");
    console.log(potLi);

    let banner_lt=banner.getElementsByClassName("banner_lt")[0];
    let banner_gt=banner.getElementsByClassName("banner_gt")[0];
    console.log(banner_lt, banner_gt);

    let t=setInterval(move,2000);
    //move函数
    let now=next=0;
    function move() {
        next++;
        if(next==imgLi.length){
            next=0;
        }
        imgLi[next].style.left="1519px";
        animate(imgLi[now],{left:-1519});
        animate(imgLi[next],{left:0});
        dotLi[now].className="";
        dotLi[next].className="potHot";
        now=next;
    }
    function move1() {
        next--;
        if(next<0){
            next=imgLi.length-1;
        }
        imgLi[next].style.left="-1519px";
        animate(imgLi[now],{left:1519});
        animate(imgLi[next],{left:0});
        dotLi[now].className="";
        dotLi[next].className="potHot";
        now=next;
    }

    //鼠标移入
    banner.onmouseenter=function(){
        clearInterval(t);
    };
    banner.onmouseleave=function(){
        t=setInterval(move,1000);
    };
    // 按钮点击
    banner_lt.onclick=function(){
        clearInterval(t);
        move();
    };
    banner_gt.onclick=function(){
        clearInterval(t);
        move1();
    };

    for (let i=0;i<dotLi.length;i++){
        dotLi[i].onclick=function () {
            if(now==i){
                return;
            }else if(now<i){
                bannerLi[i].style.left="1519px";
                animate(bannerLi[now],{left:-1519});
                animate(bannerLi[i],{left:0});
                dotLi[now].className="";
                dotLi[i].className="potHot";
            }else{
                bannerLi[i].style.left="-1519px";
                animate(bannerLi[now],{left:1519});
                animate(bannerLi[i],{left:0});
                dotLi[now].className="";
                dotLi[i].className="potHot";
            }
            next=now=i;
        }

    }



}/**
 * Created by 三木 on 2018/8/23.
 */
