import React from "react";
import Image from "next/image";
import Link from "next/link";

const Comments = () => {
  const status = "authenticated";

  return (
    <section className="mt-16 max-w-4xl mx-auto px-4 sm:px-0">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-4">Comments</h1>

      {status === "authenticated" ? (
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Textarea */}
          <textarea
            placeholder="Write your comment here..."
            rows={4}
            className="
              w-full
              resize-none
              rounded-xl
              border border-gray-300
              p-3
              text-md
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />

          {/* Button */}
          <button
            className="
              sm:self-center
              px-5 py-2
              rounded-lg
              bg-teal-600
              text-white
              text-sm
              
              font-semibold
              hover:bg-teal-700
              transition
            "
          >
            Send
          </button>
        </div>
      ) : (
        <p className="text-sm text-gray-600">
          Please{" "}
          <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
            log in
          </span>{" "}
          to comment.
        </p>
      )}

      {/* Single Comment */}
      <div>
        <div
          className="mt-8 flex items-start gap-4

            p-2 rounded-xl
            transition"
        >
          {/* Image */}
          <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/p1.jpeg"
              alt="Popular Image"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-1">
            {/* Category Badge */}
            <span className="inline-block px-3 py-1 rounded-full bg-blue-200 text-blue-800 text-xs font-semibold w-fit">
              John Doe
            </span>
            <span className="text-xs px-3 py-1 text-gray-400">22.03.2025</span>
          </div>
        </div>
        <h2 className="text-sm font-semibold leading-snug pl-5 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h2>
      </div>
      <div>
        <div
          className="mt-8 flex items-start gap-4

            p-2 rounded-xl
            transition"
        >
          {/* Image */}
          <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/p1.jpeg"
              alt="Popular Image"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-1">
            {/* Category Badge */}
            <span className="inline-block px-3 py-1 rounded-full bg-blue-200 text-blue-800 text-xs font-semibold w-fit">
              John Doe
            </span>
            <span className="text-xs px-3 py-1 text-gray-400">22.03.2025</span>
          </div>
        </div>
        <h2 className="text-sm font-semibold leading-snug pl-5 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aperiam
          hic officiis mollitia laudantium minus, ipsum dolores molestias
          consectetur ullam!
        </h2>
      </div>
      <div>
        <div
          className="mt-8 flex items-start gap-4

            p-2 rounded-xl
            transition"
        >
          {/* Image */}
          <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/p1.jpeg"
              alt="Popular Image"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-1">
            {/* Category Badge */}
            <span className="inline-block px-3 py-1 rounded-full bg-blue-200 text-blue-800 text-xs font-semibold w-fit">
              John Doe
            </span>
            <span className="text-xs px-3 py-1 text-gray-400">22.03.2025</span>
          </div>
        </div>
        <h2 className="text-sm font-semibold leading-snug pl-5 mt-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          rerum necessitatibus sint quasi exercitationem? Pariatur, vitae odit
          debitis qui voluptas ipsum recusandae natus provident aliquid
          excepturi nam velit, inventore quae?
        </h2>
      </div>
    </section>
  );
};

export default Comments;
