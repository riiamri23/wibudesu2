import React, { useEffect, useState } from "react";
import { getAnimeInfo, getAnimeWatch } from "../../../services/AnimeService";
import { Link, useParams } from "react-router-dom";
import Navbar from '../../../components/navbar/Index';
import InfoAnime from '../../../components/InfoAnime';


const ListEps = ({episodes})=>(<div className="w-1/4 overflow-y-auto" >
        {
            episodes.reverse().map((value)=>( <Link key={value.number} to={`/watch/${value.id}`} className="block w-full cursor-pointer rounded-xl bg-teal-500 p-1 my-1 text-center font-semibold text-white transition hover:scale-105 hover:bg-teal-600">{`Episode - ${value.number}`}</Link>))
        }
    </div>);

const InfoNew = () => {
    const [watch, setWatch] = useState();
    const [info, setInfo] = useState();
    const params = useParams();

    useEffect(()=>{
        const fetchInfoAndWatch = async () =>{
            const responseInfo = await getAnimeInfo(params.name);

            const newestEps = responseInfo.episodes[responseInfo.episodes.length-1].id;
            const responseWatch = await getAnimeWatch(newestEps);
            setInfo(responseInfo);
            setWatch(responseWatch);
        }
        fetchInfoAndWatch();
    }, [params]);
    return(
    
    <>
        <Navbar />
        <div className="container m-auto">
            {
                watch && info ? (
                    <>
                        {/* Watch */}
                        <div className="space-y-8 rounded-xl bg-white p-5 my-2">
                            <div>{`${info?.title} - Eps ${info?.episodes?.length-1}`}</div>
                            <div className="flex space-x-4 h-[36rem]">
                                <div id="video-player" className="w-3/4 flex aspect-w-16">
                                    <iframe
                                    className="m-auto overflow-y-hidden"
                                    title="video player"
                                    src={watch.headers.Referer}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    mozallowfullscreen="true"
                                    webkitallowfullscreen="true"
                                    scrolling="no"
                                    />
                                </div>
                                <ListEps episodes={info?.episodes} />
                            </div>
                            
                        </div>
                        <InfoAnime data={info} />
                    </>
                ) : <>Loading..</>
            }
            
        </div>
    </>
    );
}

export default InfoNew;