

const Genre = ({genres}) =>(<span className="info-genre">{genres.map((value, index)=>(<span key={index} className="m-1 p-2 bg-yellow-500 text-white rounded-full shadow-md cursor-pointer">{value}</span>))}</span> );

const InfoAnime = ({data}) =>{
    return (
        <div className="space-y-6 rounded-xl p-6 bg-white my-2">
            <span className="text-2xl font-bold ">Anime Info</span>
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
                        <Genre genres={data?.genres} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoAnime;