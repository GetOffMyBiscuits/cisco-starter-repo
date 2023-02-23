async function getIP(ipType){
    var ipFour = 'https://api.ipify.org'
    var ipSix = 'https://api64.ipify.org'
    var ip = ''

    if (ipType === 'ipv4'){
        ip = ipFour;
    } else {ip = ipSix}

    const data = await fetch(ip)
    .then(response => response.text())
    .then(data => {
        return data
    })
    .catch(error => {
        console.error(error);
    });
    return data
}

export default getIP;

