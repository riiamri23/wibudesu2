import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {getAnimeTopAiring, getLatestUpdate} from '../../../services/AnimeService';
import Highlight from '../../../components/anime/Highlight';
import WDList from '../../../components/global/wdlist/WDList.js';
import Navbar from '../../../components/navbar/Index';
import {mastahRecomendation} from '../../../constants/constants'

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
                <div className="flex flex-col lg:flex-row lg:space-x-4 justify-center align-middle mx-2">
                    {
                        topAiring.length > 0 && latestUpdate.length > 0 
                            ? <>

                                <div className="lg:w-3/4 w-full">
                                    {/* TOP AIRING */}
                                    <Highlight data={topAiring} /> 
                                    {/* LATEST EPISODES */}
                                    <WDList data={latestUpdate} paging={paging} setPaging={setPaging} />
                                </div>

                                <div className="lg:w-1/4 w-full bg-white rounded-3xl">
                                    <div className="space-y-2">
                                        <h1 className="p-2 text-2xl font-bold text-gray-700 antialiased text-center">Mastah Recommendation</h1>
                                        {/* make it static because mastah doesn't have time for make it */}
                                        <div className="flex flex-col">
                                            {/* <Link to={`/infonew/kimetsu-no-yaiba-katanakaji-no-sato-hen`} className="w-full flex items-center space-x-2 px-2 hover:bg-gray-300 py-4">
                                                <div className="text-xl font-bold">
                                                    1
                                                </div>
                                                <picture className="w-1/4 rounded-lg">
                                                    <img className="rounded-lg" src="https://gogocdn.net/cover/kimetsu-no-yaiba-katanakaji-no-sato-hen-1680122874.png" alt="gambar" />
                                                </picture>
                                                <div className="w-3/4">
                                                    <h2 className="text-md font-bold">Kimetsu no Yaiba: Katanakaji no Sato-hen</h2>
                                                    <p className="text-sm">Action, Fantasy, Historical, Shounen</p>
                                                </div>
                                            </Link>
                                            <Link to={`/infonew/jigokuraku`} className="w-full flex items-center space-x-2 px-2 hover:bg-gray-300 py-4">
                                                <div className="text-xl font-bold">
                                                    2
                                                </div>
                                                <picture className="w-1/4 rounded-lg">
                                                    <img className="rounded-lg" src="https://gogocdn.net/cover/jigokuraku-1680122271.png" alt="gambar" />
                                                </picture>
                                                <div className="w-3/4">
                                                    <h2 className="text-md font-bold">Jigokuraku</h2>
                                                    <p className="text-sm">Action, Fantasy, Gore, Historical, Shounen</p>
                                                </div>
                                            </Link>
                                            <Link to={`/infonew/oshi-no-ko`} className="w-full flex items-center space-x-2 px-2 hover:bg-gray-300 py-4">
                                                <div className="text-xl font-bold">
                                                    3
                                                </div>
                                                <picture className="w-1/4 rounded-lg">
                                                    <img className="rounded-lg" src="https://gogocdn.net/cover/oshi-no-ko-1680121500.png" alt="gambar" />
                                                </picture>
                                                <div className="w-3/4">
                                                    <h2 className="text-md font-bold">Oshi no ko</h2>
                                                    <p className="text-sm">Drama, Supernatural</p>
                                                </div>
                                            </Link>
                                            <Link to={`/infonew/maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e-kayou-2nd-season-part-2`} className="w-full flex items-center space-x-2 px-2 hover:bg-gray-300 py-4">
                                                <div className="text-xl font-bold">
                                                    4
                                                </div>
                                                <picture className="w-1/4 rounded-lg">
                                                    <img className="rounded-lg" src="https://gogocdn.net/cover/maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e-kayou-2nd-season-part-2-1672331388.png" alt="gambar" />
                                                </picture>
                                                <div className="w-3/4">
                                                    <h2 className="text-md font-bold">Maou Gakuin no Futekigousha: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e Kayou II</h2>
                                                    <p className="text-sm">Action, Fantasy, Mythology, Reincarnation, School</p>
                                                </div>
                                            </Link>
                                            <Link to={`/infonew/mashle`} className="w-full flex items-center space-x-2 px-2 hover:bg-gray-300 py-4">
                                                <div className="text-xl font-bold">
                                                    5
                                                </div>
                                                <picture className="w-1/4 rounded-lg">
                                                    <img className="rounded-lg" src="https://gogocdn.net/cover/mashle-1680202211.png" alt="gambar" />
                                                </picture>
                                                <div className="w-3/4">
                                                    <h2 className="text-md font-bold">Mashle</h2>
                                                    <p className="text-sm">Action, Comedy, Fantasy, Gag Humor, Parody, School, Shounen</p>
                                                </div>
                                            </Link> */}
                                            {mastahRecomendation?.length > 0 ? 
                                                mastahRecomendation?.map((val, index)=>{
                                                    return (<Link to={val?.pageLink} className="w-full flex items-center space-x-2 px-2 hover:bg-gray-300 py-4">
                                                    <div className="text-xl font-bold">
                                                            {index+1}
                                                        </div>
                                                        <picture className="w-1/4 rounded-lg">
                                                            <img className="rounded-lg" src={val?.coverLink} alt="gambar" />
                                                        </picture>
                                                        <div className="w-3/4">
                                                            <h2 className="text-md font-bold">{val?.name}</h2>
                                                            <p className="text-sm">{val?.genre}</p>
                                                        </div>
                                                    </Link>);
                                                })
                                            
                                            : <></>}

                                        </div>
                                    </div>
                                </div>
                            </> 
                            : <div className="flex justify-center align-middle">
                                <img src="/assets/gif/kohaku-tsukihime.gif" alt="sleepy" width="180px" />
                            </div>

                    }
                </div>
                
            </div>
        </>
        
    );
}

export default Home;
