
import { useEffect, useState } from "react";
import axios from "axios";

const CustomerDashbord = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?q=iphone&type=video&key=AIzaSyBMJzk7z__1wX4gqQ_ySOM8laZfYxs2Jmo&maxResults=20`);
            setPosts(res.data.items);
        };
        fetchPosts();
    }, []);

             
    return (
        <div className="main-container">
          
              {
                  posts.map((e) => (
                    <div>               
                      <iframe src={"http://www.youtube.com/embed/" + e.id.videoId} title={e.id.videoId} frameBorder="0" allowFullScreen></iframe>
                      </div>             
                  ))

              }

        </div>
    )
}

export default CustomerDashbord