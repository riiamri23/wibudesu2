import React, { useEffect, useState } from "react";
import { getAnimeInfo } from "../../services/AnimeService";
import { Link, useParams } from "react-router-dom";

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
    return(<div className="container">
        {
            info && (
                <>
                    <div className="flex w-full">
                        <div className="p-4"><img src={info?.image} alt={info?.id} /></div>
                        <div className="p-4">
                            <h2>{info?.title}</h2>
                            <span>{info?.otherName}</span>
                            <span className="info-content block">
                                <span>Status : {info?.status}</span>
                                <span>Released : {info?.releaseDate}</span>
                                <span>type : {info?.type}</span>
                                <span>total Episodes : {info?.totalEpisodes}</span>
                                <span>description : {info?.description}</span>
                            </span>
                            <Genre genres={info?.genres} />
                        </div>
                    </div>
                    <ListEps episodes={info?.episodes} />
                </>
            )
        }
        
    </div>);
}

const Genre = ({genres}) =>(<span className="info-genre">{genres.map((value, index)=>(<span key={index}>{value}</span>))}</span> );
const ListEps = ({episodes})=>(<div className="info-eps flex justify-center">
    <ul className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
        {
            episodes.map((value)=>(<li key={value.number} className="px-6 py-2 border-b border-gray-200 w-full"><Link to={`/watch/${value.id}`}>{value.id}</Link></li>))
        }
    </ul>
</div>);

export default Info;
