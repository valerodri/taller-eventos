document.addEventListener("DOMContentLoaded", function () {
    const div = document.getElementById("div");
 
    div.addEventListener("click", function(event) {
       if (!event.target.matches("button")) {
           alert("Hola! Soy el div");
       }
   });
 });
 