function VideoCard({video}) {
    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">   
            <div className="relative">
                <img
                    src={`https://picsum.photos/seed/${video.id}/400/200`}
                    alt={`Video ${video.id}`}
                    className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
                    <h3 className="text-white text-lg font-semibold">Video Title {video.id}</h3>
                </div>
            </div>
            <div className="p-4">
                <p className="text-gray-300 text-sm">This is a description for video {video.id}. It provides a brief overview of the content.</p>
            </div>
        </div>
    );
}

export default VideoCard;