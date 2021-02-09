if(document.querySelector('iframe')){
    if(document.querySelector('iframe').src == "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?&enablejsapi=1&autoplay=1&mute=1"){
document.querySelector('iframe').remove()
}
}

 if(location.href.toLowerCase().indexOf('rick') > -1 || location.href.toLowerCase().indexOf('astley') > -1 || location.href.toLowerCase().indexOf('roll') > -1 ){
   document.body.innerHTML = `
        <h1>NoNoNo!!!</h1>
  <p>This page was bad and tried to rickroll you :(</p>
    `
}

setInterval(() => {
    
if(location.href === 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'){
    location.href = "about:blank"
}
},2000)

 if(location.href.toLowerCase().indexOf('noordstar') > -1){
    alert(`
        NoNoNo!!! This page was bad and tried to rickroll you :(`)
    close()
}

document.addEventListener('keydown',function(e){
if(e.key=='P' && document.querySelector('video') && e.ctrlKey){
     if(!document.pictureInPictureElement){
document.querySelector('video').requestPictureInPicture()
    }
    else{
        document.exitPictureInPicture();
    }
  }
  
    else if(e.key=='F' && e.ctrlKey){
        if(!document.fullscreenElement){
         if(document.querySelector('video')){
document.querySelector('video').requestFullscreen();
        }
         else if(document.querySelector('iframe')){ document.querySelector('iframe').requestFullscreen();
        }
         else if(document.querySelector('canvas')){ document.querySelector('canvas').requestFullscreen();
        }
    }
      else{
          document.exitFullscreen();
      }
    }
    })