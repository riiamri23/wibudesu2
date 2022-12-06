
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getLightNovelInfo } from "../../../services/LightNovelService";
const LightNovelInfo = () => {

    const [data, setData] = useState();
    const params = useParams();


    useEffect(()=>{
        const fetchLightNovelInfo = async () => {
            const response = await getLightNovelInfo(params.id);

            setData(response);
        }

        fetchLightNovelInfo()
    });

    return (<>hello
        </>);
}

export default LightNovelInfo;