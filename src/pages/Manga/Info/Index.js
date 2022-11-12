import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import Navbar from '../../../components/navbar/Index';
// import InfoAnime from '../../../components/InfoAnime';
import { getMangaInfo } from "../../../services/MangaService";

const ListChap = ({chapters})=>(
    <div className="flex flex-col">
        <ul>
            {
                chapters.map((val, index)=><li className="flex"><Link key={index} to={`/manga/read?id=${val.id}`}>{val.title}</Link></li>)
            }
        </ul>
    </div>
);

const MangaInfo = () => {
    const [data, setData] = useState();
    const params = useParams();

    useEffect(()=>{
        const fetchMangaInfo = async () =>{
            const response = await getMangaInfo(params.id);
            console.log(response);
            setData(response);
        };

        fetchMangaInfo();
    }, [params]);

    return (
        <>
        {
            data ? (
                <>
                    <div className="space-y-6 rounded-xl p-6 bg-white my-2">
                        <span className="text-2xl font-bold ">Manga Info</span>
                        <div className="flex flex-col">
                            <div className="flex flex-row space-x-6">
                                <img className="w-32 rounded-xl object-contain shadow-xl" src={data?.image} alt={data?.id} />
                                <div className="flex flex-col space-y-4">
                                    <span className="text-xl font-semibold ">{data?.title}</span>
                                    <span className="">{data?.description}</span>
                                    <div className="flex flex-row space-x-16">
                                        <div className="flex flex-col">
                                            <span className="">Episode Count: {data?.totalEpisodes}</span>
                                            <span className="">Launch Date: {data?.releaseDate}</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="">Status : {data?.status}</span>
                                            <span className="">Type : {data?.type}</span>
                                        </div>
                                    </div>
                                    {/* <Genre genres={data?.genres} /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6 rounded-xl p-6 bg-white my-2">
                        <span className="text-2xl font-bold ">Chapter List</span>
                        <ListChap chapters={data?.chapters} />
                    </div>
                </>
            ) : <>Loading..</>
        }
        </>);
}

export default MangaInfo;