const networks = { tag: { code: "SEM:", slogan: "Je monte, Je valide !", image: "https://upload.wikimedia.org/wikipedia/fr/thumb/a/a0/TAG_%28Logotype_2014%29.svg/512px-TAG_%28Logotype_2014%29.svg.png", rightIcon : "img/Cita_60px.png", rightIconText: "V1" } }

function getNetwork(name){
    return networks[name];
}

function getNetworkCode(name) {
    return networks[name].code;
}