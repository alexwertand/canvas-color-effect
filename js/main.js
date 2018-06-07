document.addEventListener("DOMContentLoaded", function(event) {
    
    var xhr = new XMLHttpRequest();
    
    console.log(xhr);

    xhr.open("GET", "https://reqres.in/api/products/3", true);
    xhr.onload = function(){
        console.log(xhr.responseText);
    };
    xhr.send();
});