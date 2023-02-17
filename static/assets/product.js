const addbskt=document.getElementById("addbasket")
const rmvbskt=document.getElementById('removebasket')
const p_inkognito=document.getElementById("p_inkognito").innerText
const p_1984=document.getElementById("p_1984").innerText
const sebet=document.getElementById('sebet')
const p_sefirler=document.getElementById("p_sefirler").innerText
const bskt_tp=document.getElementById("bskt_tp")
const bskt_btm=document.getElementById("bskt_btm")
const name=document.getElementById('name').innerText
const modal = document.getElementById('modal')
const modal_close= document.getElementById('mdlcls')
const close_modal = document.getElementById('clsmdl')
const count = document.getElementById('count')
const alerts = document.getElementById('alerts')
const like=document.getElementById('hup')
const disslike=document.getElementById('hdw')
const heart=document.getElementById('hrt')
const body=document.querySelector("body")
var remove=document.getElementsByClassName('remove')
var stock_disp=document.getElementById('stock')
document.addEventListener("click",(event)=>{
    if(event.target.className === "fa-solid fa-xmark"){}
    else{sebet.style.cssText -= ';display:inline-block !important; margin-top:65% !important;';}
})
var stock=stock_disp.innerText

if(stock<=1){
    alerts.classList.remove("alert-warning");
    alerts.classList.add("alert-danger")
}
else if(stock>1){
    alerts.classList.add("alert-warning");
    alerts.classList.remove("alert-danger")
}
stock_disp.innerHTML=`<b>${stock}</b>`
var cem = parseInt(0);
const regex = /\d+/g;
cem+=(parseInt(p_1984.match(regex)))+(parseInt(p_sefirler.match(regex)))
bskt_btm.innerHTML+=`<li class="dwnd">Cemi <span>${cem}</span></li>`
if(parseInt(document.getElementById("bskt_tp").childElementCount)===0){
    count.style.display='none'
}
else{
    count.style.display='flex'
    count.innerText=parseInt(document.getElementById("bskt_tp").childElementCount);
}
addbskt.addEventListener('click', ()=>{
    if(stock>0){
    addbskt.style.display='none'
    rmvbskt.style.display='inline-block'
    bskt_tp.innerHTML+= `<li class='dwnd' id="inkognito_prd" ><span><button class="remove"><i id="incox" class="fa-solid fa-xmark"></i></button></i>${name}</span> <span class="prodpr" id="p_inkognito" >${p_inkognito}</span></li>`
    cem+=parseInt(p_inkognito.match(regex))
    bskt_btm.innerHTML=`<li class="dwnd">Cemi <span>${cem}</span></li>`
    modal.style.display="block"
    stock-=1
    if(stock<=1){
        alerts.classList.remove("alert-warning");
        alerts.classList.add("alert-danger")
    }
    stock_disp.innerHTML=`<b>${stock}</b>`
    count.style.display='flex'
    count.innerText=parseInt(document.getElementById("bskt_tp").childElementCount);
    }
    else{
        alert("Elde Yoxdur!")
    }
    for(var i=0; i<remove.length;i++){
        var x=remove[i]

    x.addEventListener('click', (event)=>{
        
        if(stock>1){
            alerts.classList.add("alert-warning");
            alerts.classList.remove("alert-danger")
            
        }
        
        if(event.target===document.getElementById("incox")){
            stock+=1
            addbskt.style.display='inline-block'
            rmvbskt.style.display='none'
        }
        if(stock>1){
            alerts.classList.add("alert-warning");
            alerts.classList.remove("alert-danger")
            
        }
        
        stock_disp.innerHTML=`<b>${stock}</b>`
        cem-=parseInt(event.target.parentElement.parentElement.nextElementSibling.innerText.match(regex)[0])
        bskt_btm.innerHTML=`<li class="dwnd">Cemi <span>${cem}</span></li>` 
        event.target.parentElement.parentElement.parentElement.remove()
        if(parseInt(document.getElementById("bskt_tp").childElementCount)===0){
            count.style.display='none'
        }
        else{
            count.style.display='flex'
            count.innerText=parseInt(document.getElementById("bskt_tp").childElementCount);
        }
        stock_disp.innerHTML=`<b>${stock}</b>`
        sebet.style.cssText += ';display:inline-block !important; margin-top:65% !important;';
    })

    }
    rmvbskt.addEventListener('click', (event)=>{
        rmvbskt.style.display='none'
        addbskt.style.display='inline-block'
        document.getElementById("inkognito_prd").remove();
        cem-=parseInt(p_inkognito.match(regex))
        
        bskt_btm.innerHTML=`<li class="dwnd">Cemi <span>${cem}</span></li>`
        if(parseInt(document.getElementById("bskt_tp").childElementCount)===0){
            count.style.display='none'
        }
        else{
            count.style.display='flex'
            count.innerText=parseInt(document.getElementById("bskt_tp").childElementCount);
        }
        stock+=1
        if(stock>1){
            alerts.classList.add("alert-warning");
            alerts.classList.remove("alert-danger")
        }
        stock_disp.innerHTML=`<b>${stock}</b>`
        
        
    })
    
    
})

for(var i=0; i<remove.length;i++){
    var x=remove[i]
x.addEventListener('click', (event)=>{
    cem-=parseInt(event.target.parentElement.parentElement.nextElementSibling.innerText.match(regex)[0])  
    bskt_btm.innerHTML= `<li class="dwnd">Cemi <span>${cem}</span></li>`
    event.target.parentElement.parentElement.parentElement.remove()
    
    if(parseInt(document.getElementById("bskt_tp").childElementCount)===0){
        count.style.display='none'
    }
    else{
        count.style.display='flex'
        count.innerText=parseInt(document.getElementById("bskt_tp").childElementCount);
    }
    sebet.style.cssText += ';display:inline-block !important; margin-top:65% !important;';
})

}

modal_close.addEventListener('click',()=>{
    modal.style.display="none"
})

close_modal.addEventListener('click',()=>{
    modal.style.display="none"
})

like.addEventListener("click",()=>{
    like.style.display='none'
    disslike.style.cssText += ';display:inline-block !important;';
})

disslike.addEventListener("click",()=>{
    disslike.style.display='none'
    like.style.cssText += ';display:inline-block !important;';
})

heart.style.color="gray";
heart.addEventListener('click',()=>{
    if(heart.style.color==="gray"){
    alert('Kitabı bəyəndiniz!');
    heart.style.color='red';
    }
    else{
        heart.style.color="gray";
        alert('Bəyənməkdən imtina etdiniz!');
    }
})


$(document).ready(function(){


    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        arrows: true,
      });
                  
  });

