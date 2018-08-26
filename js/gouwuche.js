window.onload=function(){
    ///////////////////加减数量/////////////////////
    let num=document.getElementById("num");
    let plant_plus3=document.querySelector(".plant_plus3");
    let plant_plus2=document.querySelector(".plant_plus2");
    console.log(plant_plus3, plant_plus2, num);

    let i=1;
    plant_plus3.onclick=function () {
        i++;
        num.innerHTML=i;
    }
    plant_plus2.onclick=function () {
        i--;
        if(i<0){
            return;
        }
        num.innerHTML=i;
    }
    console.log(num.innerHTML);
    ///////////////合计///////////////
    // let total=document.getElementById("total");
    //
    // total.innerHTML=="￥"+(num.innerHTML) * 5900;
    // console.log(total.innerHTML);




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
}
