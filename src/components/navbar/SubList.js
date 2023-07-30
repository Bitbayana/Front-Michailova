import React, { useState } from 'react';
import ListItem from './ListItem';
import './SubList.css';

const SubList = ({ items }) => {
    const [showSubItems, setShowSubItems] = useState(false);

    const toggleSubItems = () => {
        setShowSubItems(!showSubItems);
    };

    return (
        <div className="sub-list" onMouseEnter={toggleSubItems} onMouseLeave={toggleSubItems}>
            <span className="sub-list-toggle">{items[0].text}
                <svg width="10" height="11" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="black" stroke-linecap="square"/>
                </svg>
            </span>
            {showSubItems && (
                <ul>
                    {items.slice(1).map((item, index) => (
                        <ListItem key={index} text={item.text} link={item.link} />
                    ))}
                </ul>
            )}

        </div>
    );
};

export default SubList;
