const keys = document.getElementsByClassName('key');
const sounds = [
  {
    keycode: 'KeyA',
    sound: new Audio('./sounds/clap.wav')
  },
  {
    keycode: 'KeyS',
    sound: new Audio('./sounds/hihat.wav')
  },
  {
    keycode: 'KeyD',
    sound: new Audio('./sounds/kick.wav')
  },
  {
    keycode: 'KeyF',
    sound: new Audio('./sounds/openhat.wav')
  },
  {
    keycode: 'KeyG',
    sound: new Audio('./sounds/boom.wav')
  },
  {
    keycode: 'KeyH',
    sound: new Audio('./sounds/ride.wav')
  },
  {
    keycode: 'KeyJ',
    sound: new Audio('./sounds/snare.wav')
  },
  {
    keycode: 'KeyK',
    sound: new Audio('./sounds/tom.wav')
  },
  {
    keycode: 'KeyL',
    sound: new Audio('./sounds/tink.wav')
  }
];

for(let i = 0; i < keys.length; i++) {
  document.addEventListener('keydown', (event)=>{//add event listener on keydown
    if(event.code === sounds[i].keycode){      
      keys[i].classList.add('playing');//adding class      
      sounds[i].sound.currentTime = 0;//rewinding sound
      sounds[i].sound.play();//playing sound      
      this.addEventListener('keyup', (e)=> keys[i].classList.remove('playing'));//removing class
    };      
  });  
};



  


