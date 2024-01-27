
import { Link } from "react-router-dom";

const WDListEps = ({name,episodes})=>(<div className="w-full md:w-1/4 max-h-[18rem] lg:max-h-[35rem] md:max-h-[20rem] overflow-y-auto p-2" >
    <div className="min-h-fit grid grid-cols-4 gap-2 grid-rows-12">
        {
            episodes.reverse().map((value)=>( <Link key={value?.number} to={`/infonew/${name}_${value?.number}`} className="block w-full cursor-pointer rounded-xl bg-teal-500 p-1 my-1 text-center font-semibold text-white transition hover:scale-105 hover:bg-teal-600 h-fit">{`${value?.number}`}</Link>))
        }
    </div>
</div>);


export default WDListEps;