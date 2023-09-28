import {consumet} from '../constants/constants';

export async function getSearch({query, page = 1}){
    try{
        const response = await fetch(`${consumet}/anime/gogoanime/${query}?page=${page}`);
        return await response.json();
    }catch(e){
        return e;
    }
}