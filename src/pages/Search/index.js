import React, {useState, useEffect} from 'react';
// import MangaListing from '../../../components/MangaListing';
import Navbar from '../../components/navbar/Index';
import { getSearch } from '../../services/SearchService';
import { AnimeCard } from '../../components/global/AnimeCard';
import { useParams } from "react-router-dom";
// import { Outlet } from "react-router-dom";

const Search = () => {
    const [dataSearch, setDataSearch] = useState([]);
    const params = useParams();

    useEffect(()=>{
        const fetchSearch = async () =>{
            const response = await getSearch({query: params?.query});

            setDataSearch(response.results);
        }

        fetchSearch();
    },[params?.query]);

    return (<>
        <Navbar />
        <div className="container m-auto">
            <div className="grid xl:grid-cols-6 md:grid-cols-4 gap-2 sm:grid-cols-3 grid-cols-2">
                {
                    dataSearch.length > 0 ? dataSearch?.map((value, index)=>{
                        return (<AnimeCard index={index} value={value} key={index} />);
                    }) :<div className="flex justify-center align-middle">
                        <img src="/assets/gif/kohaku-tsukihime.gif" alt="sleepy" width="180px" />
                    </div> 
                }
            </div>
        </div>
        </>);
}

export default Search;