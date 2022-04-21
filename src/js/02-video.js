import Player from '@vimeo/player';
const throttle = require('lodash.throttle');


const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);


player.on('timeupdate', throttle((event) => {
        localStorage.setItem("current-time", JSON.stringify(event.seconds)) 
    }, 1000))
    
player.setCurrentTime(localStorage.getItem("current-time")).then(function(seconds) {
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                break;
            default:
                break;
        }
    });



