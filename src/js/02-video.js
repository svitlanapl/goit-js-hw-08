import Player from '@vimeo/player';
// console.log(Player);

// const throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('iframe');
const player = new Player(iframeEl);

const KEY_LOCALSTORAGE = "videoplayer-current-time";

const currentTime = localStorage.getItem(KEY_LOCALSTORAGE);
if (currentTime) {
    player.setCurrentTime(currentTime);
}

player.on('timeupdate', throttle(function (data) {
    localStorage.setItem(KEY_LOCALSTORAGE, data.seconds);
}, 1000)
);

