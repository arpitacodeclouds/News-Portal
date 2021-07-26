import { NewsContext } from "../../NewsContext";
import React, { useContext } from "react";
import NewsArticle from "./NewsArticle";
import SportsNews from "../News/News";

function NewsFeed({loactionDetails, category}) {
  const all_data  = useContext(NewsContext);


  var section_data_show = (category === 'sports' && all_data.all_news.sportsData) ? all_data.all_news.sportsData : 
                        ((category === 'world-news' && all_data.all_news.localData)? all_data.all_news.localData : 
                        ((category === 'business' && all_data.all_news.businessData) ? all_data.all_news.businessData : 
                        ((category === 'technology' && all_data.all_news.setTechnologyData) ? all_data.all_news.setTechnologyData : 
                        (category === 'entertainment'  && all_data.all_news.entertainmentData ? all_data.all_news.entertainmentData : "Something Went wrong"))));

  return (
    <div>
      <div className="all__news">
        {!category && all_data
          ? <NewsArticle allNews={all_data}  />
          : <SportsNews newsData={section_data_show} category={category} loactionDetails={loactionDetails}/>
        }
      </div>
    </div>
  );
}

export default NewsFeed;