/********************************************************************************************/
// Script pour insérer une image au scroll et la faire disparaître à la fin du scroll
/********************************************************************************************/
var etat;
window.addEventListener("scroll",function(){
    if(etat !== null){
    clearTimeout(etat);
        document.getElementById("monImg").style.display="block";
    }
    etat = setTimeout(function() {
      document.getElementById("monImg").style.display="none"}, 300);
    },false);


/********************************************************************************************/
// Script pour faire apparaître la flèche retour en haut de page
/********************************************************************************************/
document.addEventListener('DOMContentLoaded', function() {
  window.onscroll = function(ev) {
    document.getElementById("cRetour").className = (window.pageYOffset > 100) ? "cVisible" : "cInvisible";
  };
});


