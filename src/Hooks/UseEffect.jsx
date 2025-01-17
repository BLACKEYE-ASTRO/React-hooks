import { useEffect, useState } from "react";
import DataCard from "../components/DataCard";

export const UseEffect = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then((res) => res.json()).then((json) => setData(json));
    }, []);
    return (
    <div>
        <h1 className="bg-blue-300 text-2xl text-center font-semibold py-2">useEffect hook</h1>
        {data.map((item)=><DataCard key={item.id} item={item}/>)}
    </div>

    
    )
};