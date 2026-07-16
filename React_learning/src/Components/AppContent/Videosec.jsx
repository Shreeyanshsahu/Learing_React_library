import VideoCard from "./VideoCard";

function Videosec({ mobile }) {
        const videos = [
  {
    id: 1,
    thumbnailUrl: "https://picsum.photos/640/360?random=1",
    channelThumbnailUrl: "https://i.pravatar.cc/150?img=1",
    title: "React Crash Course",
    channelName: "CodeCraft",
    views: "1.2M",
    likes: "48K",
  },
  {
    id: 2,
    thumbnailUrl: "https://picsum.photos/640/360?random=2",
    channelThumbnailUrl: "https://i.pravatar.cc/150?img=2",
    title: "Mastering Node.js",
    channelName: "Backend Hub",
    views: "824K",
    likes: "31K",
  },
  {
    id: 3,
    thumbnailUrl: "https://picsum.photos/640/360?random=3",
    channelThumbnailUrl: "https://i.pravatar.cc/150?img=3",
    title: "Learn MongoDB",
    channelName: "DB Academy",
    views: "563K",
    likes: "18K",
  },
  {
    id: 4,
    thumbnailUrl: "https://picsum.photos/640/360?random=4",
    channelThumbnailUrl: "https://i.pravatar.cc/150?img=4",
    title: "Tailwind CSS in 30 Minutes",
    channelName: "UI Wizards",
    views: "2.3M",
    likes: "97K",
  },
  {
    id: 5,
    thumbnailUrl: "https://picsum.photos/640/360?random=5",
    channelThumbnailUrl: "https://i.pravatar.cc/150?img=5",
    title: "JavaScript Interview Questions",
    channelName: "Dev Talks",
    views: "1.7M",
    likes: "72K",
  },
  {
    id: 6,
    thumbnailUrl: "https://picsum.photos/640/360?random=6",
    channelThumbnailUrl: "https://i.pravatar.cc/150?img=6",
    title: "System Design Basics",
    channelName: "Tech Explained",
    views: "910K",
    likes: "40K",
  },
  {
    id: 7,
    thumbnailUrl: "https://picsum.photos/640/360?random=7",
    channelThumbnailUrl: "https://i.pravatar.cc/150?img=7",
    title: "C++ STL Complete Guide",
    channelName: "Algo Master",
    views: "688K",
    likes: "24K",
  },
  {
    id: 8,
    thumbnailUrl: "https://picsum.photos/640/360?random=8",
    channelThumbnailUrl: "https://i.pravatar.cc/150?img=8",
    title: "Build a MERN Project",
    channelName: "Full Stack Pro",
    views: "3.5M",
    likes: "150K",
  },
  {
    id: 9,
    thumbnailUrl: "https://picsum.photos/640/360?random=9",
    channelThumbnailUrl: "https://i.pravatar.cc/150?img=9",
    title: "AI for Beginners",
    channelName: "AI Labs",
    views: "1.1M",
    likes: "53K",
  },{
    id: 8,
    thumbnailUrl: "https://picsum.photos/640/360?random=8",
    channelThumbnailUrl: "https://i.pravatar.cc/150?img=8",
    title: "Build a MERN Project",
    channelName: "Full Stack Pro",
    views: "3.5M",
    likes: "150K",
  },
  {
    id: 6,
    thumbnailUrl: "https://picsum.photos/640/360?random=6",
    channelThumbnailUrl: "https://i.pravatar.cc/150?img=6",
    title: "System Design Basics",
    channelName: "Tech Explained",
    views: "910K",
    likes: "40K",
  },{
    id: 2,
    thumbnailUrl: "https://picsum.photos/640/360?random=2",
    channelThumbnailUrl: "https://i.pravatar.cc/150?img=2",
    title: "Mastering Node.js",
    channelName: "Backend Hub",
    views: "824K",
    likes: "31K",
  },
];

  return (
    <div className="w-full h-full overflow-y-auto no-scrollbar">
      <div className={`grid grid-cols-1 ${mobile ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3 '} gap-6`}>
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}

export default Videosec;