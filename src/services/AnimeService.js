import {consumet} from '../constants/constants';

export async function getAnimeTopAiring(){
    try{
        const response = await fetch(`${consumet}/anime/gogoanime/top-airing`);
        // console.log(response);
        return await response.json();
    }catch(e){
        return e;
    }
}

export async function getLatestUpdate(){
    try{
        const response = await fetch(`${consumet}/anime/gogoanime/recent-episodes`);

        return await response.json();
    }catch(e){
        return e;
    }
}