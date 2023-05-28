import React, { useEffect, useState } from "react";
import { getAnimeInfo } from "../../../services/AnimeService";
import { Link, useParams } from "react-router-dom";
import Navbar from '../../../components/navbar/Index';
import InfoAnime from '../../../components/InfoAnime';


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
                info ? (
                    <>
                        <InfoAnime data={info} />
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
                ) : <>Loading..</>
            }
            
        </div>
    </>
    );
}

export default Info;
