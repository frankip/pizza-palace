console.log("JS linked");

$(document).ready(function(){
    console.log("jquery linked")

    $('h1').click(function(){
        alert('you clicked on a header')
    });
});