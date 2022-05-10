const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);


player.on('timeupdate', throttle(onVideoTime, 1000));

function onVideoTime(item) {
    localStorage.setItem("videoplayer-current-time", item.seconds);
    
}

const getSeconds = localStorage.getItem('videoplayer-current-time');
if (getSeconds) {
    player.setCurrentTime(getSeconds)
}








