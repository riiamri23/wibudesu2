import React, { useEffect, useState } from "react";
import { getAnimeInfo, getAnimeWatch } from "../../../services/AnimeService";
import { Link, useParams } from "react-router-dom";
import Navbar from '../../../components/navbar/Index';
import InfoAnime from '../../../components/InfoAnime';


const ListEps = ({episodes})=>(<div className="grid grid-cols-6 items-end gap-y-4 sm:grid-cols-10 md:grid-cols-7 lg:grid-cols-10 xl:grid-cols-12 2xl:grid-cols-10 3xlc:grid-cols-12 react-tabs__tab-panel--selected" role="tabpanel" id="react-tabs-3" aria-labelledby="react-tabs-2">
        {
            episodes.map((value)=>( <Link key={value.number} to={`/watch/${value.id}`} className="w-12 cursor-pointer rounded-xl bg-teal-500 p-1 text-center font-semibold text-white transition hover:scale-105 hover:bg-teal-600">{value.number}</Link>))
        }
    </div>);

const InfoNew = () => {
    const [watch, setWatch] = useState();
    const [info, setInfo] = useState();
    const params = useParams();

    useEffect(()=>{
        const fetchInfoAndWatch = async () =>{
            const responseInfo = await getAnimeInfo(params.name);
            console.log(responseInfo);

            const newestEps = responseInfo.episodes[responseInfo.episodes.length-1].id;
            const responseWatch = await getAnimeWatch(newestEps);
            console.log(responseWatch);
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
                            <div className="">
                                <div id="video-player" className="flex w-full aspect-w-16 aspect-h-9">
                                    <iframe
                                    className="m-auto"
                                    title="video player"
                                    src={watch.headers.Referer}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    mozallowfullscreen="true"
                                    webkitallowfullscreen="true"
                                    />
                                </div>
                                <div className="react-tabs mt-4" data-rttabs="true">
                                    {/* <ul className="mb-8 grid grid-cols-3 items-end gap-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-4 3xlc:grid-cols-6" role="tablist">
                                        <li className="w-28 cursor-pointer rounded-full bg-indigo-500 py-1 px-3 text-center font-semibold text-white shadow-md shadow-indigo-200 transition-all hover:bg-indigo-600 react-tabs__tab--selected" role="tab" id="react-tabs-2" aria-selected="true" aria-disabled="false" aria-controls="react-tabs-3" tabindex="0" data-rttab="true">1 - 28</li>
                                    </ul> */}

                                    <ListEps episodes={info?.episodes} />
                                </div>

                            </div>
                            
                        </div>

                        <InfoAnime data={info} />
                        {/* <div className="space-y-8 rounded-xl bg-white p-5 my-2">
                            <div className="my-4 bg-gradient-to-r from-indigo-300 via-indigo-600 to-indigo-600 bg-clip-text text-2xl font-semibold text-transparent">
                                <span className="rounded-xl border-2 border-indigo-200 p-2">Episodes</span>
                            </div>
                            <div className="react-tabs" data-rttabs="true">

                                <ListEps episodes={info?.episodes} />
                            </div>
                        </div> */}
                    </>
                ) : <>Loading..</>
            }
            
        </div>
    </>
    );
}

export default InfoNew;
