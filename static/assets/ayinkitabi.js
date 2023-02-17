var say;
var gun;
var cvb;
while(true){
    say=prompt("Kitabin sahife sayi:")
    if(isNaN(say)||say<=0){
        alert("ALINMADI!")
        continue;
    }
    else{
        break;
    } 
}
while(true){
    gun=prompt("Nece gune bitirmelisiniz?")
    if(isNaN(gun)||gun<=0){
        alert("ALINMADI!")
        continue;
    }
    else{
        break;
    }
}

if(!isNaN(say)||!isNaN(gun)||gun>0||say>0){
    cvb=parseInt(say)/parseInt(gun)
    alert("Her gun en az " + cvb + " sehife oxumalisiniz!")
    console.log("Sehife sayi: " + say)
    console.log("Gunun sayi: " + gun)
    console.log("Natice: " + cvb)

}
