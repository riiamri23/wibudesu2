
import React, { useState, useEffect, useRef } from 'react';
// import MangaListing from '../../../components/MangaListing';
import Navbar from '../../../components/navbar/Index';
import { getMangaList } from '../../../services/MangaService';
import { Link } from "react-router-dom";

const MangaList = () => {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const timerId = useRef(null)

    const [data, setData] = useState([]);

    useEffect(()=>{
        const fetchMangaList = async ()=>{
            const response = await getMangaList({query});
            setData(response.results);
        }

        fetchMangaList();
    }, [query])
    const onSearch = (e) => {
        setLoading(true);
        if(timerId) clearTimeout(timerId.current)
        timerId.current = window.setTimeout(()=>{
            setQuery(e.target.value);
            setLoading(false);
        }, 500)
    }
    return (<>
        <Navbar />
        <div className="container m-auto">
            {/* List Manga */}
            {/* {data.length > 0 ? <>list manga</> : <>Loading..</>} */}
            {/* <MangaListing data={data} /> */}
            <div className="flex justify-center items-center p-6" id="mangasearch">
                <div className="flex bg-white p-4 w-96 space-x-4 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input className="bg-white outline-none w-full" type="text" placeholder="Search Manga on MangaKakalot" onChange={onSearch} />
                </div>
                <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
                    <span>All categorie</span>

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
            <div className="flex justify-center">

                <div className="basis-full">
                    <div className="z-50 space-y-8 rounded-3xl bg-white p-8">
                        {
                            loading || data.length < 1 ? 
                            <>
                                <p className="text-3xl font-bold text-gray-700 antialiased">Please Search Something</p>
                                <div className="flex justify-center">
                                    
                                    <img src="/assets/gif/sleepy.gif" alt="sleepy" />
                                </div> 
                            </>: 
                            <>
                                <p className="text-3xl font-bold text-gray-700 antialiased">Manga List</p>
                                <div className="grid xl:grid-cols-6 md:grid-cols-4 gap-2 sm:grid-cols-2">
                                    {data.map((value, index)=>{
                                        return (<Link key={index} to={`/manga/info/${value.id}`} style={{background:`url(${value.image}) no-repeat center center`,backgroundSize:`cover`}} className="flex aspect-[2/3] h-56 cursor-pointer flex-col rounded-3xl bg-cover transition hover:scale-105 hover:saturate-150 lg:h-72">
                                        <div className="grow p-4"></div>
                                        <div className="text-md w-full rounded-b-3xl bg-black/70 py-4 px-2 text-center font-medium text-white backdrop-opacity-50">
                                            <span className="line-clamp-2">{value.title}</span>
                                        </div>
                                    </Link>);
                                    })}
                                    
                                </div>
                            </>
                        }
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default MangaList;