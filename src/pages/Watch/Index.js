import React, { useEffect, useState } from "react";

import { getAnimeWatch } from "../../services/AnimeService";
import { useParams } from "react-router-dom";

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
    return(<div className="container">
        {watch && (
            <>
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
    </div>);
}

export default Watch;
