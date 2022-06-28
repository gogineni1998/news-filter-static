import React from "react";

const news_list_item = ({ item }) => {
    return (
        <>
            <h1>{item.title}</h1>
            <p>{item.feed}</p>
        </>
    )
}
export default news_list_item;