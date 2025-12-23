"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ news }) => {
  return (
    <article className="w-full">
      <div
        className="
          flex flex-col md:flex-row
          gap-6 md:gap-8
        "
      >
        {/* Image */}
        <div className="w-full md:w-[350px] h-[350px] relative">
          <Image
            src={news.image || "/p1.jpeg"}
            alt={news.title}
            fill
            className="rounded-2xl object-cover shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-500">
              {news.publishedAt.slice(0, 10)}
            </span>

            <span className="text-gray-400">•</span>

            <span className="uppercase text-red-500 font-semibold tracking-wide">
              {news.category || "News"}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold max-w-lg">
            {news.title}
          </h2>

          <p className="text-gray-600 text-sm sm:text-base max-w-lg">
            {news.description}
          </p>

          <div className="mt-2 w-fit">
            <Link
              href={news.sourceUrl}
              target="_blank"
              className="font-semibold"
            >
              Read More
            </Link>
            <span className="block h-[2px] w-full bg-rose-400 transition-all group-hover:w-full "></span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
