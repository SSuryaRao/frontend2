// src/components/DisasterNewsFeed.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisasterNewsFeed = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('https://newsapi.org/v2/everything', {
                    params: {
                        q: 'disaster News',
                        apiKey: 'd889eeafc93c4349bf3dd56dfd90af08', // Replace with your NewsAPI key
                        language: 'en',
                        sortBy: 'publishedAt',
                        
                    },
                });
                setNews(response.data.articles);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <ul>
                {news.filter(article =>
                    // Ensure each article contains at least one relevant keyword
                    /flood|cyclone|earthquake|landslide/i.test(article.title) || 
                    /flood|cyclone|earthquake|landslide/i.test(article.description)
                ).map((article, index) => (
                    <li key={index}>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            {article.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DisasterNewsFeed;
