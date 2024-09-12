const networks = {
    tag: { code: "SEM:", slogan: "On vous emmène encore plus loin !", image: "https://cdn.tc-infos.fr/network-logos/1272.svg", rightIcon: "img/IGdev.png", rightIconText: "V1" },

    tpv: { code: "TPV:", slogan: "Prenez de l'avance", image: "https://cdn.tc-infos.fr/network-logos/708.svg", rightIcon: "img/IGdev.png", rightIconText: "V1" },

    tougo: { code: "GSV:", slogan: "Prenez de l'avance", image: "https://cdn.tc-infos.fr/network-logos/1272.svg", rightIcon: "img/IGdev.png", rightIconText: "V1" },
}


function getNetwork(name) {
    return networks[name];
}

function getNetworkCode(name) {
    return networks[name].code;
}
