import React from 'react';
import { Link } from "react-router-dom";

const LatestEpisodes = ({data, paging, setPaging}) =>{
    const pagingNumber = 5;
    return (
        <div className="flex-row space-x-4 flex my-3">
            <div className="basis-full">
                <div className="z-50 space-y-8 rounded-3xl bg-white p-8">
                    <p className="text-3xl font-bold text-gray-700 antialiased">Latest Episodes</p>
                    <div className="grid xl:grid-cols-4 md:grid-cols-3 gap-2 sm:grid-cols-2 grid-cols-2">
                        {data.map((value, index)=>
                            (<Link key={index} to={`/infonew/${value?.id}_${value?.episodeNumber}`} style={{backgroundImage:`url(${value?.image})`,backgroundRepeat: 'no-repeat',backgroundPosition: 'center center', backgroundSize:`cover`}} className="flex aspect-[2/3] h-56 cursor-pointer flex-col rounded-3xl bg-cover transition hover:scale-105 hover:saturate-150 lg:h-72">
                                <div className="grow p-4">
                                    <div className="w-min rounded-full bg-indigo-500 py-1 px-5 text-white">ep.{value.episodeNumber}</div>
                                </div>
                                <div className="text-md w-full rounded-b-3xl bg-black/70 py-4 px-2 text-center font-medium text-white backdrop-opacity-50">
                                    <span className="line-clamp-2">{value?.title}</span>
                                </div>
                            </Link>)
                        )}  
                    </div>
                    {/* pagging */}
                    <div className="flex justify-center text-gray-700">
                        {
                            paging?.currentPage < 2 ? <></> : <div className="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left w-6 h-6">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                            </div>
                        }
                        
                        <div className="flex h-12 font-medium rounded-full bg-gray-200">
                            {
                                [...Array(pagingNumber)].map((v, i) => {
                                    const n = i+1;
                                    return (<div key={i} className={"w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full "+ (n === parseInt(paging.currentPage) ? "bg-teal-600 text-white" : "")} onClick={()=>{setPaging({currentPage:n})}}>{n}</div>);
                                })
                            }
                            
                            <div className={"w-12 h-12 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full "+ (true ? "bg-teal-600 text-white" : "")}>1</div>
                        </div>
                        <div className="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right w-6 h-6">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LatestEpisodes;