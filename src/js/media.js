const media = window.matchMedia('(max-width: 1080px)'); 

function handleMediaChange(e){
    console.log(media);
    if(e.matches){
        console.log(`size = ${e} or ${e.matches}`);
    }else{
        console.log(`size = ${e} or ${e.matches}`);
    }
};

media_query(media);

media.addEventListener('change',handleMediaChange(media));