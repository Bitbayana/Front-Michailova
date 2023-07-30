import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./card.css"
import PostPopup from './PostPopup';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        // Функция для получения данных с API
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://cloud.codesupply.co/endpoint/react/data.json'
                );
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    const handlePostClick = (post) => {
        setSelectedPost(post);
    };

    const handleClosePopup = () => {
        setSelectedPost(null);
    };

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };
    const filteredPosts = searchText
        ? posts.filter((post) => {
            // Check if post exists and if title and description properties exist before using toLowerCase
            const title = post?.title ? post.title.toLowerCase() : '';
            const description = post?.text ? post.text.toLowerCase() : '';

            return (
                title.includes(searchText.toLowerCase()) ||
                description.includes(searchText.toLowerCase())
            );
        })
        : posts;
    return (
        <div>
            <input
                type="text"
                value={searchText}
                onChange={handleSearchChange}
                placeholder="Введите текст для поиска..."
            />
            <div className="post-list">
                {filteredPosts.map((post) => (
                    <div key={post.id} className="post-card" onClick={() => handlePostClick(post)}
                    >
                        <img src={post.image}
                             srcSet={`${post.img_2x} 2x`}
                             alt={post.title}/>
                        <div className="post-info">
                            <span className='tags'>{post.tags}</span>
                            <h2>{post.title}</h2>

                            <div className='post-meta'>
                                <span>Niek Bove</span>
                                <p>{post.author} </p>
                                <p> {post.date} </p>
                                <p>{post.views} Views</p>
                            </div>
                            <p>{post.text}</p>

                        </div>
                    </div>
                ))}
            </div>
            {selectedPost && (
                <PostPopup post={selectedPost} onClose={handleClosePopup} />
            )}
        </div>
    );
};

export default PostList;
