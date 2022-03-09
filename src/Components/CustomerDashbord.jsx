import { useState, useEffect } from "react";
import axios from "axios";

const CustomerDashbord = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(`https://quizmastertesting.motion.ac.in/motioneducation/api/user/videoURL`);
            setPosts(res.data.data.videoURL);
            setIsLoading(false);
        };
        fetchPosts();
    }, []);

    console.log(posts);
//
    return (
        <>
        {
            
        isLoading ? (
				<h3>Loading ...</h3>
			) : (

            <div className="main-container">

                {
                    posts.map((e) => (
                        <div>
                            {}
                            <iframe src={"http://www.youtube.com/embed/" + e.youtube_id} title={e.youtube_id} frameBorder="0" allowFullScreen></iframe>
                            
                        </div>
                    ))

                }

            </div>
            )}
        </>
    )
}

export default CustomerDashbord