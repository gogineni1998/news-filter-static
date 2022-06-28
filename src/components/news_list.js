import React from "react";
import NewsListItem from "./news_list_item";
const News_List = ({ news }) => {
    return (
        news.map((item) => {
            return (
                <>
                    <NewsListItem
                        item={item}
                    />
                </>
            )
        })
    )
}

export default News_List;