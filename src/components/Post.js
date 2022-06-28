import React from "react";
import '../index.css';
const Post = () => {
    return ( 
        <div className="post">
           <div className="postinfo">
           <div className="postdate">Feb 12, 2022</div>
           <div className="posttitle">
               The only time a lawyer can cry, is when it's all over
           </div>     
           <div className="postcontent">
           "It is impossible to predict what the future has in store for any of us. This is precisely why people feel the need to judje the post."
           </div>
           </div>
           <div className="postpic">
               <img src="https://picsum.photos/400/300?random=6" className="postimage"/>
           </div>
        </div>
     );
}
 
export default Post;