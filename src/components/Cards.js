import React from "react";
import Card from "./Card";
import "../index.css";
const Cards = () => {
    return (
        <div className="cards">
            <Card title="AI" image="https://picsum.photos/400/300?random=1"/>
            <Card title="Cyber sec" image="https://picsum.photos/400/300?random=2"/>
            <Card title="PC Setup" image="https://picsum.photos/400/300?random=3"/>
            <Card title="Lifestyle" image="https://picsum.photos/400/300?random=4"/>
        </div>
     );
}
 
export default Cards;