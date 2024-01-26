import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image';
import Link from 'next/link';

const Featured = () => {
    return (
        <div 
            className={styles.container}
        >
            <h1 
                className={styles.title}
            >
                <b>
                    Hey, Ankit here!
                </b> 
                    <br/>Discover my stories and creative ideas.
            </h1>
            <div 
                className={styles.post}
            >
                <div 
                    className={styles.imgContainer}
                >
                    <Image 
                        src="/coding-2.png" 
                        alt="" 
                        fill 
                        className={styles.image}
                    />
                </div> 
                <div 
                    className={styles.textContainer}>
                    <h1 
                        className={styles.postTitle}
                    >
                        Unlocking the Power of Web Technology with Next.js
                    </h1>
                    <p 
                        className={styles.postDesc}
                    >
                        Explore the world of Next.js, a cutting-edge web technology that's 
                        revolutionizing web development. 
                        Discover how Next.js seamlessly combines server-side 
                        rendering and client-side rendering to create performant and 
                        SEO-friendly web applications. Learn about the framework's focus on developer productivity, 
                        easy routing, and navigation, as well as its scalability and performance features. 
                        Whether you're a seasoned developer or a beginner, 
                        this blog will show you how Next.js can take your web development skills 
                        to the next level, delivering a superior user experience and optimizing 
                        your web applications for search engines. Don't miss out on the opportunity 
                        to enhance your web development toolkit with Next.js.
                    </p>
                    <button 
                        className={styles.button}
                    >
                        <Link
                            href="http://localhost:3000/posts/unlocking-the-power-of-web-technology-with-nextjs"
                        >
                            Read More
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Featured