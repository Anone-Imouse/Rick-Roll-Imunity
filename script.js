const isAYouTubePage = location.href.includes("https://www.youtube.com/")
const isAYouTubeWatchPage = location.href.includes("https://www.youtube.com/watch") || location.href.includes("https://www.youtube.com/shorts")
const susCheck = /r(i|1)ckr(o|0)ll|r(i|1)ck( )?(a|4)(s|5)tl(e|3)y|n(e|3)v(e|3)r g(o|0)nn(4|a) g(i|1)v(e|3) y(o|0)u up|nggyu|(a|4)(s|5)tl(e|3)y|r(1|i)ck( )+r(o|0)(l|7)(l|7)|r(1|i)ck(4|a)(s|5)tl(e|3)y/gim

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

if(isAYouTubeWatchPage){
 let int = setInterval(() => {
  if(document.querySelector('video')){
    document.querySelector('video').pause()
    clearInterval(int)
    let int1 = setInterval(() => {
    if(document.querySelector('#text > a.yt-simple-endpoint.style-scope.yt-formatted-string') && document.querySelector('#text > a.yt-simple-endpoint.style-scope.yt-formatted-string').textContent){
        document.querySelector('video').play()
        clearInterval(int1)
    }
    },100)
  }
 },100)
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
if(isAYouTubePage && 
(location.href.match(susCheck) || 
(document.querySelector('#title > h1 > yt-formatted-string') ? document.querySelector("#title > h1 > yt-formatted-string").textContent.match(susCheck) : null) ||
(document.querySelector("#overlay > ytd-reel-player-header-renderer > h2 > yt-formatted-string") ? document.querySelector("#overlay > ytd-reel-player-header-renderer > h2 > yt-formatted-string").textContent.match(susCheck) : null) ||
(document.querySelector('#text > a.yt-simple-endpoint.style-scope.yt-formatted-string') ? document.querySelector("#text > a.yt-simple-endpoint.style-scope.yt-formatted-string").textContent.match(susCheck) : null))){
    location.href = "about:blank"
}
},1000)

 if(location.href.toLowerCase().includes('noordstar')){
    alert(`NoNoNo!!! This page was bad and tried to rickroll you :(`)
     location.href = "about:blank"
}
