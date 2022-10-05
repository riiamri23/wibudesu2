
import { Link } from "react-router-dom";

const LatestEpisodes = ({data}) =>{
    return (
        <div className="flex-row space-x-4 2xl:flex my-3">
            <div className="2xl:basis-9/12">
                <div className="z-50 space-y-8 rounded-3xl bg-white p-8">
                    <p className="text-3xl font-bold text-gray-700 antialiased">Latest Episodes</p>
                    <div className="grid xl:grid-cols-6 md:grid-cols-4 gap-2 sm:grid-cols-2">
                        {data.map((value, index)=>{
                            return (<Link key={index} to={`/watch/${value.episodeId}`} style={{background:`url(${value.image}) no-repeat center center`,backgroundSize:`cover`}} className="flex aspect-[2/3] h-56 cursor-pointer flex-col rounded-3xl bg-cover transition hover:scale-105 hover:saturate-150 lg:h-72">
                            <div className="grow p-4">
                                <div className="w-min rounded-full bg-indigo-500 py-1 px-5 text-white">ep.{value.episodeNumber}</div>
                            </div>
                            <div className="text-md w-full rounded-b-3xl bg-black/70 py-4 px-2 text-center font-medium text-white backdrop-opacity-50">
                                <span className="line-clamp-2">{value.title}</span>
                            </div>
                        </Link>);
                        })}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LatestEpisodes;