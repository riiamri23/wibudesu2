import WDListEps from "./WDListEps";

const WDWatchPlayer = ({currentEps, info, watch}) =>{
    return (
        <div className="space-y-8 rounded-xl bg-white p-5 my-2">
            <div>{`${info?.title} - Eps ${currentEps}`}</div>
            <div className="md:flex space-x-4">
                <div className="w-full h-[18rem] lg:h-[35rem] md:h-[20rem] bg-[#111]">
                    <div id="video-player" className="w-full h-full flex items-center justify-center">
                        <iframe
                        className="m-x-auto overflow-hidden w-full h-full"
                        title="video player"
                        src={watch?.headers?.Referer}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        mozallowfullscreen="true"
                        webkitallowfullscreen="true"
                        />
                    </div>
                </div>
                <WDListEps name={info?.id} episodes={info?.episodes} />
            </div>

            <a href={watch?.download} target="_blank" rel="noreferrer" className="bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded inline-flex">
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <span>Download</span>
            </a>
        </div>
    );
}

export default WDWatchPlayer;