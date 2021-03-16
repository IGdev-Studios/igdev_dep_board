async function getSchedules(){
    let timesMontfleury =  await fetchApi("https://data.metromobilite.fr/api/routers/default/index/clusters/SEM:GENMONTFLEU/stoptimes");
    console.log(timesMontfleury);
    var finalSchedules = [];
    timesMontfleury.forEach(element => {
        var id = element.pattern.id.split(":");
        if(id[1] == "16"){
           found = 0;
           finalSchedules.forEach(finalSchedule => {
            if(finalSchedule.lastStop == element.pattern.desc){
                found = 1;
                return false;
            } 

    });
    if(found == 0){
        finalSchedules.push({
                    "lastStop":element.pattern.desc,
                    "times":[]
                });
        element.times.forEach(time => {
            let index = finalSchedules.map((o) => o.lastStop).indexOf(element.pattern.desc);
            finalSchedules[index].times.push(
                {"arrival":secToDelay(time.realtimeArrival),
                "realtime":time.realtime
                }
            );
        });
    }else{
        element.times.forEach(time => {
            let index = finalSchedules.map((o) => o.lastStop).indexOf(element.pattern.desc);
            
            finalSchedules[index].times.push(
                {"arrival":secToDelay(time.realtimeArrival),
                "realtime":time.realtime
                }
            );
        });
    }
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
    if(difference == 0){
        return "<1";
    }else{
        return difference;
    }
    
}