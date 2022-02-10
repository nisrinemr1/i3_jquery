console.log('panda');

$(document).ready(function(){
    //selection des petites images + ajout click
    $('.smallImg > img').on('mouseover', function(e){
        //e c'est l'event et target c'est l'image
        //pour select l'image sur laquelle on a cliqué 
        // + recuperer son attribut src

        let source = $(e.target).attr('src');
        console.log(source);

        //redefinir l'attribut source de la grande image
        $('.largeImg > img')
        .fadeOut(0)
        .attr('src',source)
        .fadeIn(300);
    });
});