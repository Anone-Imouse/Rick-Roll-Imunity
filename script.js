if(!(location.href.includes("https://github.com/Anone-Imouse/Rick-Roll-Imunity/"))){
const isAYouTubePage = () => location.href.includes("https://www.youtube.com/");
const isAYouTubeWatchPage = () => location.href.includes("https://www.youtube.com/watch") || location.href.includes("https://www.youtube.com/shorts");
const susCheck = /(r(i|1)ckr(o|0)(l|7)(l|7))|(r(i|1)ck( |\+|&|=)?(a|4)(s|5)t(l|7)(e|3)y)|(n(e|3)v(e|3)r( |\+|&|=)?g(o|0)nn(4|a)( |\+|&|=)?g(i|1)v(e|3)( |\+|&|=)?y(o|0)u( |\+|&|=)?up)|(nggyu)|((a|4)(s|5)t(l|7)(e|3)y)|(r(1|i)ck( |\+|&|=)?r(o|0)(l|7)(l|7))|(r(1|i)ck(4|a)(s|5)t(l|7)(e|3)y)|(y(0|o)ur( |\+|&|=)?h(3|e)(a|4)rt(')?(s|5)( |\+|&|=)?b(e|3)(3|e)n( |\+|&|=)?(a|4)ch(i|1)n(g)?( |\+|&|=)?(but( |\+|&|=)?y(o|0)u(')?r(e|3)( |\+|&|=)?t(o|0)(o|0)( |\+|&|=)?(s|5)hy( |\+|&|=)?t(o|0)( |\+|&|=)?(s|5)(a|4)y( |\+|&|=)?(i|1)t)?)/gim;
const {log} = console;
var blockList;
    let start = Date.now()
    chrome.runtime.sendMessage({ type: 'request' }, response => {
        blockList = response;
        if(blockList.includes(location.href.replace(/&(.)+/g,''))){
            location.href = "about:blank"
        }
        if(document.title.match(susCheck)){
            location.href = "about:blank"
        }
        setInterval(() => {
            if(blockList.includes(location.href.replace(/&(.)+/g,''))){
                location.href = "about:blank"
            }
        },100)
        setInterval(() => {
            if(document.title.match(susCheck)){
                location.href = "about:blank"
            }
        },100)
        document.addEventListener('click', function(e){
            let targ = e.target
            log(targ)
            if(((targ.parent && tar.parent instanceof HTMLAnchorElement) || targ instanceof HTMLAnchorElement) && targ.href && blockList.includes(targ.href) && !(confirm('Warning: This link might lead to a rickroll! Click OK to continue anyway.'))){
                e.preventDefault()
            }
        })
    })

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

/*if(location.href.includes('https://www.youtube.com/playlist')){
    let int = setInterval(() => {
        if(document.querySelector("#page-manager > ytd-browse > ytd-playlist-header-renderer > div > div.immersive-header-background-wrapper.style-scope.ytd-playlist-header-renderer > div")){
            clearInterval(int)
            let list = []
            document.querySelectorAll('a').forEach(basicLink => {
                let link = basicLink.href.replace(/&(.)+/g,'')
                if(link.includes('/shorts') || link.includes('/watch')){
                    list.push(link)
                }
            })
            let currentList = JSON.parse(localStorage.getItem('links'))
            currentList = new Set(currentList.concat(list))
            console.log(currentList)
            localStorage.setItem('links',JSON.stringify(Array.from(currentList)))
        }
    },300)
}*/

if(document.querySelector('iframe')){
    if(document.querySelector('iframe').src == "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?&enablejsapi=1&autoplay=1&mute=1"){
document.querySelector('iframe').remove()
}
}

if(decodeURI(location.href).match(susCheck) || document.title.match(susCheck)){
   document.body.innerHTML = `
        <h1>NoNoNo!!!</h1>
  <p>This page was bad and tried to rickroll you :(</p>
    `
}

setInterval(() => {
if(isAYouTubePage() && 
(decodeURI(location.href).match(susCheck) || 
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
}
