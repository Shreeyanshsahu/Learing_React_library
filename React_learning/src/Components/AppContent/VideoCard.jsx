function VideoCard({video}) {
    return (
        <div className={`flex flex-col
         items-center gap-3 
         backdrop-blur-2xl 
         backdrop:brightness-115  border-white/10'
         py-2 px-2 border
          border-white/20
          shadow-lg shadow-black/20
          hover:bg-white/10
          transition-all duration-300 ease-in-out
          hover:scale-105
          rounded-xl
          active:scale-95`
          }>   
            <div className="relative flex flex-col w-full">
                <img
                    src={`${video.thumbnailUrl}`}
                    alt={`Video ${video.id}`}
                    className="w-full h-48 object-cover rounded-xl"
                />
            </div>
            <div className="px-1 flex items-center justify-start  w-full">
                <img src={`${video.channelThumbnailUrl}`} alt={`Channel thumbnail for video ${video.id}`} className="w-12 h-12 object-cover rounded-full" />
                <div className=" bg-transparent bg-opacity-50 p-2 flex flex-col gap-1 justify-start items-start align-baseline">
                    <h3 className="text-white text-xl font-semibold">{video.title}</h3>
                    <div className="text-gray-500 flex items-center justify-start  w-full text-xs font-light ">
                        <div>{`Channel-Name: ${video.channelName}`}</div>
                    </div>
                    <div className="text-gray-500 flex items-center justify-start gap-2  w-full text-xs font-light ">
                        <div>{`views: ${video.views}`}</div>
                        <div>{`likes: ${video.likes}`}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;