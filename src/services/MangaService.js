import {consumet} from '../constants/constants';

export async function getMangaList({query = ""}){
    try{
        const response = await fetch(`${consumet}/manga/mangakakalot/${query}`);
        return await response.json();
    }catch(e){
        return e;
    }
}