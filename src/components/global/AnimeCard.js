
import { Link } from "react-router-dom";

export function AnimeCard({index, value}) {
    return <Link key={index} to={`/infonew/${value?.id}_${value?.episodeNumber}`} style={{ backgroundImage: `url(${value?.image})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: `cover` }} className="flex aspect-[2/3] h-56 cursor-pointer flex-col rounded-3xl bg-cover transition hover:scale-105 hover:saturate-150 lg:h-72">
        <div className="grow p-4">
            <div className="w-min rounded-full bg-indigo-500 py-1 px-5 text-white">ep.{value.episodeNumber}</div>
        </div>
        <div className="text-md w-full rounded-b-3xl bg-black/70 py-4 px-2 text-center font-medium text-white backdrop-opacity-50">
            <span className="line-clamp-2">{value?.title}</span>
        </div>
    </Link>;
}