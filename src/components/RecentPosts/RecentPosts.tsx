import React from "react";
import recentpost1 from "../../assets/recentpost1.jpg";
import recentpost2 from "../../assets/recentpost2.jpg";
import recentpost3 from "../../assets/recentpost3.jpg";
import recentpost4 from "../../assets/recentpost4.jpg";
import recentpost5 from "../../assets/recentpost5.jpg";

function RecentPosts() {
  const posts = [
    {
      image: recentpost1,
      title: "Consectetuer vehicula ab",
      description: "In kitchen Lifestyle",
    },
    {
      image: recentpost2,
      title: "Taciti hendrerit dis odit incidunt",
      description: "In Kitchen, Living Room, Reading Room",
    },
    {
      image: recentpost3,
      title: "Sunt doloremque blandit inven",
      description: "In Living Room",
    },
    {
        image: recentpost4,
        title: "Fugit quaerat vulputate! Irure.",
        description: "In Living Room",
    },
    {
        image: recentpost5,
        title: "Litora aptent magnam laoreet!",
        description: "In Living Room",
    },
  ];

  return (
    <div className="border-2 divide-y divide-gray-300 border-gray-200 p-2 ml-9 mb-6 ">
      {posts.map((post, index) => (
        <div
          key={index}
          className="flex items-center space-x-4 p-4"
        >
          <img
            src={post.image}
            alt={`Post ${index + 1}`}
            className="w-20 h-20 object-cover"
          />
          <div>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 text-lg font-semibold transition duration-300"
            >
              {post.title}
            </a>
            <p className="text-gray-600 mt-2">{post.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentPosts;
