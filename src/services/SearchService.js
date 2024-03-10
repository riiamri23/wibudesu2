import {consumetURL} from '../constants/constants';

export async function getSearch({query, page = 1}){
    try{
        const response = await fetch(`${consumetURL}anime/gogoanime/${query}?page=${page}`);
        return await response.json();
    }catch(e){
        return e;
    }
}