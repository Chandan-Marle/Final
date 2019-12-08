time();
function time() {
    today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    if (today.getSeconds() < 10) {
        var time = today.getHours() + ":" + today.getMinutes() + ":0" + today.getSeconds();
    }
    document.getElementById('time').innerHTML = "<p>"+time+"</p>";
}

setInterval(time, 500);