import VideoCard from "./VideoCard";

function Videosec({ mobile }) {
        const videos = Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        title: `Video Title ${i + 1}`,
        description: `This is a description for video ${i + 1}. It provides a brief overview of the content.`,
    }));

  return (
    <div className="w-full h-full overflow-y-auto no-scrollbar">
      <div className={`grid grid-cols-1 ${mobile ? 'md:grid-cols-1' : 'md:grid-cols-3'} gap-6`}>
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}

export default Videosec;