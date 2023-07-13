import React, { useEffect, useState } from "react";
import axios from 'axios'
import NewsAllData from "../NewsAllData/NewsAllData";

const NewsData = () => {
    const [newsData, setNewsData]=useState([]);

    useEffect(()=>{
        axios.get(" https://api-creator-server.vercel.app/news-data")
        .then(function(res){
            setNewsData(res.data)
        })
    },[])

    console.log(newsData);
    return(
        <div className="py-8 lg:py-20">
            <h1 className="text-3xl text-centre lg:text-left lg:text-5xl font-bold">All News Data</h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-24">
                {
                    newsData.map(data => <NewsAllData key={data._id} data={data}></NewsAllData>)
                }
            </div>
        </div>
    )
    
}
export default NewsData;