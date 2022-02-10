//$(document).ready(function({
// = 

/* $(function(){//closure si on met
    //code ici
});

$(function(){//comme ça ça empeche de cesser le timer dans la console.
    let timer = setInterval(()=>{
        console.log(42)
    }, 100)
}); */

$(function(){
    $('#select_brand').on('change',function(e){
        //recup la val du select (pas .value)
        let value = $(e.target).val();
        console.log(value);

        $('li').fadeOut(0) ; //milisecondes
        $('.'+value).fadeIn(500);
    });
});