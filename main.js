/* STICKY HEADER */
window.onload = function () {
    window.addEventListener('scroll', function (e) {
        if (window.pageYOffset > 100) {
            document.querySelector("header").classList.add('is-scrolling');
        } else {
            document.querySelector("header").classList.remove('is-scrolling');
        }
    })
}



//function getAge(date) { 
//    var diff = Date.now() - date.getTime();
//    var age = new Date(diff); 
//    return Math.abs(age.getUTCFullYear() - 1970);
//}
    
//a=(getAge(new Date(2002, 4, 23))); //Date(année, mois, jour)  

//document.getElementById("age-dynamique").innerHTML = a;



/* DATE */
date = new Date();
year = date.getFullYear();
document.getElementById("current-date").innerHTML = year;