var departures = {
    "monday": [
        "08:00",
        "08:30",
        "09:00",
        "09:30",
    ],
    "tuesday": [
        "08:00",
        "08:30",
        "09:00",
        "09:30",
        "22:00",
        "22:30",
    ],
    "wednesday": [
        "12:00",
        "12:30",
    ],
    "thursday": [
    ],
    "friday": [

    ],
    "saturday": [

    ],
    "sunday": [

    ]
}

const getClosestDepartures = (numberOfDepartures) => {
    const today = new Date();
    const dayOfWeek = today.toLocaleString('en-US', { weekday: 'long' }).toLowerCase();
    const currentTime = today.toTimeString().slice(0, 5);
    const departuresToday = departures[dayOfWeek];

    if (!departuresToday) {
        return [];
    }

    const closestDepartures = departuresToday.filter(departure => departure > currentTime).slice(0, numberOfDepartures);


    if (closestDepartures.length === 0) {
        return null;
    }

    return closestDepartures;
}

const refreshHBDDepartures = () => {
    // variable qui va recevoir le contenu à afficher
    let HTMLContent = "";

    // on récupère les prochaines départs du jour
    const closestDepartures = getClosestDepartures(3);

    // on vérifie s'il y en reste encore
    if (closestDepartures === null) {
        HTMLContent = '<div class="colfix dest-ligne"><div class="ligne-img">-</div><div class="dest-txt">Aucun passage de prévu</div><div class="time-txt">-</div></div></div>';
    } else {
        // on parcourt les départs
        closestDepartures.forEach((departure) => {
            HTMLContent += `<div class="colfix dest-ligne"><div class="dest-txt">${departure}</div></div>`;
        });
    }

    // on applique l'HTML
    document.getElementById("passages_hbd").innerHTML = HTMLContent;
};