import {consumetURL} from '../constants/constants';
// import axios from 'axios';

export async function getMangaList({query = ""}){
    try{
        const response = await fetch(`${consumetURL}manga/mangakakalot/${query}`);
        return await response.json();
    }catch(e){
        return e;
    }
}

export async function getMangaInfo(id){
    try{
        const response = await fetch(`${consumetURL}manga/mangakakalot/info?id=${id}`);

        return await response.json();
    }catch(e){
        return e;
    }
}

export async function getMangaRead(id){
    try{
        const response = await fetch(`${consumetURL}manga/mangakakalot/read?chapterId=${id}`);

        return await response.json();
    }catch(e){
        return e;
    }
}