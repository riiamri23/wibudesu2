import React, { useEffect, useState } from "react";
import {getAnimeTopAiring, getLatestUpdate} from '../../../services/AnimeService';
import Highlight from '../../../components/anime/Highlight';
import LatestEpisodes from '../../../components/anime/LatestEpisodes';
import Navbar from '../../../components/navbar/Index';

const Home = () => {
    const [topAiring, setTopAiring] = useState([]);
    const [latestUpdate, setLatestUpdate] = useState([]);
    const [paging, setPaging] = useState({
        "hasNextPage": true,
        "currentPage": 1
    });

    useEffect(()=>{
        const fetchTopAiring = async () =>{
            const response = await getAnimeTopAiring();
            setTopAiring(response.results);
        }
        const fetchlatestUpdate = async ()=>{
            const response = await getLatestUpdate({page:paging.currentPage});
            setPaging({
                "hasNextPage": response.hasNextPage,
                "currentPage": response.currentPage
            });
            setLatestUpdate(response.results);
        }
        fetchTopAiring();
        fetchlatestUpdate();
    }, [paging.currentPage]);
    return(
        <>
            <Navbar />
            <div className="container m-auto">
                {
                    topAiring.length > 0 && latestUpdate.length > 0 
                        ? <>
                            {/* TOP AIRING */}
                            <Highlight data={topAiring} /> 
                            {/* LATEST EPISODES */}
                            <LatestEpisodes data={latestUpdate} paging={paging} setPaging={setPaging} />
                        </> 
                        : <div className="flex justify-center align-middle">
                            <img src="/assets/gif/kohaku-tsukihime.gif" alt="sleepy" width="240px" />
                        </div>
                }
                
            </div>
        </>
        
    );
}

export default Home;
