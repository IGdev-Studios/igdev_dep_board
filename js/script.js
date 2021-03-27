async function getSchedules(){
    let LinesAndStop = JSON.parse(localStorage.getItem('LinesAndStop'));
    let timesMontfleury =  await fetchApi("https://data.metromobilite.fr/api/routers/default/index/clusters/"+ LinesAndStop.zone +"/stoptimes");
    var finalSchedules = [];
    timesMontfleury.forEach(element => {
        var id = element.pattern.id.split(":");
        if(!LinesAndStop.lines){
            element.times.forEach(time => {
                finalSchedules.push({
                    "lastStop":element.pattern.lastStopName,
                    "time":time.realtimeArrival,
                    "realtime":time.realtime,
                    "line":id[1]
                });
            });
        }else{
        if(LinesAndStop.lines.includes(id[1])){
            element.times.forEach(time => {
                finalSchedules.push({
                    "lastStop":element.pattern.lastStopName,
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
   
};

async function fetchApi(url){
    const response = await fetch(url,{
        headers:{
            "origin":"webBrowser"
        }
    });
    return response.json()
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
        values.push([key, tab[key].time, tab[key].lastStop, tab[key].realtime, tab[key].line])
    }

    values.sort(function compare(i,j){
        return i[1]-j[1];
    });
    var finalSchedules = []
    values.forEach(element => {
        finalSchedules.push(
            {
                "lastStop":element[2],
                "time":secToDelay(element[1]),
                "realtime":element[3],
                "line":element[4]
            }
        );
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
   if(localStorage.getItem('LinesAndStop') == null){
    let LinesAndStop = {
        "arret":"Montfleury",
        "zone":"SEM:GENMONTFLEU",
        "lines":[16]
    }
    localStorage.setItem('LinesAndStop',JSON.stringify(LinesAndStop));
   }
}

function editLinesAndStop(stop,lines){
    
 
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
            "zone":"SEM:"+dictStops[found][0],
            "lines":lines
        }
        localStorage.setItem('LinesAndStop',JSON.stringify(LinesAndStop));
        loading();
        refresh();
        



}
