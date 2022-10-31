import React, { useEffect, useState } from "react";

import { getAnimeInfo, getAnimeWatch } from "../../../services/AnimeService";
import { Link, useParams } from "react-router-dom";
import Navbar from '../../../components/navbar/Index';


const ListEps = ({episodes})=>(<div className="grid grid-cols-6 items-end gap-y-4 sm:grid-cols-10 md:grid-cols-7 lg:grid-cols-10 xl:grid-cols-12 2xl:grid-cols-10 3xlc:grid-cols-12 react-tabs__tab-panel--selected" role="tabpanel" id="react-tabs-3" aria-labelledby="react-tabs-2">
        {
            episodes.map((value)=>( <Link key={value.number} to={`/watch/${value.id}`} className="w-12 cursor-pointer rounded-xl bg-teal-500 p-1 text-center font-semibold text-white transition hover:scale-105 hover:bg-teal-600">{value.number}</Link>))
        }
    </div>);

const Watch = () => {
    const [watch, setWatch] = useState();
    const [info, setInfo] = useState();
    const params = useParams();
    // const ref = useRef(null);

    useEffect(()=>{
        const fetchAnimeWatch = async () =>{
            const response = await getAnimeWatch(params.name);
            // console.log(response);
            setWatch(response);
        }
        const fetchAnimeInfo = async () =>{
            const response = await getAnimeInfo(params.name.split("-episode")[0]);
            console.log(response);
            setInfo(response);
        }
        fetchAnimeWatch();
        fetchAnimeInfo();
    }, [params]);
    return(
    <>
        <Navbar />
        <div className="container m-auto">
            {watch && info && (
                <>
                    <div className="py-6 md:px-6">
                        <div className="flex-row items-center space-x-8 rounded-xl bg-indigo-500 px-8 py-5 text-white">
                            <div className="flex flex-col space-y-1">
                                <div className="text-md font-semibold antialiased line-clamp-2 xl:text-2xl">{info.title}</div>
                                <div className="hidden text-sm text-gray-100 xl:inline-flex">{info.otherName}</div>
                            </div>
                            {/* <div className="flex h-min cursor-pointer flex-row items-center self-center rounded-xl bg-teal-500 px-6 py-2 text-lg text-white shadow-xl shadow-teal-400/30 transition hover:-translate-y-1 hover:brightness-90">
                                <svg stroke="currentColor" fill="white" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="xl:mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg> 
                                <span className="hidden xl:inline-flex">Save</span>
                            </div> */}
                        </div>
                    </div>
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
                    <div id="link-download">
                        
                    </div>
                    <div className="react-tabs mt-4" data-rttabs="true">
                        {/* <ul className="mb-8 grid grid-cols-3 items-end gap-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-4 3xlc:grid-cols-6" role="tablist">
                            <li className="w-28 cursor-pointer rounded-full bg-indigo-500 py-1 px-3 text-center font-semibold text-white shadow-md shadow-indigo-200 transition-all hover:bg-indigo-600 react-tabs__tab--selected" role="tab" id="react-tabs-2" aria-selected="true" aria-disabled="false" aria-controls="react-tabs-3" tabindex="0" data-rttab="true">1 - 28</li>
                        </ul> */}

                        <ListEps episodes={info?.episodes} />
                    </div>
                </>
            )}
        </div>
    </>);
}

export default Watch;
