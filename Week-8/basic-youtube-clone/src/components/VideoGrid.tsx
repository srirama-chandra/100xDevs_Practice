import { timeStamp } from "console";
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

export function VideoGrid() {
  return (
    <div className="grid grid-cols-4 gap-4 pt-12">
      {VIDEOS.map((video) => (
        <div key={video.id}>
          <VideoComponent
            title={video.title}
            image={video.image}
            logo={video.logo}
            author={video.author}
            views={video.views}
            timeStamp={video.timeStamp}
          ></VideoComponent>
        </div>
      ))}
    </div>
  );
}
