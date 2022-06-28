import React from "react";
import Card from "./Card";
import '../index.css';
const Trending = () => {
    return ( 
        <div className="trending">
            <Card title="Trending Topics" image="https://picsum.photos/400/300?random=7"/>
            <div className="trending-list">
            <div className="trending-list-items">
            <div className="listname">
                <h3>Adavya</h3>
            </div>
            <div className="arrow">
                <h3>V</h3>
            </div>
            </div>
            <hr />
            </div>
        </div>
     );
}
 
export default Trending;