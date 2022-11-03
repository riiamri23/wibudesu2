import {consumet, consumetProxy} from '../constants/constants';

export async function getMangaList({query = ""}){
    try{
        const response = await fetch(`${consumet}/manga/mangakakalot/${query}`);
        return await response.json();
    }catch(e){
        return e;
    }
}

export async function getMangaInfo(id){
    try{
        const response = await fetch(`${consumet}/manga/mangakakalot/info?id=${id}`);

        return await response.json();
    }catch(e){
        return e;
    }
}

export async function getMangaRead(id){
    try{
        const response = await fetch(`${consumet}/manga/mangakakalot/read?chapterId=${id}`);

        return await response.json();
    }catch(e){
        return e;
    }
}

export async function getMangaImage(url){
    try{
        let imgSrc = null;
        // const myHeaders = new Headers({
        //     "Referer": "https://mangakakalot.com"
        // });

        const myRequest = new Request(`${consumetProxy}/https://v3.mkklcdnv6tempv2.com/img/tab_3/00/01/13/ln951470/chapter_101_1/1-o.jpg`, {
            headers: new Headers({'content-type': 'image/jpeg','Referer': 'https://mangakakalot.com'}),
            mode: 'cors'
        });
        const response = await fetch(myRequest)
        .then((response) => {
            return response.blob()
        })
        .then((myBlob) => {
            imgSrc = URL.createObjectURL(myBlob);
        });

        return imgSrc;
    }catch(e){
        return e;
    }
}