if(document.querySelector('video')){
    if(document.querySelector('video').autoplay){
        document.querySelector('video').pause()
        document.querySelector('video').addEventListener('click',myFunc)
        
        function myFunc(){
document.querySelector('video').removeEventListener('click',myFunc)
document.querySelector('video').play()
  }
 }
}

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
    
if(location.href === 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' || location.href === 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&feature=youtu.be'){
    location.href = "about:blank"
}
},1000)

 if(location.href.toLowerCase().indexOf('noordstar') > -1){
    alert(`NoNoNo!!! This page was bad and tried to rickroll you :(`)
     location.href = "about:blank"
}
