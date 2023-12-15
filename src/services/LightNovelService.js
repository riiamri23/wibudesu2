import {consumet} from '../constants/constants';

export async function getLightNovel({query = ""}){
    try {
        const response = await fetch(`${consumet}light-novels/readlightnovels/${query}`);
        return await response.json();
    }catch(er){
        return er;
    }
}

export async function getLightNovelInfo(id){
    try{
        const response = await fetch(`${consumet}light-novels/readlightnovels/info?id=${id}`);

        return await response.json();
    }catch(e){
        return e;
    }
}