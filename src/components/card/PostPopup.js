import React from 'react';

const PostPopup = ({ post, onClose }) => {
    const handleBackgroundClick = (event) => {
        // Закрываем попап только если кликнули на фон вне попапа
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="post-popup-container" onClick={handleBackgroundClick}>
            <div className="post-popup">
                <h2>{post.title}</h2>
                <p>{post.text}</p>
                <button onClick={onClose}>Закрыть</button>
            </div>
        </div>
    );
};

export default PostPopup;
