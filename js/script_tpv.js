async function getSchedules(){
    let LinesAndStop = JSON.parse(localStorage.getItem('LinesAndStopTPV'));
    try{
        let response =  await fetchApi("https://data.metromobilite.fr/api/routers/default/index/clusters/"+ LinesAndStop.zone +"/stoptimes");
        const timesMontfleury = await response.json();

    var finalSchedules = [];
    timesMontfleury.forEach(element => {
        var id = element.pattern.id.split(":");
        if(!LinesAndStop.lines){
            element.times.forEach(time => {
                finalSchedules.push({
                    "lastStop":element.pattern.shortDesc,
                    "time":time.realtimeArrival,
                    "realtime":time.realtime,
                    "line":id[1]
                });
            });
        }else{
        if(LinesAndStop.lines.includes(id[1])){
            element.times.forEach(time => {
                finalSchedules.push({
                    "lastStop":element.pattern.shortDesc,
                    "time":time.realtimeArrival,
                    "realtime":time.realtime,
                    "line":id[1]
                });
            });
        }
    }
    });
    if (!finalSchedules.length){
        return "Aucun passage de prévu";
    }else{
        return finalSchedules;
    }
   
    }catch{
        return "Erreur chargement";
    }

};

async function fetchApi(url){
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 5000)
    const response = await fetch(url,{
        headers:{
            "origin":"webBrowser"
        },
        signal: controller.signal
    });
    clearTimeout(timeoutId);
    return response
}

function secToDelay(time){
    let currentDate = new Date();
    let secondes = ((currentDate.getHours())*3600)+((currentDate.getMinutes())*60)+currentDate.getSeconds();
    let difference = Math.floor((time-secondes)/60);
        return difference;
    
}

function sort(tab){
    var values = []
    for (var key in tab){
        if(tab[key].time >= 0){
            values.push([key, tab[key].time, tab[key].lastStop, tab[key].realtime, tab[key].line])
        }
    }

    values.sort(function compare(i,j){
        return i[1]-j[1];
    });
    var finalSchedules = []
    values.forEach(element => {
        if(secToDelay(element[1]) >= 0){
        finalSchedules.push(
            {
                "lastStop":element[2],
                "time":secToDelay(element[1]),
                "realtime":element[3],
                "line":element[4]
            }
        );
        }
    });
    return finalSchedules;
}

function checkTime(i){
    if (i<10){
        i = "0"+i;
    }
    return i;
}

function getTime(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    h = checkTime(h);
    m = checkTime(m);
    return h+":"+m;
}

function checkSaved(){
   if(localStorage.getItem('LinesAndStopTPV') == null){
    let LinesAndStop = {
        "arret":"Voiron, LEPRINCE RINGUET",
        "zone":"ST00408",
        "lines":["1"]
    }
    localStorage.setItem('LinesAndStopTPV',JSON.stringify(LinesAndStop));
   }
   if(localStorage.getItem('numberRows') == null){
    let numberRows = 4
    localStorage.setItem('numberRows',numberRows);
}
}

function editLinesAndStop(stop,lines,numberRows){
    
 
        var i = 0;
        var found = 0;
        for (key in dictStops){
            if(dictStops[key][1] == stop){
                found = i;
            }
            i++;
        }
        var linesSplit = lines.split(",");
        console.log(linesSplit);
        let LinesAndStop = {
            "arret":stop,
            "zone":"TPV:"+dictStops[found][0],
            "lines":lines
        }
        localStorage.setItem('LinesAndStopTPV',JSON.stringify(LinesAndStop));
        localStorage.setItem('numberRows',numberRows);
        loading();
        refresh();
    
}

function minutesToHours(minutes){
    var currentDate = new Date();
    var newDate = new Date(currentDate.getTime() + minutes*60000 +60000);
    return checkTime(newDate.getHours()) + ":" + checkTime(newDate.getMinutes())
}
