async function getSchedules(){
    let timesMontfleury =  await fetchApi("https://data.metromobilite.fr/api/routers/default/index/clusters/SEM:GENMONTFLEU/stoptimes");
    var finalSchedules = [];
    timesMontfleury.forEach(element => {
        var id = element.pattern.id.split(":");
        if(id[1] == "16"){
            element.times.forEach(time => {
                finalSchedules.push({
                    "lastStop":element.pattern.lastStopName,
                    "time":time.realtimeArrival,
                    "realtime":time.realtime,
                    "line":id[1]
                });
            });
        }
    });
    if (finalSchedules == []){
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