/**
 * Created by 三木 on 2018/8/23.
 */
window.onload=function () {


    /////////搜索框/////////////////////////
    let search_all=document.querySelector(".search_all");
    let icon_se=document.querySelector(".icon_se");
    icon_se.onclick=function () {
        search_all.style.display="block";
    };

    let plantId=document.getElementById("plant");
    let search_button=document.querySelector(".search_button");
    let search_button1=document.querySelector(".search_button1");
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


    //////////banner_down//////////
    let banner_down=document.querySelector(".banner_down");
    let banner_down_TOP=banner_down.offsetTop;

    let photo1_size1=document.querySelector(".photo1_size1");
    let photo1_size2=document.querySelector(".photo1_size2");
    ///////////today////////////////
    let todayLi=document.querySelectorAll(".today");
    let arr=[];
    todayLi.forEach((v)=>{
        arr.push(v.offsetTop);
    });
    let today_allLi=document.querySelectorAll(".today_all");
    /////////////today_display///////////////
    let today_displayLi=document.querySelector(".today_display");
    let rowLi_TOP=today_displayLi.offsetTop;
    let Display=document.querySelector(".container_display li");
    ////////////限时促销下面////////////

    let promotion=document.querySelector(".promotion");
    let promotion_TOP=promotion.offsetTop;

    let promotion_left=document.querySelector(".promotion_left");
    let promotion_right=document.querySelector(".promotion_right");

    ////////////////introduce///////////
    let introduce=document.querySelector(".introduce");
    let introduce_TOP=introduce.offsetTop;

    let bac1_p=document.querySelector(".bac1_p");

    //////////decorate//////////////////
    let decorate=document.querySelector(".decorate");
    let decorate_TOP=decorate.offsetTop;

    let col_dec_allLi=document.querySelectorAll(".col_dec_all");
    console.log(col_dec_allLi);
    ////////////////translate/////////////
    let translate=document.querySelector(".translate");
    let translate_TOP=translate.offsetTop;

    let col_trans=document.querySelector(".col_trans");
    let trans3_size=document.querySelector(".trans3_size");
    //////////////iconall//////////////////
    let iconall=document.querySelector(".iconall");
    let iconall_TOP=iconall.offsetTop;

    let iconallLi=document.querySelectorAll(".iconallLi");
/////////////btn///////////////////
    let icon=document.querySelector(".icon-zhiding");
    let wh=window.innerHeight;
        window.onscroll=function() {
            let bh=document.body.scrollTop||document.documentElement.scrollTop;
            if(wh+bh>=banner_down_TOP+50){
                photo1_size1.style.display="block";
                photo1_size2.style.display="block";
                photo1_size1.style.animation="photo1_size1 1.5s 1 forwards";
                photo1_size2.style.animation="photo1_size2 1.5s 1 forwards";
            }
            arr.forEach((e,i)=>{
                if(wh+bh>=e+10){
                    today_allLi.forEach(()=>{
                        today_allLi[i].style.display="block";
                        today_allLi[i].style.animation="container_display 1s 1 forwards";
                    })

                }
            });
            if(wh+bh>=rowLi_TOP+100){
                Display.style.display="block";
                Display.style.animation="container_display 1.5s 1 forwards";
            }
            if(wh+bh>=promotion_TOP+20){
                promotion_left.style.display="block";
                promotion_right.style.display="block";
                promotion_left.style.animation="photo1_size1 1.5s 1 forwards";
                promotion_right.style.animation="photo1_size2 1.5s 1 forwards";
            }
            if(wh+bh>=introduce_TOP+100){
                bac1_p.style.display="block";
                bac1_p.style.animation="photo1_size2 1.7s 1 forwards";
            }
            if(wh+bh>=decorate_TOP+20){
                col_dec_allLi.forEach((e)=>{
                    e.style.display="block";
                    col_dec_allLi[0].style.animation="container_display 1.5s 1 forwards";
                    col_dec_allLi[1].style.animation="container_display 1.7s 1 forwards";
                    col_dec_allLi[2].style.animation="container_display 1.9s 1 forwards";
                    col_dec_allLi[3].style.animation="container_display 2.1s 1 forwards";
                })
            }
            if(wh+bh>=translate_TOP+20){
                col_trans.style.display="block";
                trans3_size.style.display="block";
                col_trans.style.animation="photo1_size1 1.5s 1 forwards";
                trans3_size.style.animation="photo1_size2 1.5s 1 forwards";
            }
            if(wh+bh>=iconall_TOP){
                iconallLi.forEach((e)=>{
                    e.style.display="block";
                    iconallLi[0].style.animation="container_display 1.1s 1 forwards";
                    iconallLi[1].style.animation="container_display 1.3s 1 forwards";
                    iconallLi[2].style.animation="container_display 1.5s 1 forwards";
                    iconallLi[3].style.animation="container_display 1.7s 1 forwards";
                })

            }
            icon.onclick=function () {
                animate(document.body,{scrollTop:0});
                animate(document.documentElement,{scrollTop:0})
            };

        };


};
