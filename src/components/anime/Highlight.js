import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Highlight = ({data}) =>{
    // console.log(data[0].image);
    const [index, setIndex] = useState(0);
    const [inext, setInext] = useState(index+1);
    const [inext2, setInext2] = useState(index+2);
    // const [currentAnime, setCurrentAnime] = useState(data[index]);


    useEffect(()=>{
        const timer = setTimeout(()=>{
            const curr = index === data.length - 1 ? 0 : index+1;
            setIndex(curr);
            setInext(curr+1 >= data.length - 1 ? 0 : curr+1);
            setInext2(curr+2 >= data.length - 1 ? 0 : curr+2);
        }, 5000);
        return () => clearTimeout(timer);
    }, [data.length, index]);
    
    return (
        <div style={{boxShadow: "black 0px 0px 13em 3em inset", backgroundImage: `url(${data[index].image})`}} className="flex h-80 w-full flex-row items-end rounded-3xl bg-cover bg-center transition-all duration-500 ease-in-out md:h-72 lg:h-80 my-4">
            <div className="space-y-6 p-12">
                <p className="text-3xl font-bold text-white antialiased drop-shadow-2xl lg:text-4xl">{data[index].title}</p>
                <Link to={`/infonew/${data[index]?.id}`} className="flex w-min cursor-pointer flex-row items-center space-x-2 rounded-full bg-teal-400 px-6 py-2 text-lg font-semibold text-white shadow-lg shadow-teal-500 transition hover:scale-105 hover:bg-teal-500 hover:shadow-teal-600">
                    <span>Watch</span>
                    <svg stroke="currentColor" fill="white" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </Link>
            </div>
            <div className="ml-auto inline-flex space-x-4 py-12 pr-6 md:hidden">
                <div className="cursor-pointer rounded-full bg-white p-2 shadow-xl shadow-indigo-200 transition hover:bg-gray-200">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-800" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                </div>
                <div className="cursor-pointer rounded-full bg-white p-2 shadow-xl shadow-indigo-200 transition hover:bg-gray-200">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-800" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
            </div>
            <div className="ml-auto py-12 xl:inline-flex hidden md:block">
                <div className="flex flex-row items-center space-x-6 rounded-l-3xl bg-white/30 p-5 backdrop-blur-xl backdrop-brightness-150 transition-all">
                    <Link to={`/info/${data[inext].id}`}><img className="aspect-[16/9] w-32 animate-pulse cursor-pointer rounded-xl object-cover transition hover:scale-105" src={data[inext].image} alt={data[inext].id} /></Link>
                    <Link to={`/info/${data[inext2].id}`}><img className="aspect-[16/9] w-32 cursor-pointer rounded-xl object-cover transition hover:scale-105" src={data[inext2].image} alt={data[inext2].id} /></Link>
                    <div className="cursor-pointer rounded-full bg-white p-2 shadow-xl shadow-indigo-200 transition hover:bg-gray-200" onClick={(e)=>{
                        const curr = index === data.length - 1 ? 0 : index+1;
                        setIndex(curr);
                        setInext(curr+1 >= data.length - 1 ? 0 : curr+1);
                        setInext2(curr+2 >= data.length - 1 ? 0 : curr+2);
                    }}>
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-800" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Highlight;