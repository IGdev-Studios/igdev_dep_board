const departures = {
    "monday":   [
        {"time":"08:00","vehicule":"GX 107"},
        {"time":"08:30","vehicule":"GX 107"},
        {"time":"09:00","vehicule":"GX 107"},
        {"time":"09:30","vehicule":"GX 107"}
    ],
    "tuesday":  [
        {"time":"08:00","vehicule":"GX 107"},
        {"time":"08:30","vehicule":"GX 107"},
        {"time":"09:00","vehicule":"GX 107"},
        {"time":"09:30","vehicule":"GX 107"},
        {"time":"21:30","vehicule":"GX 107"},
        {"time":"22:00*","vehicule":"GX 107"},
        {"time":"23:09","vehicule":"GX 107"}
    ],
    "wednesday":[
        {"time":"12:00","vehicule":"GX 107"},
        {"time":"12:30","vehicule":"GX 107"},
        {"time":"21:30","vehicule":"GX 107"}
    ],
    "thursday": [],
    "friday":   [],
    "saturday": [],
    "sunday":   []
}

function getClosestDepartures(numberOfDepartures) {
    const today = new Date();
    const dayOfWeek = today.toLocaleString('en-US', { weekday: 'long' }).toLowerCase();
    const currentTime = today.toTimeString().slice(0, 5);
    const departuresToday = departures[dayOfWeek];

    if (!departuresToday) {
        return [];
    }

    const closestDepartures = departuresToday.filter(departure => departure.time > currentTime).slice(0, numberOfDepartures);

    if (closestDepartures.length === 0) {
        return null;
    }

    return closestDepartures;
}

function refreshHBDDepartures() {
    // variable qui va recevoir le contenu à afficher
    let HTMLContent = "";

    // on récupère les prochaines départs du jour
    const closestDepartures = getClosestDepartures(3);

    // on vérifie s'il y en reste encore
    if (closestDepartures === null) {
        HTMLContent += '<div class="colfix dest-ligne"><div class="ligne-img">-</div><div class="dest-txt">Aucun départ de prévu</div><div class="time-txt">-</div></div></div>';
    } else {
        // on parcourt les départs
        closestDepartures.forEach((departure) => {
            HTMLContent += `<div class="colfix dest-ligne"><div class="ligne-img"></div><div class="dest-txt">${departure.vehicule}</div><div class="time-txt">${departure.time}</div></div>`;
        });
    }

    // on applique l'HTML
    document.getElementById("passages_hbd").innerHTML = HTMLContent;
};