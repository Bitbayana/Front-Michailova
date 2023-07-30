import React, { useState, useRef, useEffect } from 'react';
import SubList from './SubList';
import ListItem from './ListItem';
import './MainList.css';
import BurgerMenu from "./BurgerMenu";
import X from './x';



const BlurBackground = () => {
    return <div className="blur-background" />;
};

const MainList = () => {
    const mainListItems = [
        {subItems: [
                { text: 'Demos', link: '#' },
                { text: 'Post Header', link: '#PostHeader' },
                { text: 'Post Layout', link: '#PostLayout' },
                { text: 'Share Buttons', link: '#ShareButtons' },
                { text: 'Gallery Post', link: '#GalleryPost' },
                { text: 'Video Post', link: '#VideoPost' },
            ],
        },
        {subItems: [
                { text: 'Post', link: '#' },
                { text: 'Post Header', link: '#PostHeader' },
                { text: 'Post Layout', link: '#PostLayout' },
                { text: 'Share Buttons', link: '#ShareButtons' },
                { text: 'Gallery Post', link: '#GalleryPost' },
                { text: 'Video Post', link: '#VideoPost' },
            ],
        },
        {subItems: [
                { text: 'Features', link: '#' },
                { text: 'Post Header', link: '#PostHeader' },
                { text: 'Post Layout', link: '#PostLayout' },
                { text: 'Share Buttons', link: '#ShareButtons' },
                { text: 'Gallery Post', link: '#GalleryPost' },
                { text: 'Video Post', link: '#VideoPost' },
            ],
        },
        {subItems:
            [
                { text: 'Categories', link: '#' },
                { text: 'Post Header', link: '#PostHeader' },
                { text: 'Post Layout', link: '#PostLayout' },
                { text: 'Share Buttons', link: '#ShareButtons' },
                { text: 'Gallery Post', link: '#GalleryPost' },
                { text: 'Video Post', link: '#VideoPost' },
            ],
        },
        {subItems:
            [
                { text: 'Shop', link: '#' },
                { text: 'Post Header', link: '#PostHeader' },
                { text: 'Post Layout', link: '#PostLayout' },
                { text: 'Share Buttons', link: '#ShareButtons' },
                { text: 'Gallery Post', link: '#GalleryPost' },
                { text: 'Video Post', link: '#VideoPost' },
            ],
        },

    ];


    const [nav, setNav] = useState(false);
    const [showCloseIcon, setShowCloseIcon] = useState(false);
    const menuRef = useRef();

    const handleToggleMenu = () => {
        setNav((prevNav) => !prevNav);
        setShowX(false);
    };

    const [showX, setShowX] = useState(false);


    useEffect(() => {

        if (nav) {
            setShowCloseIcon(true);
            // Add a delay before showing the X icon
            const timer = setTimeout(() => {
                setShowX(true);
            }, 1000);

            // Clean up the timer to prevent any potential issues
            return () => clearTimeout(timer);
        } else {
            setShowCloseIcon(false);
        }
    }, [nav]);
    return (
        <div>
            <div className={`main-list-container ${nav ? 'active' : ''}`} ref={menuRef}>
                <div className={`menu-icon ${nav ? 'hide' : ''}`} onClick={handleToggleMenu}>
                    <BurgerMenu />
                </div>
                {showCloseIcon && (
                    <div className={`x-icon ${showX ? 'show' : ''}`} onClick={handleToggleMenu}>
                        <X />
                    </div>
                )}
            </div>

            {nav && <BlurBackground />}

            <ul className={`main-list ${nav ? 'active' : ''}`}>
                {mainListItems.map((item, index) => (
                    <React.Fragment key={index}>
                        {item.subItems ? (
                            <SubList items={item.subItems} />
                        ) : (
                            <ListItem text={item.text} link={item.link} />
                        )}
                    </React.Fragment>
                ))}
                <div className="main-list_last-child ">Buy Now</div>
            </ul>
        </div>
    );
};

export default MainList;
