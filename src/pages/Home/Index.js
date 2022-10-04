import React, { useEffect, useState } from "react";
import {getAnimeTopAiring, getLatestUpdate} from '../../services/AnimeService';
import { Link } from "react-router-dom";

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
        <div className="container">
            {/* TOP AIRING */}
            <div>
                <h1>Top Airing</h1>
                    <div
                        className="flex overflow-x-scroll pb-10 hide-scroll-bar"
                    >
                        { topAiring.length > 0 ?
                            topAiring.map((value, index)=>{
                                // const rank = index++;
                                return (
                                <Link
                                to={`/info/${value?.id}`} 
                                key={index}
                                className="flex flex-nowrap lg:ml-5 md:ml-5 ml-3 "
                                >
                                    <div className="inline-block px-3">
                                        <div
                                        className="w-64 max-w-lg overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                                        >
                                            <img src={value.image} alt={value.id} />
                                            <div>
                                                <h3>{value.title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Link>);
                            }) : <>Loading..</>
                        }
                    
                </div>
            </div>
            {/* TOP AIRING */}
            <div>
                <h1>Latest Updates</h1>
                    <div
                        className="flex pb-10 hide-scroll-bar"
                    >

                        { topAiring.length > 0 ?
                            latestUpdate.map((value, index)=>{
                                // const rank = index++;
                                return (<div
                                key={index}
                                className="flex lg:ml-5 md:ml-5 ml-3"
                                >
                                    <div className="px-3">
                                        <div
                                        className="w-64 max-w-lg overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                                        >
                                            <img src={value.image} alt={value.id} />
                                            <div>
                                                <h3>{value.title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>);
                            }):<>Loading..</>
                        }
                    </div>

            </div>
        </div>
        
    );
}

export default Home;
