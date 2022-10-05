import React, { useEffect, useState } from "react";
import {getAnimeTopAiring, getLatestUpdate} from '../../services/AnimeService';
import Highlight from '../../components/Highlight';
import LatestEpisodes from '../../components/LatestEpisodes';

const Home = () => {
    const [topAiring, setTopAiring] = useState([]);
    const [latestUpdate, setLatestUpdate] = useState([]);

    useEffect(()=>{
        const fetchTopAiring = async () =>{
            const response = await getAnimeTopAiring();
            setTopAiring(response.results);
        }
        const fetchlatestUpdate = async ()=>{
            const response = await getLatestUpdate();
            setLatestUpdate(response.results);
        }
        fetchTopAiring();
        fetchlatestUpdate();
    }, []);
    return(
        <div className="container m-auto">
            {/* TOP AIRING */}
            { topAiring.length > 0 ? <Highlight data={topAiring} /> : <>Loading..</>}
            {/* LATEST EPISODES */}
            {latestUpdate.length > 0 ? <LatestEpisodes data={latestUpdate} /> : <>Loading..</>}
        </div>
        
    );
}

export default Home;
