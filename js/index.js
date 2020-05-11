let desc=document.getElementsByClassName('d');
let cont1=$('#cont1');
let cont2=$('#cont2');
let cont3=$('#cont3');

$(document).ready(function(){
   
    $('.bn1').click(function(){
        var ind=$('#cont1');        
        cont1.toggleClass('visible'); 
        cont3.removeClass('visible');
        cont2.removeClass('visible');
    });
    $('.bn2').click(function(){
        var ind=$('#cont2');        
        cont2.toggleClass('visible'); 
        cont1.removeClass('visible');
        cont3.removeClass('visible');
    })
    $('.bn3').click(function(){
        var ind=$('#cont3');        
        cont3.toggleClass('visible'); 
        cont1.removeClass('visible');
        cont2.removeClass('visible');
    })
})