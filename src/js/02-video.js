const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);


player.on('timeupdate', throttle(time => {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(time));
    console.log(time);
}, 1000));

const getSeconds = JSON.parse(localStorage.getItem('videoplayer-current-time'));

player.setCurrentTime(getSeconds.seconds)






