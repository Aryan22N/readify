"use client";
import { useEffect, useState } from "react";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";

const CardList = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/news/recent")
      .then((res) => res.json())
      .then((data) => {
        // console.log("ARTICLES FROM API:", data.articles);
        setNews(Array.isArray(data.articles) ? data.articles : []);
        setLoading(false);
      })
      .catch(() => {
        setNews([]);
        setLoading(false);
      });
  }, []);

  return (
    <section className="flex-1 w-full">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold">Recent Posts</h1>
      </div>

      <div className="flex flex-col gap-10">
        {/* loading check krni padigi  */}
        {loading && <p>Loading latest news...</p>}

        {!loading &&
          news.map((item) => (
            <Card key={`${item.sourceUrl}-${item.publishedAt}`} news={item} /> //unique key
          ))}
      </div>

      <Pagination />
    </section>
  );
};

export default CardList;
