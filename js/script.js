async function getNetworkName() {
    const urlParams = new URLSearchParams(window.location.search);
    const networkSelected = urlParams.get('network');
    return networkSelected;
}

async function getSchedules() {
    let networkName = await getNetworkName();
    console.log(networkName);
    let itemToLoad = "";
    switch (networkName) {
        case 'tag':
            itemToLoad = "LinesAndStopTAG";
            break;
        case 'tpv':
            itemToLoad = "LinesAndStopTPV";
            break;
        case 'tougo':
            itemToLoad = "LinesAndStopGSV";
            break;
        default:
            itemToLoad = "LinesAndStopTAG";
            break;
    }
    let LinesAndStop = JSON.parse(localStorage.getItem(itemToLoad));
    try {
        let response = await fetchApi("https://data.mobilites-m.fr/api/routers/default/index/clusters/" + LinesAndStop.zone + "/stoptimes");
        console.log("https://data.mobilites-m.fr/api/routers/default/index/clusters/" + LinesAndStop.zone + "/stoptimes");
        const timesMontfleury = await response.json();

        var finalSchedules = [];
        timesMontfleury.forEach(element => {
            var id = element.pattern.id.split(":");
            if (!LinesAndStop.lines) {
                element.times.forEach(time => {
                    finalSchedules.push({
                        "lastStop": element.pattern.lastStopName,
                        "time": time.realtimeArrival,
                        "realtime": time.realtime,
                        "line": id[1]
                    });
                });
            } else {
                if (LinesAndStop.lines.includes(id[1])) {
                    element.times.forEach(time => {
                        finalSchedules.push({
                            "lastStop": element.pattern.lastStopName,
                            "time": time.realtimeArrival,
                            "realtime": time.realtime,
                            "line": id[1]
                        });
                    });
                }
            }
        });
        if (!finalSchedules.length) {
            return "Aucun passage de prévu";
        } else {
            return finalSchedules;
        }

    } catch {
        return "Erreur chargement";
    }

};

async function fetchApi(url) {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 5000)
    const response = await fetch(url, {
        headers: {
            "origin": "webBrowser"
        },
        signal: controller.signal
    });
    clearTimeout(timeoutId);
    return response
}

function secToDelay(time) {
    let currentDate = new Date();
    let secondes = ((currentDate.getHours()) * 3600) + ((currentDate.getMinutes()) * 60) + currentDate.getSeconds();
    let difference = Math.floor((time - secondes) / 60);
    return difference;

}

function sort(tab) {
    var values = []
    for (var key in tab) {
        if (tab[key].time >= 0) {
            values.push([key, tab[key].time, tab[key].lastStop, tab[key].realtime, tab[key].line])
        }
    }

    values.sort(function compare(i, j) {
        return i[1] - j[1];
    });
    var finalSchedules = []
    values.forEach(element => {
        if (secToDelay(element[1]) >= 0) {
            finalSchedules.push(
                {
                    "lastStop": element[2],
                    "time": secToDelay(element[1]),
                    "realtime": element[3],
                    "line": element[4]
                }
            );
        }
    });
    return finalSchedules;
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function getTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    h = checkTime(h);
    m = checkTime(m);
    return h + ":" + m;
}

async function checkSaved() {
    let networkName = await getNetworkName();
    switch (networkName) {
        case 'tag':
            if (localStorage.getItem('LinesAndStopTAG') == null) {
                let LinesAndStop = {
                    "arret": "Montfleury",
                    "zone": "SEM:GENMONTFLEU",
                    "lines": ["16"]
                }
                localStorage.setItem('LinesAndStopTAG', JSON.stringify(LinesAndStop));
            }
            break;
        case 'tpv':
            if (localStorage.getItem('LinesAndStopTPV') == null) {
                let LinesAndStop = {
                    "arret": "Voiron, LEPRINCE RINGUET",
                    "zone": "TPV:ST00408",
                    "lines": ["1"]
                }
                localStorage.setItem('LinesAndStopTPV', JSON.stringify(LinesAndStop));
            }

            break;
        case 'tougo':
            if (localStorage.getItem('LinesAndStopGSV') == null) {
                let LinesAndStop = {
                    "arret": "Meylan, NORBERT SEGARD",
                    "zone": "GSV:GEN20088",
                    "lines": ["G2"]
                }
                localStorage.setItem('LinesAndStopGSV', JSON.stringify(LinesAndStop));
            }
            break;
        default:
            if (localStorage.getItem('LinesAndStopTAG') == null) {
                let LinesAndStop = {
                    "arret": "Montfleury",
                    "zone": "SEM:GENMONTFLEU",
                    "lines": ["16"]
                }
                localStorage.setItem('LinesAndStopTAG', JSON.stringify(LinesAndStop));
            }
            break;
    }
    if (localStorage.getItem('numberRows') == null) {
        let numberRows = 4
        localStorage.setItem('numberRows', numberRows);
    }
}

async function editLinesAndStop(stop, lines, numberRows) {

    var i = 0;
    var found = 0;
    for (key in dictStops) {
        if (dictStops[key][1] == stop) {
            found = i;
        }
        i++;
    }
    var linesSplit = lines.split(",");
    let networkName = await getNetworkName();
    let code = "";
    switch (networkName) {
        case 'tag':
            code = "SEM:"
            break;
        case 'tpv':
            code = "TPV:"
            break;
        case 'tougo':
            code = "GSV:"
            break;
        default:
            code = "SEM:"
            break;
    }
    let itemToSave = "";
    switch (networkName) {
        case 'tag':
            itemToSave = "LinesAndStopTAG";
            break;
        case 'tpv':
            itemToSave = "LinesAndStopTPV";
            break;
        case 'tougo':
            itemToSave = "LinesAndStopGSV";
            break;
        default:
            itemToSave = "LinesAndStopTAG";
            break;
    }
    let LinesAndStop = {
        "arret": stop,
        "zone": code + dictStops[found][0],
        "lines": lines
    }
    localStorage.setItem(itemToSave, JSON.stringify(LinesAndStop));
    localStorage.setItem('numberRows', numberRows);
    loading();
    refresh();

}

function minutesToHours(minutes) {
    var currentDate = new Date();
    var newDate = new Date(currentDate.getTime() + minutes * 60000 + 60000);
    return checkTime(newDate.getHours()) + ":" + checkTime(newDate.getMinutes())
}


async function loadStopAndLines(networkName) {
    let fileName = "";
    switch (networkName) {
        case 'tag':
            fileName = "js/stopsTag.txt";
            break;
        case 'tpv':
            fileName = "js/stopsTpv.txt";
            break;
        case 'tougo':
            fileName = "js/stopsTougo.txt";
            break;
        default:
            fileName = "js/stopsTag.txt";
            break;
    }
    const response = await fetch(fileName);
    const data = await response.text();
    return data;
}