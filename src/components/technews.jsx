import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './navbar';
import Footer from './footer';

function Technews() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=45a1b3aa0253482d8db1f31bc7e80948`
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching tech news:", error);
      }
    };

    fetchNews();
    const interval = setInterval(fetchNews, 1000 * 60 * 15);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-8">
        {/* Heading */}
        <div className="mb-6 text-center">
          <h2 className="font-bold text-3xl pb-2 text-blue-500 inline-block px-4 py-9 rounded-md">
            Latest Tech News
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-2">
            Stay updated with the latest happenings in the world of technology.
            Breaking headlines, trends, and insights — all in one place.
          </p>
        </div>

        {/* Articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-blue-300 border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-5 flex flex-col justify-between"
            >
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-blue-600 hover:underline"
              >
                {article.title}
              </a>
              <p className="text-sm text-gray-700 mt-3 flex-1">{article.description}</p>
              <div className="mt-4 text-xs text-gray-500 flex justify-between items-center">
                <span>Source: {article.source.name}</span>
                {article.publishedAt && (
                  <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Back Button in the Middle */}
        <div className="text-center my-12">
          <Link to="/">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 text-lg font-semibold shadow-lg">
              Back to Home
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Technews;
