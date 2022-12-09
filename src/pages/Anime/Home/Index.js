import React, { useEffect, useState } from "react";
import {getAnimeTopAiring, getLatestUpdate} from '../../../services/AnimeService';
import Highlight from '../../../components/Highlight';
import LatestEpisodes from '../../../components/LatestEpisodes';
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
                {/* TOP AIRING */}
                { topAiring.length > 0 ? <Highlight data={topAiring} /> : <>Loading..</>}
                {/* LATEST EPISODES */}
                {latestUpdate.length > 0 ? <LatestEpisodes data={latestUpdate} paging={paging} setPaging={setPaging} /> : <>Loading..</>}
            </div>
        </>
        
    );
}

export default Home;
