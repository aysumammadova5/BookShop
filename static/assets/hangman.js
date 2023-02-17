//matirals
const popup = document.getElementById('popup-container');
const finalMessage = document.getElementById('final-message');
const figureParts= document.querySelectorAll(".figure-part");
const wrongLettersE1 = document.getElementById('wrong-letters');
const notification = document.getElementById('notification-container');
const playAgainBtn = document.getElementById('play-button');
const notification2 = document.getElementById('notification-container2')

//create list
const words=['gemi','kompyuter','gilas','tenbel','qelyan','alma','meyve','qurd','it','ilan',"pomidor","defter","ramazan","tez-tez","qaca-qaca"]
//random word define
let random=Math.floor(Math.random() * words.length);
choosedword=words[random];
//lists
let rightword=[];
let wrongword=[];
//maker letter hidden
let hiddenword=[];

console.log("chosedword " + choosedword)

for(let i=0;i<(choosedword.length);i++){
    if (choosedword[i]==="-"){
        hiddenword[i]=("-")
    }
    else{
        hiddenword[i]=("_");
    }
}



console.log("hidden word " + hiddenword);

word.innerHTML=hiddenword.join(" ")
//user input
document.addEventListener('keypress', (event)=>{
    
    console.log("event " + event);
    
    let keyword=String.fromCharCode(event.keyCode).toLowerCase();

    console.log("keyword " + keyword)    

    if(!isNaN(keyword)||keyword===" "||keyword==="-"||keyword==="_"||keyword==="="||keyword==="+"||keyword==="`"||keyword==="~"||keyword==="!"||keyword==="@"||keyword==="#"||keyword==="$"||keyword==="%"||keyword==="^"||keyword==='&'||keyword==='*'||keyword==='('||keyword===')'||keyword===';'||keyword===':'||keyword==='"'||keyword==="'"||keyword==='"'||keyword==="<"||keyword==='>'||keyword==="."||keyword==="/"||keyword==="?"||keyword==="\\"||keyword==='{'||keyword==='}'||keyword==='['||keyword===']'){
        showNotification2()
    }
    else{
    if(choosedword.indexOf(keyword) > -1){ 
            if(!rightword.includes(keyword)){
            rightword.push(keyword)
        
            console.log("rightwords " + rightword)

            
            for (let i=0;i<choosedword.length;i++){

                if(choosedword[i]===keyword){
                    hiddenword[i]=choosedword[i]
                    
                }
            }
            

            console.log(hiddenword)
    
            word.innerHTML=hiddenword.join(' ')
            // win
            if(hiddenword.join('')===choosedword){
                finalMessage.innerText = 'Dogrudur! Ne bildin ala!';
                popup.style.display= 'flex';
            }
        }
        else{
            showNotification()
        }
    
    }

    else{
            if(!wrongword.includes(keyword)){
            wrongword.push(keyword)

            console.log("wrongword " + wrongword)
            figureParts.forEach((part,index) => {
            const errors = wrongword.length;
            if(index < errors) {
                part.style.display = 'block'
            }
            });
            wrongLettersE1.innerHTML=wrongword;
            // lose
            if(figureParts.length===wrongword.length){
                finalMessage.innerText = 'Hec zad!';
                popup.style.display = 'flex';
                

            }
        }
            else{
                showNotification()
            }
        }
    }    
});

// play again
playAgainBtn.addEventListener('click', () => {
    rightword.splice(0);
    wrongword.splice(0);
    hiddenword.splice(0)
    let random=Math.floor(Math.random() * words.length);
    choosedword=words[random];
    for(let i=0;i<(choosedword.length);i++){
        if (choosedword[i]==="-"){
            hiddenword[i]=("-")
        }
        else{
            hiddenword[i]=("_");
        }
    }    
    word.innerHTML=hiddenword.join(" ")
    wrongLettersE1.innerHTML=wrongword;
    
    console.log(choosedword)

    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "none";
    document.getElementById("3").style.display = "none";
    document.getElementById("4").style.display = "none";
    document.getElementById("5").style.display = "none";
    document.getElementById("6").style.display = "none";
    popup.style.display = 'none';
});

//notification
function showNotification(){
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

function showNotification2(){
    notification2.classList.add("show")

    setTimeout(() =>{
        notification2.classList.remove('show')
    }, 2000);
}




