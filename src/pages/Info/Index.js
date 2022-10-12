import React, { useEffect, useState } from "react";
import { getAnimeInfo } from "../../services/AnimeService";
import { Link, useParams } from "react-router-dom";
import Navbar from '../../components/navbar/Index';


const Genre = ({genres}) =>(<span className="info-genre">{genres.map((value, index)=>(<span key={index} className="m-1 p-2 bg-yellow-500 text-white rounded-full shadow-md cursor-pointer">{value}</span>))}</span> );
const ListEps = ({episodes})=>(<div className="grid grid-cols-6 items-end gap-y-4 sm:grid-cols-10 md:grid-cols-7 lg:grid-cols-10 xl:grid-cols-12 2xl:grid-cols-10 3xlc:grid-cols-12 react-tabs__tab-panel--selected" role="tabpanel" id="react-tabs-3" aria-labelledby="react-tabs-2">
        {
            episodes.map((value)=>( <Link key={value.number} to={`/watch/${value.id}`} className="w-12 cursor-pointer rounded-xl bg-teal-500 p-1 text-center font-semibold text-white transition hover:scale-105 hover:bg-teal-600">{value.number}</Link>))
        }
    </div>);

const Info = () => {
    const [info, setInfo] = useState();
    const params = useParams();

    useEffect(()=>{
        const fetchAnimeInfo = async () =>{
            const response = await getAnimeInfo(params.name);
            setInfo(response);
        }
        fetchAnimeInfo();
    }, [params]);
    return(
    
    <>
        <Navbar />
        <div className="container m-auto">
            {
                info && (
                    <>
                        <div className="space-y-6 rounded-xl p-6 bg-white my-2">
                            <span className="text-2xl font-bold ">Anime Info</span>
                            <div className="flex flex-col">
                                <div className="flex flex-row space-x-6">
                                    <img className="w-32 rounded-xl object-contain shadow-xl" src={info?.image} alt={info?.id} />
                                    <div className="flex flex-col space-y-4">
                                        <span className="text-xl font-semibold ">{info?.title}</span>
                                        <span className="">{info?.description}</span>
                                        <div className="flex flex-row space-x-16">
                                            <div className="flex flex-col">
                                                <span className="">Episode Count: {info?.totalEpisodes}</span>
                                                <span className="">Launch Date: {info?.releaseDate}</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="">Status : {info?.status}</span>
                                                <span className="">Type : {info?.type}</span>
                                            </div>
                                        </div>
                                        <Genre genres={info?.genres} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8 rounded-xl bg-white p-5 my-2">
                            <div className="my-4 bg-gradient-to-r from-indigo-300 via-indigo-600 to-indigo-600 bg-clip-text text-2xl font-semibold text-transparent">
                                <span className="rounded-xl border-2 border-indigo-200 p-2">Episodes</span>
                            </div>
                            <div className="react-tabs" data-rttabs="true">
                                {/* <ul className="mb-8 grid grid-cols-3 items-end gap-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-4 3xlc:grid-cols-6" role="tablist">
                                    <li className="w-28 cursor-pointer rounded-full bg-indigo-500 py-1 px-3 text-center font-semibold text-white shadow-md shadow-indigo-200 transition-all hover:bg-indigo-600 react-tabs__tab--selected" role="tab" id="react-tabs-2" aria-selected="true" aria-disabled="false" aria-controls="react-tabs-3" tabindex="0" data-rttab="true">1 - 28</li>
                                </ul> */}

                                <ListEps episodes={info?.episodes} />
                            </div>
                        </div>
                    </>
                )
            }
            
        </div>
    </>
    );
}

export default Info;
