// import React from "react";
import { NewsContext } from "../../NewsContext";
import React, { useContext, memo } from "react";

function NewsArticle({ allNews }) {
  var all_news = useContext(NewsContext);
  let localNews = all_news.all_news && all_news.all_news.localData && all_news.all_news.localData.articles ? all_news.all_news.localData.articles.filter((item,key)=> key < 3 )  : [];
  let sportsNews = all_news.all_news && all_news.all_news.sportsData && all_news.all_news.sportsData.articles ? all_news.all_news.sportsData.articles.filter((item,key)=> key < 3 )  : [];
  let entertainmentNews = all_news.all_news && all_news.all_news.entertainmentData && all_news.all_news.entertainmentData.articles ? all_news.all_news.entertainmentData.articles.filter((item,key)=> key < 3 )  : [];
  let setTechnologyData = all_news.all_news && all_news.all_news.setTechnologyData && all_news.all_news.setTechnologyData.articles ? all_news.all_news.setTechnologyData.articles.filter((item,key)=> key < 4 )  : [];
  let businessData = all_news.all_news && all_news.all_news.businessData && all_news.all_news.businessData.articles ? all_news.all_news.businessData.articles.filter((item,key)=> key < 3 )  : [];
  let politicsData = all_news.all_news && all_news.all_news.politicsdata && all_news.all_news.politicsdata.articles ? all_news.all_news.politicsdata.articles.filter((item,key)=> key < 5 )  : [];

  return (
    <div className="content_area">
      <div className="main_content floatleft">
        <div className="left_coloum floatleft">
            <div className="single_left_coloum_wrapper">
                <h2 className="title">local   news</h2>
                {localNews && localNews.map((item, i) => (
                  <div className="single_left_coloum floatleft" key={item.url}> <img src={item.urlToImage} alt="" />
                      <h4>{item.title}</h4>
                      <p>{item.content ? item.content : item.description}</p>
                  </div>
                ))}
            </div>
            <div className="single_left_coloum_wrapper">
                <h2 className="title">sports  articles</h2>
                {sportsNews && sportsNews.map((item, i) => (
                  <div className="single_left_coloum floatleft" key={item.url}> <img src={item.urlToImage} alt="" />
                      <h4>{item.title}</h4>
                      <p>{item.content ? item.content : item.description}</p>
                  </div>
                ))}
            </div>
            
            <div className="single_left_coloum_wrapper single_cat_left">
                <h2 className="title">tech news</h2>
                {setTechnologyData && setTechnologyData.map((item, i) => (
                  <div className="single_cat_left_content floatleft" key={item.url}> 
                      <h4>{item.title}</h4>
                      <p>{item.content ? item.content : item.description}</p>
                      <p className="single_cat_left_content_meta"></p>
                  </div>
                ))}
            </div>
        </div>
        <div className="right_coloum floatright">
            <div className="single_right_coloum">
                <h2 className="title">entertainment</h2>
                <ul>
                  {entertainmentNews && entertainmentNews.map((item, i) => (
                    <li>
                      <div className="single_cat_right_content">
                          <h3>{item.title}</h3>
                          <p>{item.content ? item.content : item.description}</p>
                          <p className="single_cat_right_content_meta"></p>
                      </div>
                    </li>
                    ))}
                </ul>
            </div>
            <div className="single_right_coloum">
                <h2 className="title">business</h2>
                <ul>
                  {businessData && businessData.map((item, i) => (
                    <li>
                      <div className="single_cat_right_content">
                          <h3>{item.title}</h3>
                          <p>{item.content ? item.content : item.description}</p>
                          <p className="single_cat_right_content_meta"></p>
                      </div>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
    <div className="sidebar floatright">
      <div className="single_sidebar">
          <div className="popular">
          <h2 className="title">Politics</h2>
          <ul>
            {politicsData && politicsData.map((item, i) => (
              <li>
                <div className="single_popular">
                    {/* <p>Sept 24th 2045</p>
                    <h3>Lorem ipsum dolor sit amet conse ctetur adipiscing elit </h3> */}
                    <h4>{item.title}</h4>
                    <p>{item.content ? item.content : item.description}</p>
                </div>
              </li>
            ))}
          </ul>
          </div>
      </div>
    </div>
  </div>
  );
}

export default memo(NewsArticle);