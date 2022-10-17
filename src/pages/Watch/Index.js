import React, { useEffect, useState } from "react";

import { getAnimeWatch } from "../../services/AnimeService";
import { useParams } from "react-router-dom";
import Navbar from '../../components/navbar/Index';

const Watch = () => {
    const [watch, setWatch] = useState();
    const params = useParams();
    // const ref = useRef(null);

    useEffect(()=>{
        const fetchAnimeWatch = async () =>{
            const response = await getAnimeWatch(params.name);
            console.log(response);
            setWatch(response);
        }
        fetchAnimeWatch();
    }, [params]);
    return(
    <>
        <Navbar />
        <div className="container m-auto">
            {watch && (
                <>
                    <div className="py-6 md:px-6">
                        <div className="inline-flex flex-row items-center space-x-8 rounded-xl bg-indigo-500 px-8 py-5 text-white">
                            <div className="flex flex-col space-y-1">
                                <div className="text-md font-semibold antialiased line-clamp-2 xl:text-2xl">Yojouhan Time Machine Blues</div>
                                <div className="hidden text-sm text-gray-100 xl:inline-flex">四畳半タイムマシンブルース</div>
                            </div>
                            {/* <div className="flex h-min cursor-pointer flex-row items-center self-center rounded-xl bg-teal-500 px-6 py-2 text-lg text-white shadow-xl shadow-teal-400/30 transition hover:-translate-y-1 hover:brightness-90">
                                <svg stroke="currentColor" fill="white" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="xl:mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg> 
                                <span className="hidden xl:inline-flex">Save</span>
                            </div> */}
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div id="video-player" className="w-full max-w-3xl">
                            <iframe
                            title="video player"
                            width={1024}
                            height={576}
                            src={watch.headers.Referer}
                            frameBorder="0"
                            allowFullScreen
                            mozallowfullscreen="true"
                            webkitallowfullscreen="true"
                            ></iframe>
                        </div>
                    </div>
                </>
            )}
        </div>
    </>);
}

export default Watch;
