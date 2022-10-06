const networks = {
    tag: { code: "SEM:", slogan: "Je monte, Je valide !", image: "https://upload.wikimedia.org/wikipedia/fr/thumb/a/a0/TAG_%28Logotype_2014%29.svg/512px-TAG_%28Logotype_2014%29.svg.png", rightIcon: "img/Cita_60px.png", rightIconText: "V1" },
    tpv: { code: "TPV:", slogan: "Prenez de l'avance", image: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4a/Logo_Pays_Voironnais_Mobilit%C3%A9.svg/1024px-Logo_Pays_Voironnais_Mobilit%C3%A9.svg.png", rightIcon: "img/IGdev.png", rightIconText: "V1" },
    tougo: { code: "GSV:", slogan: "Prenez de l'avance", image: "https://upload.wikimedia.org/wikipedia/fr/1/19/Logo_R%C3%A9seau_TouGo.jpg", rightIcon: "img/IGdev.png", rightIconText: "V1" },
}


function getNetwork(name) {
    return networks[name];
}

function getNetworkCode(name) {
    return networks[name].code;
}