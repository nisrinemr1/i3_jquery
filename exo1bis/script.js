$(function(){
    $('li').hide(0);
    $('#check').on('change',function(e){
        let value = $(e.target).val();  //si les check étaient avec des name, il faudra mettre attr('name') a la place de val!
        if($(e.target).is(':checked')){
            $('.'+value).fadeIn(500);
        } 
        else{
            $('.'+value).fadeOut(500);
        }
    });
});