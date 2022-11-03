import {consumet, consumetProxy} from '../constants/constants';
// import axios from 'axios';

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
        // window.location='https://mangakakalot.com';
        let imgSrc = null;
        // const myHeaders = new Headers({
        //     'content-type': 'image/jpeg',
        //     "proxy-referer": "https://mangakakalot.com/",
        //     "Accept": "*/*",
        //     "Accept-Encoding":"gzip, deflate, br",
        //     "Connection":"keep-alive"
        // });
        // let cors = "cors";
        //https://v3.mkklcdnv6tempv2.com/img/tab_3/00/01/13/ln951470/chapter_100_4/1-o.jpg
        // const myRequest = new Request(`${consumetProxy}/https://v3.mkklcdnv6tempv2.com/img/tab_3/00/01/13/ln951470/chapter_101_1/1-o.jpg`, {
        const myRequest = new Request(`${consumet}/utils/image-proxy?url=https://v3.mkklcdnv6tempv2.com/img/tab_3/00/01/13/ln951470/chapter_100_4/1-o.jpg&referer=https://mangakakalot.com`);
        // const res = 
        await fetch(myRequest)
        .then((response) => {
            return response.blob()
        })
        .then((myBlob) => {
            imgSrc = URL.createObjectURL(myBlob);
        });
        // if(res.type === "opaque"){

        //     cors = "cors";
        //     const myRequest = new Request(`${consumetProxy}/https://v3.mkklcdnv6tempv2.com/img/tab_3/00/01/13/ln951470/chapter_100_4/1-o.jpg`, {
        //     // const myRequest = new Request(`${consumetProxy}/${url}`, {
        //         headers: myHeaders,
        //         referrer: 'https://mangakakalot.com',
        //         mode: cors,
        //     });
        //     await fetch(myRequest)
        //     .then((response) => {
        //         return response.blob()
        //     })
        //     .then((myBlob) => {
        //         imgSrc = URL.createObjectURL(myBlob);
        //     });
        // }

        return imgSrc;
    }catch(e){
        return e;
    }
}

// export async function getMangaImage2(url){
//     try{
//         let imgSrc = null;
//         // const myHeaders = new Headers({
//         //     'content-type': 'image/jpeg',
//         //     "referer": "https://mangakakalot.com"
//         // });
//         await axios.get(`${consumetProxy}//https://v3.mkklcdnv6tempv2.com/img/tab_3/00/01/13/ln951470/chapter_101_1/1-o.jpg`, {
//             referrer: 'https://mangakakalot.com',
//             headers: {
//                 'content-type': 'image/jpeg',
//                 'referer': "https://mangakakalot.com"
//             },
//             mode: 'cors',
//             cache: 'default',
//         })
//         .then((response) => {
//             return response.blob()
//         })
//         .then((myBlob) => {
//             imgSrc = URL.createObjectURL(myBlob);
//         });
//         return imgSrc;
//     }catch(e){
//         return e;
//     }
// }