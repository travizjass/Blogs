import React from "react";
import '../index.css';
const Recent = () => {
    return ( 
        <div className="recent">
           <h2>Recent Posts</h2>
           <div className="recent-post">
               <div className="recent-img">
                <img src="https://picsum.photos/400/300?random=8" />
               </div>
               <div className="recent-content">
                   <div className="recent-title">
                       <h3>Reddit Styled Website</h3>
                   </div>
                   <div className="recent-likes">
                       70 likes | 30 shares
                   </div>
               </div>
           </div>
           <hr />
        </div>
     );
}
 
export default Recent;