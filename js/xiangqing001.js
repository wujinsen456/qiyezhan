window.onload=function(){
    ///////////////////加减数量/////////////////////
    let num=document.getElementById("num");
    let plant_plus1=document.querySelector(".plant_plus1");
    let plant_plus=document.querySelector(".plant_plus");
    console.log(plant_plus1, plant_plus, num);

    let i=1;
    plant_plus1.onclick=function () {
        i++;
        num.innerHTML=i;
    }
    plant_plus.onclick=function () {
        i--;
        if(i<0){
            return;
        }
        num.innerHTML=i;
    }
}
