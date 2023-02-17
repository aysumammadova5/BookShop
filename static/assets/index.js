let spinner=$("#spinner")
const clcbtn=$("#calcbutton")
var $grid = $('.grid')



$(spinner).val(document.querySelectorAll('.col-4').length)


var books=[{id:1,src:"../static/assets/images/Inkognito.png",title:"Inkognito",type:"Psixalogiya",bio:"David Eagleman",link:"../templates/pruduct.html"},
           {id:2,src:"../static/assets/images/9780063067769.jpg",title:"Messy Roots",type:"Bilim-kurgu",bio:"Lauro Gou",link:"#"},
           {id:3,src:"../static/assets/images/9780062387950.jpg",title:"Ask Me",type:"Roman",bio:"Christine Heppermann",link:"#"},
           {id:4,src:"../static/assets/images/9780385338608.jpg",title:"Time To Kill",type:"Psixalogiya",bio:"John Grisham",link:"#"},
           {id:5,src:"../static/assets/images/9780525564805.jpg",title:"The Plotters",type:"Bilim-kurgu",bio:"Un-Su Kim",link:"#"},
           {id:6,src:"../static/assets/images/9780679722618.jpg",title:"Red Harwest",type:"Roman",bio:"Dashiell Hammett",link:"#"}]
var testid=0

$('.up').click(function(){  
if(document.querySelectorAll('.col-4').length<6){
    while (true){
    var random=Math.floor(Math.random() * books.length);
    var book=books[random];
    var id=book['id'];
    var src=book["src"];
    var title=book["title"];
    var bio=book['bio'];
    var link=book['link'];
    var type=book['type']
    
    if(id!=testid){
        break
    }
    }     
    
    var btn = $(this),
    oldValue = document.querySelectorAll('.col-4').length,
    newVal = 0;
    newVal = parseInt(oldValue) + 1;
    btn.closest('.number-spinner').find('input').val(newVal);    
    $(".grid").append(`<div id=${id} class="col-4 grid-item ${type}">
    <div class="card" style="width: 18rem;">
        <img src="${src}" alt="...">
        <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${bio}</p>
        <a href="${link}" class="btn btno btn-primary">Ətraflı</a>
        </div>
    </div>
  </div>`)
  testid=id 
}

})


$('.down').click(function(){
    if(($(spinner).val())>0){
    var btn = $(this),
    oldValue = document.querySelectorAll('.col-4').length,
    newVal = 0;
    newVal = parseInt(oldValue) - 1;
    btn.closest('.number-spinner').find('input').val(newVal);
    $(".grid").children().last().remove()
    }
})

clcbtn.click(function(){
    if(clcbtn.text()==="Basla"){
       clcbtn.text("Bitir") 
       clcbtn.css("background-color","red");
       $(".calcdisp").removeClass('d-none')
        $('#hesab').click(function(){
            var say;
            var gun;
            say=$("#formGroupExampleInput").val()
            gun=$("#formGroupExampleInput2").val()
            if(isNaN(say)||say<=0||isNaN(gun)||gun<=0){
                $('#cavab').removeClass('alert-success')
                $('#cavab').addClass('alert-danger')
                $('#cavab').removeClass('d-none')
                $('#cavab').addClass('d-flex')
                $("#cavab").html(`<p class="mb-0" >Hesablamada xəta baş verdi!</p>`)
            }
            else{
            var cvb;
            cvb=parseInt(say)/parseInt(gun)
            $('#cavab').removeClass('d-none')
            $('#cavab').addClass('d-flex')
            $("#cavab").html(`<p class="mb-0" >Her gun en az <span class="fs-2">${Math.ceil(cvb)}</span> sehife oxumalisiniz!</p>`)
            }
        })

    }
    else{
        $('#cavab').removeClass('d-flex')
        $('#cavab').addClass('d-none')
        $(".calcdisp").addClass('d-none')
        clcbtn.text("Basla")
        clcbtn.css("background-color","#FFC107");
    }


})


$(".all").click(function(){
    $('.grid-item').css("display", "flex");
    $(spinner).val(document.querySelectorAll('.col-4').length)
    $('.filter button').removeClass('active');
    $(this).addClass('active'); 
})
$(".pisx").click(function(){
    $('.Roman').css("display", "none");
    $('.Bilim-kurgu').css("display", "none");
    $('.Psixalogiya').css("display", "flex");
    $(spinner).val(document.querySelectorAll('.Psixalogiya').length)
    $('.filter button').removeClass('active');
    $(this).addClass('active');
})
$(".roman").click(function(){
    $('.Roman').css("display", "flex");
    $('.Bilim-kurgu').css("display", "none");
    $('.Psixalogiya').css("display", "none");
    $(spinner).val(document.querySelectorAll('.Roman').length)
    $('.filter button').removeClass('active');
    $(this).addClass('active');
})
$(".blmkrg").click(function(){
    $('.Roman').css("display", "none");
    $('.Bilim-kurgu').css("display", "flex");
    $('.Psixalogiya').css("display", "none");
    $(spinner).val(document.querySelectorAll('.Bilim-kurgu').length)
    $('.filter button').removeClass('active');
    $(this).addClass('active');
})




