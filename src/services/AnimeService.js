import {consumet} from '../constants/constants';

export async function getAnimeTopAiring(){
    try{
        const response = await fetch(`${consumet}/anime/gogoanime/top-airing`);
        return await response.json();
    }catch(e){
        return e;
    }
}

export async function getLatestUpdate({page, type}){
    try{
        const response = await fetch(`${consumet}/anime/gogoanime/recent-episodes?page=${page}`);
        return await response.json();
    }catch(e){
        return e;
    }
}

export async function getAnimeInfo(id){
    try{
        return await fetch(`${consumet}/anime/gogoanime/info/${id}`).then(response=>response.json());
    }catch(e){
        return e;

    }
}

export async function getAnimeWatch(id){
    try{
        return await fetch(`${consumet}/anime/gogoanime/watch/${id}`).then(response=>response.json());
    }catch(e){
        return e;
    }
}