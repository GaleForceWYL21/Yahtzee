
let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");
let dice3 = document.getElementById("dice3");
let dice4 = document.getElementById("dice4");
let dice5 = document.getElementById("dice5");
let point = document.getElementById("point");
let count=0;
let countone = false;
let counttwo = false;
let countthree = false;
let countfour = false;
let countfive = false;
let countsix = false;
let countseven = false;
let counteight = false;
let countnine = false;
let countten = false;
let counteleven = false;
let counttwelve = false;
let numone =0;
let numtwo =0;
let numthree =0;
let numfour =0;
let numfive =0;
let numsix =0;
let numseven =0;
let numeight =0;
let numnine =0;
let numten =0; 
let numeleven =0;
let numtwelve =0;

let total1 =0;
let total =0;
function cms(){
    alert("cooming soon");
}
function clickroll(){ 
    if(count==3){
        alert("please select point to place first!");
    
    }   
    if(count<3){
    num  = Math.floor(Math.random()*6)+1;
    document.querySelector("#dice1").innerHTML = String(num);
    dice1 = num;
    num  = Math.floor(Math.random()*6)+1;
    document.querySelector("#dice2").innerHTML = String(num);
    dice2 = num;
    num  = Math.floor(Math.random()*6)+1;
    document.querySelector("#dice3").innerHTML = String(num);
    dice3 = num;
    num  = Math.floor(Math.random()*6)+1;
    document.querySelector("#dice4").innerHTML = String(num);
    dice4 = num;
    num  = Math.floor(Math.random()*6)+1;
    document.querySelector("#dice5").innerHTML = String(num);
    dice5 = num;
    count++;
} 
    if(countone==false)numberone();
    if(counttwo==false)numbertwo();
    if(countthree==false)numberthree();
    if(countfour==false)numberfour();
    if(countfive==false)numberfive();
    if(countsix==false)numbersix();
    if(countseven==false)numberseven();
    if(counteight==false)numbereight();
    if(countnine==false)numbernine();
    if(countten==false)numberten();
    if(counteleven==false)numbereleven();
    if(counttwelve==false)numbertwelve();
}
function numberone(){
    num=0;
    if(dice1==1)num+=dice1;
    if(dice2==1)num+=dice2;
    if(dice3==1)num+=dice3;
    if(dice4==1)num+=dice4;
    if(dice5==1)num+=dice5;
    document.getElementById("1").innerHTML = "Aces:"+String(num);
    numone=num;
}
function clickone(){
    if(count==0)alert("please roll the dice first");
    else{
    count=0;
    countone=true;  
    total1 +=numone;
    total+=numone;
    document.getElementById("1").setAttribute("disabled",true);
    document.getElementById("point").innerHTML = String(total);}
}
function numbertwo(){
    num=0;
    if(dice1==2)num+=dice1;
    if(dice2==2)num+=dice2;
    if(dice3==2)num+=dice3;
    if(dice4==2)num+=dice4;
    if(dice5==2)num+=dice5;
    document.getElementById("2").innerHTML = "Twos:"+String(num);
    numtwo=num;
}
function clicktwo(){
    if(count==0)alert("please roll the dice first");
    else{
    count=0;
    counttwo=true;
    total1 +=numtwo;
    total+=numtwo;
    document.getElementById("2").setAttribute("disabled",true);
    document.getElementById("point").innerHTML = String(total);}
}
function numberthree(){
    
    num=0;
    if(dice1==3)num+=dice1;
    if(dice2==3)num+=dice2;
    if(dice3==3)num+=dice3;
    if(dice4==3)num+=dice4;
    if(dice5==3)num+=dice5;
    document.getElementById("3").innerHTML = "Threes:"+String(num);
    numthree=num;
}
function clickthree(){
    if(count==0)alert("please roll the dice first");
    else{
    count=0;
    countthree=true;
    total1 +=numthree;
    total+=numthree;
    document.getElementById("3").setAttribute("disabled",true);
    document.getElementById("point").innerHTML = String(total);
    }
}
function numberfour(){
    
    num=0;
    if(dice1==4)num+=dice1;
    if(dice2==4)num+=dice2;
    if(dice3==4)num+=dice3;
    if(dice4==4)num+=dice4;
    if(dice5==4)num+=dice5;
    document.getElementById("4").innerHTML = "Fours:"+String(num);
    numfour=num;
}
function clickfour(){
    if(count==0)alert("please roll the dice first");
    else{
    count=0;
    countfour=true ;  
    total1 +=numfour;
    total +=numfour;
    document.getElementById("4").setAttribute("disabled",true);
    document.getElementById("point").innerHTML = String(total);
    }
}
function numberfive(){
    
    num=0;
    if(dice1==5)num+=dice1;
    if(dice2==5)num+=dice2;
    if(dice3==5)num+=dice3;
    if(dice4==5)num+=dice4;
    if(dice5==5)num+=dice5;
    document.getElementById("5").innerHTML = "Fives:"+String(num);
    numfive=num;
}
function clickfive(){
    if(count==0)alert("please roll the dice first");
    else{
    count=0;
    countfive=true;  
    total1 +=numfive;
    total+=numfive;
    document.getElementById("5").setAttribute("disabled",true);
    document.getElementById("point").innerHTML = String(total);
    }
}
function numbersix(){
    
    num=0;
    if(dice1==6)num+=dice1;
    if(dice2==6)num+=dice2;
    if(dice3==6)num+=dice3;
    if(dice4==6)num+=dice4;
    if(dice5==6)num+=dice5;
    document.getElementById("6").innerHTML = "Sixs:"+String(num);
    numsix=num;
}
function clicksix(){
    if(count==0)alert("please roll the dice first");
    else{
    count=0;
    countsix=true;  
    total1 +=numsix;
    total+=numsix;
    document.getElementById("6").setAttribute("disabled",true);
    document.getElementById("point").innerHTML = String(total);
    }
}
function numberseven(){
    
    num=0;
    num=dice1+dice2+dice3+dice4+dice5;
    document.getElementById("7").innerHTML = "All count:"+String(num);
    numseven=num;
}
function clickseven(){
    if(count==0)alert("please roll the dice first");
    else{
    count=0;
    countseven=true; 
    total +=numseven;
    document.getElementById("7").setAttribute("disabled",true);
    document.getElementById("point").innerHTML = String(total);
    }
}
function numbereight(){
    
    num=0;
   for(var i=1;i<7;i++){
       var b=0;
       if(dice1==i)b++;
       if(dice2==i)b++;
       if(dice3==i)b++;
       if(dice4==i)b++;
       if(dice5==i)b++;
       if(b>=3){
           num=dice1+dice2+dice3+dice4+dice5;
       }
       
   }


    document.getElementById("8").innerHTML = "3 of a kind:"+String(num);
    numeight=num;
}
function clickeight(){
    if(count==0)alert("please roll the dice first");
    else{
    count=0;
    counteight=true;   
    total +=numeight;
    document.getElementById("8").setAttribute("disabled",true);
    document.getElementById("point").innerHTML = String(total);
    }
}
function numbernine(){
    
    num=0;
    for(var i=1;i<7;i++){
        var b=0;
        if(dice1==i)b++;
        if(dice2==i)b++;
        if(dice3==i)b++;
        if(dice4==i)b++;
        if(dice5==i)b++;
        if(b>=4){
            num=dice1+dice2+dice3+dice4+dice5;
        }
        
    }
    document.getElementById("9").innerHTML = "4 of a kind:"+String(num);
    numnine=num;
}
function clicknine(){
    if(count==0)alert("please roll the dice first");
    else{
    count=0;
    countnine=true;   
    total +=numnine;
    document.getElementById("9").setAttribute("disabled",true);
    document.getElementById("point").innerHTML = String(total);
    }
}
function numberten(){
    
    num=0
    if(dice1==1&&dice2==1&&dice3==1&&dice4==1&&dice5==1)num=50;
    if(dice1==2&&dice2==2&&dice3==2&&dice4==2&&dice5==2)num=50;
    if(dice1==3&&dice2==3&&dice3==3&&dice4==3&&dice5==3)num=50;
    if(dice1==4&&dice2==4&&dice3==4&&dice4==4&&dice5==4)num=50;
    if(dice1==5&&dice2==5&&dice3==5&&dice4==5&&dice5==5)num=50;
    if(dice1==6&&dice2==6&&dice3==6&&dice4==6&&dice5==6)num=50;
    
    document.getElementById("10").innerHTML = "Yahtzee:"+String(num);
    numten=num;
}
function clickten(){
    if(count==0)alert("please roll the dice first");
    else{
    count=0;
    countten=true;  
    total +=numten;
    document.getElementById("10").setAttribute("disabled",true);
    document.getElementById("point").innerHTML = String(total);
    }
}
function numbereleven(){
    var b=0;
    var bb=0;
    var bbb=0;
    num=0;
    for(var i=1;i<5;i++){    
        if(dice1==i){b++;continue;}
        if(dice2==i){b++;continue;}
        if(dice3==i){b++;continue;}
        if(dice4==i){b++;continue;}
        if(dice5==i){b++;continue;}
        
        
    }
    for(var i=2;i<6;i++){
        if(dice1==i){bb++;continue;}
        if(dice2==i){bb++;continue;}
        if(dice3==i){bb++;continue;}
        if(dice4==i){bb++;continue;}
        if(dice5==i){bb++;continue;}  
    }
    for(var i=3;i<7;i++){
        if(dice1==i){bbb++;continue;}
        if(dice2==i){bbb++;continue;}
        if(dice3==i){bbb++;continue;}
        if(dice4==i){bbb++;continue;}
        if(dice5==i){bbb++;continue;}
    }
    if(bb>=4)num=30;
    if(bbb>=4)num=30;
    if(b>=4)num=30;
    document.getElementById("11").innerHTML = "small striaght:"+String(num);
    numeleven=num;
}
function clickeleven(){
    if(count==0)alert("please roll the dice first");
    else{
    count=0;
    counteleven=true;  
    total +=numeleven;
    document.getElementById("11").setAttribute("disabled",true);
    document.getElementById("point").innerHTML = String(total);
    }
}
function numbertwelve(){
    var ccc =0;
    var cc=0;
    num=0;
    for(var i=2;i<7;i++){
        if(dice1==i){ccc++;continue;}
        if(dice2==i){ccc++;continue;}
        if(dice3==i){ccc++;continue;}
        if(dice4==i){ccc++;continue;}
        if(dice5==i){ccc++;continue;}
    }
    for(var i=1;i<6;i++){
        if(dice1==i){cc++;continue;}
        if(dice2==i){cc++;continue;}
        if(dice3==i){cc++;continue;}
        if(dice4==i){cc++;continue;}
        if(dice5==i){cc++;continue;}
    }
    if(ccc==5)num =40;
    if(cc==5)num=40;
    document.getElementById("12").innerHTML = "Large striaght:"+String(num);
    numtwelve=num;
}
function clicktwelve(){
    if(count==0)alert("please roll the dice first");
    else{
    count=0;
    counttwelve=true;   
    total +=numtwelve;
    document.getElementById("12").setAttribute("disabled",true);
    document.getElementById("point").innerHTML = String(total);
    }
}
function restart(){
    location.reload();
}




