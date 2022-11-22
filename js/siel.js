// On load
window.onload = function (){
    setTime(getTime())
    setInterval(function(){
        setTime(getTime())
        console.log("top")
    },10000)
}

// Fonctions 

/**
 * Verifie si un 0 doit être ajouté en début de string
 * @param {int} i Heure ou minute
 */
function checkZeroTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
/**
 * Retourne l'heure au format hh:mm
 * @returns {string}
 */
function getTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    h = checkZeroTime(h);
    m = checkZeroTime(m);
    // console.log("getTime => "+ h + ":" + m)
    return h + ":" + m;
}
/**
 * 
 * @param {string} time Heure, en chaine de charactères
 */
function setTime(time) {
    document.querySelector("#heure").innerHTML = time
}