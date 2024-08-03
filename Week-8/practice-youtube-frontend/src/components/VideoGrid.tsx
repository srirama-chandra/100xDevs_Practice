import { VideoComponent } from "./VideoComponent";

const VIDEOS = [
    {
      id:1,
      title: "I Coded Wazrix In 6 Hours",
      image: "photo.png",
      logo: "logo.jpg",
      author: "Harkirat Singh",
      views: "13 Mn",
      timeStamp: "13 Days ago",
    },
    {
      id:2,
      title: "I Coded Wazrix In 6 Hours",
      image: "photo.png",
      logo: "logo.jpg",
      author: "Harkirat Singh",
      views: "13 Mn",
      timeStamp: "13 Days ago",
    },
    {
      id:3,
      title: "I Coded Wazrix In 6 Hours",
      image: "photo.png",
      logo: "logo.jpg",
      author: "Harkirat Singh",
      views: "13 Mn",
      timeStamp: "13 Days ago",
    },
    {
      id:4,
      title: "I Coded Wazrix In 6 Hours",
      image: "photo.png",
      logo: "logo.jpg",
      author: "Harkirat Singh",
      views: "13 Mn",
      timeStamp: "13 Days ago",
    },
    {
      id:5,
      title: "I Coded Wazrix In 6 Hours",
      image: "photo.png",
      logo: "logo.jpg",
      author: "Harkirat Singh",
      views: "13 Mn",
      timeStamp: "13 Days ago",
    },
    {
      id:6,
      title: "I Coded Wazrix In 6 Hours",
      image: "photo.png",
      logo: "logo.jpg",
      author: "Harkirat Singh",
      views: "13 Mn",
      timeStamp: "13 Days ago",
    },
    {
      id:7,
      title: "I Coded Wazrix In 6 Hours",
      image: "photo.png",
      logo: "logo.jpg",
      author: "Harkirat Singh",
      views: "13 Mn",
      timeStamp: "13 Days ago",
    },
  ];

export const VideoGrid = () => {

    return (

        <div className="grid grid-cols-4 pt-10 gap-3 pl-2 pr-2">

            {
                VIDEOS.map(video => <VideoComponent key={video.id} title={video.title} image={video.image} author={video.author} logo={video.logo} views={video.views} timeStamp={video.timeStamp} />
            )}

        </div>
    )
}