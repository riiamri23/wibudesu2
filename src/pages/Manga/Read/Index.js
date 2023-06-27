
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Navbar from '../../../components/navbar/Index';
import { getMangaInfo, getMangaRead } from '../../../services/MangaService';
import {imageProxy, imageReferer} from '../../../constants/constants';
import { FaHamburger, FaWindowClose, FaHome, FaInfo, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const MangaRead = () => {
    const [data, setData] = useState();
    const [fixedMenu, setFixedMenu] = useState();
    const [nextManga, setNextManga] = useState();
    const [prevManga, setPrevManga] = useState();

    const search = useLocation().search;
    const id = new URLSearchParams(search).get('id');


    const handleToggle = () => {
        setFixedMenu(!fixedMenu);
    };

    useEffect(()=>{
        const fetchMangaRead = async () =>{
            setData([]);
            const response = await getMangaRead(id);
            setData(response);
        }

        const fetchMangaInfo = async () =>{
            const response = await getMangaInfo(id.split("/")[0]);

            response.chapters.forEach((val, index)=>{
                if(val.id === id){
                    setNextManga(response.chapters[index-1]);
                    setPrevManga(response.chapters[index+1]);
                }
            });
            // console.log(response);
        };

        fetchMangaRead();
        fetchMangaInfo();
        // fetchMangaImage();
    },[id]);

    return (<>
        <Navbar />
        {data ? (<>
            <div className="space-y-6 rounded-xl p-6 bg-white my-2">
                <span className="text-2xl font-bold ">Manga Read</span>
                <div className="flex flex-col">
                    <ul>
                    {data?.map((val, index)=>{
                        // const test = await fetchMangaImage();
                        // console.log(test);
                        return <li key={index}>
                            <img src={`${imageProxy}?url=${val.img}&referer=${imageReferer}`} alt={val?.id} />
                        </li>
                    })}
                    </ul>
                </div>
            </div>

            <div className="fixed z-20 bottom-0 flex m-4 mx-auto px-4">
                <button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full" onClick={handleToggle}>
                    <FaHamburger className={fixedMenu ? "hidden" : "text-white text-2xl cursor-pointer inline"}
                    />
                    <FaWindowClose className={!fixedMenu ? "hidden" : "text-white text-2xl cursor-pointer inline"}
                    />
                </button>
                <div className={!fixedMenu ? "hidden" : null}>
                    <Link to={`/manga`}>
                        <button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full">
                            <FaHome
                                className="text-white text-2xl cursor-pointer"
                            />
                        </button>
                    </Link>
                    <Link to={`/manga/info/${id.split("/")[0]}`}>
                        <button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full">
                            <FaInfo
                                className="text-white text-2xl cursor-pointer"
                            />
                        </button>
                    </Link>
                    {/* <button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full">
                        Chapter List
                    </button> */}
                    {prevManga ? 
                        <Link to={`/manga/read?id=${prevManga.id}`}>
                            <button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full">
                                <FaArrowLeft
                                    className="text-white text-2xl cursor-pointer"
                                />
                            </button>
                        </Link> : null}
                    {nextManga ?
                        <Link to={`/manga/read?id=${nextManga.id}`}>
                            <button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full">
                                <FaArrowRight
                                    className="text-white text-2xl cursor-pointer"
                                />
                            </button>
                        </Link> : null}
                </div>
            </div>
        </>) : <>Loading ..</>}
    </>);
}

export default MangaRead;