let images = document.getElementsByClassName('photos')[0].getElementsByTagName('img');
let main = document.getElementsByName('main')[0];




for(let i = 0; i < images.length; i++  ){

    images[i].onclick = function(){

        main.src = this.src;

    }
    
}