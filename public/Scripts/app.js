/* 
FileName: app.css
Name: kyeongbeom Lee
StudentNumber: 301083034 
Date: Sep 30, 2021.
*/

// IIFE -- Immediately Invoked Function Expression
(function(){
 
    function Start(){
 
        console.log("App started...");

        let deleteButtons = document.querySelectorAll('.btn-danger');

        for(button of deleteButtons){
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?")) {
                    event.preventDefault();
                    window.location.assign('/book-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);

})();