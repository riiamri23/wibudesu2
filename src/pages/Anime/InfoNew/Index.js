import React, { useEffect, useState } from "react";
import { getAnimeInfo, getAnimeWatch } from "../../../services/AnimeService";
import { Link, useParams } from "react-router-dom";
import Navbar from '../../../components/navbar/Index';
import InfoAnime from '../../../components/anime/InfoAnime';


const ListEps = ({name,episodes})=>(<div className="w-full md:w-1/4 overflow-y-auto" >
        {
            episodes.reverse().map((value)=>( <Link key={value?.number} to={`/infonew/${name}%${value?.number}`} className="block w-full cursor-pointer rounded-xl bg-teal-500 p-1 my-1 text-center font-semibold text-white transition hover:scale-105 hover:bg-teal-600">{`Episode - ${value?.number}`}</Link>))
        }
    </div>);

const InfoNew = () => {
    const [watch, setWatch] = useState();
    const [info, setInfo] = useState();
    const [currentEps, setCurrentEps] = useState();
    const [loading, setLoading] = useState(false);
    const params = useParams();

    useEffect(()=>{
        const fetchInfoAndWatch = async () =>{
            setLoading(true);
            try{
                const paramSplit = params?.name?.split("%");
    
                const responseInfo = await getAnimeInfo(paramSplit[0]);
                const indexEps = paramSplit[1] ? paramSplit[1] : responseInfo.episodes.length;
                const epsSelected = responseInfo?.episodes?.[indexEps-1]?.id;
    
                const responseWatch = await getAnimeWatch(epsSelected);
                setCurrentEps(indexEps);
                setInfo(responseInfo);
                setWatch(responseWatch);
                console.log(responseWatch);

            }catch(e){
                console.log(e);
            }
            setLoading(false);
        }
        fetchInfoAndWatch();
    }, [params]);
    return(
    
    <>
        <Navbar />
        <div className="container m-auto">
            {
                watch && info && !loading ? (
                    <>
                        {/* Watch */}
                        <div className="space-y-8 rounded-xl bg-white p-5 my-2">
                            <div>{`${info?.title} - Eps ${currentEps}`}</div>
                            <div className="flex space-x-4 h-[36rem]">
                                <div className="md:w-3/4">
                                    <div id="video-player" className="block w-full h-[32rem] aspect-w-16">
                                        <iframe
                                        className="m-x-auto overflow-hidden h-[32rem]"
                                        title="video player"
                                        src={watch?.headers?.Referer}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        mozallowfullscreen="true"
                                        webkitallowfullscreen="true"
                                        />
                                    </div>
                                    <a href={watch?.download} target="_blank" rel="noreferrer" className="bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                                        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                                        <span>Download</span>
                                    </a>
                                </div>
                                <ListEps name={info?.id} episodes={info?.episodes} />
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
