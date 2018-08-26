/**
 * Created by 三木 on 2018/8/23.
 */
window.onload=function () {


    /////////搜索框/////////////////////////
    let search_all=document.querySelector(".search_all");
    console.log(search_all);
    let icon_se=document.querySelector(".icon_se");
    console.log(icon_se);
    icon_se.onclick=function () {
        search_all.style.display="block";
    };

    let plantId=document.getElementById("plant");
    let search_button=document.querySelector(".search_button");
    let search_button1=document.querySelector(".search_button1");
    console.log(search_button, search_button1, plantId);
    search_button.onclick=function () {
        if(plantId.value=="植物花卉001"||plantId.value=="001"){
            open("xiangqing1.html");
        }else if(plantId.value=="植物花卉002"||plantId.value=="002"){
            open("xiangqing2.html");
        }else if(plantId.value=="植物花卉003"||plantId.value=="003"){
            open("xiangqing3.html");
        }else if(plantId.value=="植物花卉004"||plantId.value=="004"){
            open("xiangqing4.html");
        }else if(plantId.value=="植物花卉005"||plantId.value=="005"){
            open("xiangqing5.html");
        }else if(plantId.value=="植物花卉006"||plantId.value=="006"){
            open("xiangqing6.html");
        }else if(plantId.value=="植物花卉007"||plantId.value=="007"){
            open("xiangqing7.html");
        }else if(plantId.value=="植物花卉008"||plantId.value=="008"){
            open("xiangqing8.html");
        } else{
            alert("输入错误，请输入花卉编号")
        }
    };
    search_button1.onclick=function () {
        search_all.style.display="none";
    };

  ///////////////banner轮播////////////////////////////////////////

    let banner=document.querySelector(".banner");
    let ban_width=parseInt(getComputedStyle(banner,null).width);

    let ban_imgLi=document.querySelectorAll(".banner img");

    let potLi=document.querySelectorAll(".pot1");

    let banner_gt=document.querySelector(".banner_gt");
    let banner_lt=document.querySelector(".banner_lt");

    let banner_word=document.querySelector(".banner_word");

    let t=setInterval(ban_fn,4000);
    let flag=true;
    let next=now=0;
    function ban_fn(){

        next++;
        if(flag==false){
            return;
        }
        if(next==ban_imgLi.length){
            next=0;
        }
        flag=false;
        ban_imgLi[next].style.left=ban_width+"px";
        animate(ban_imgLi[now],{left:-ban_width},function () {
            flag=true;
        });
        animate(ban_imgLi[next],{left:0},function () {
            flag=true
        });
        potLi[now].classList.remove("potHot");
        potLi[next].classList.add("potHot");
        now=next;
    }

    function ban_fnL(){
        next--;
        if(flag==false){
            return;
        }
        if(next<0){
            next=ban_imgLi.length-1;
        }
        flag=false;
        ban_imgLi[next].style.left=-ban_width+"px";
        animate(ban_imgLi[now],{left:ban_width},function () {
            flag=true;
        });
        animate(ban_imgLi[next],{left:0},function () {
            flag=true;
        });
        potLi[now].classList.remove("potHot");
        potLi[next].classList.add("potHot");
        now=next;
    }

    banner.onmouseenter=function () {
        clearInterval(t);
    };
    banner.onmouseleave=function(){
        t=setInterval(ban_fn,2000);
    };
    banner_gt.onclick=function () {
        clearInterval(t);
        ban_fn();
    };
    banner_lt.onclick=function () {
        clearInterval(t);
        ban_fnL();
    };
    potLi.forEach(function (v,i) {
        v.onclick=function () {
            clearInterval(t);
            potLi.forEach(function (v) {
                v.classList.remove("potHot");
            });
            if(i==now){
                return;
            }else if(i>now){
                ban_fn();
            }else ban_fnL();
            v.classList.add("potHot");
            next=now=i;
        }
    });



};
