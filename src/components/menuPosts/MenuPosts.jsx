import React from 'react'
import styles from "./menuPosts.module.css"
import Link from 'next/link'
import Image from 'next/image'

const MenuPosts = ({withImage}) => {
    return (
        <div
            className={styles.items}
        >
            <Link
                href="/"
                className={styles.item}
            >
                {withImage &&
                    (<div
                        className={styles.imageContainer}
                    >
                        <Image
                            src="/travel-2.png" 
                            alt="" 
                            fill
                            className={styles.image}
                        />
                    </div>
                    )
                }
                <div
                    className={styles.textContainer}
                >
                    <span
                        className={`${styles.category} ${styles.travel}`}
                    >
                        Travel
                    </span>
                    <h3
                        className={styles.postTitle}
                    >
                        Exploring the Rich Tapestry of India: A Traveler's Paradise
                    </h3>
                    <div 
                        className={styles.detail}
                    >
                        <span
                            className={styles.username}
                        >
                            by: Ankit
                        </span>
                        <span
                            className={styles.date}
                        >    - 01.11.2023
                        </span>
                    </div>
                </div>
            </Link>
            <Link
                href="/"
                className={styles.item}
            >
                {withImage &&
                    (<div
                        className={styles.imageContainer}
                    >
                        <Image
                            src="/culture-2.png" 
                            alt="" 
                            fill
                            className={styles.image}
                        />
                    </div>
                    )
                }
                <div
                    className={styles.textContainer}
                >
                    <span
                        className={`${styles.category} ${styles.culture}`}
                    >
                        Culture
                    </span>
                    <h3
                        className={styles.postTitle}
                    >
                        Exploring the Rich Tapestry of Indian Culture
                    </h3>
                    <div 
                        className={styles.detail}
                    >
                        <span
                            className={styles.username}
                        >
                            by: Ankit
                        </span>
                        <span
                            className={styles.date}
                        >    - 01.11.2023
                        </span>
                    </div>
                </div>
            </Link>
            <Link
                href="/"
                className={styles.item}
            >
                {withImage &&
                    (<div
                        className={styles.imageContainer}
                    >
                        <Image
                            src="/food-2.png" 
                            alt="" 
                            fill
                            className={styles.image}
                        />
                    </div>
                    )
                }
                <div
                    className={styles.textContainer}
                >
                    <span
                        className={`${styles.category} ${styles.food}`}
                    >
                        Food
                    </span>
                    <h3
                        className={styles.postTitle}
                    >
                        Exploring the Culinary Delights of Indian Cuisine
                    </h3>
                    <div 
                        className={styles.detail}
                    >
                        <span
                            className={styles.username}
                        >
                            by: Ankit
                        </span>
                        <span
                            className={styles.date}
                        >    - 01.11.2023
                        </span>
                    </div>
                </div>
            </Link>
            <Link
                href="/"
                className={styles.item}
            >
                {withImage &&
                    (<div
                        className={styles.imageContainer}
                    >
                        <Image
                            src="/fashion-2.png" 
                            alt="" 
                            fill
                            className={styles.image}
                        />
                    </div>
                    )
                }
                <div
                    className={styles.textContainer}
                >
                    <span
                        className={`${styles.category} ${styles.fashion}`}
                    >
                        Fashion
                    </span>
                    <h3
                        className={styles.postTitle}
                    >
                        Elegance and Tradition: The Timeless Charm of Indian Fashion
                    </h3>
                    <div 
                        className={styles.detail}
                    >
                        <span
                            className={styles.username}
                        >
                            by: Ankit
                        </span>
                        <span
                            className={styles.date}
                        >    - 01.11.2023
                        </span>
                    </div>
                </div>
            </Link>
            <Link
                href="/"
                className={styles.item}
            >
                {withImage &&
                    (<div
                        className={styles.imageContainer}
                    >
                        <Image
                            src="/coding-2.png" 
                            alt="" 
                            fill
                            className={styles.image}
                        />
                    </div>
                    )
                }
                <div
                    className={styles.textContainer}
                >
                    <span
                        className={`${styles.category} ${styles.coding}`}
                    >
                        Coding
                    </span>
                    <h3
                        className={styles.postTitle}
                    >
                        Unlocking the Power of Web Technology with Next.js
                    </h3>
                    <div 
                        className={styles.detail}
                    >
                        <span
                            className={styles.username}
                        >
                            by: Ankit
                        </span>
                        <span
                            className={styles.date}
                        >    - 01.11.2023
                        </span>
                    </div>
                </div>
            </Link>
            <Link
                href="/"
                className={styles.item}
            >
                {withImage &&
                    (<div
                        className={styles.imageContainer}
                    >
                        <Image
                            src="/style-2.png" 
                            alt="" 
                            fill
                            className={styles.image}
                        />
                    </div>
                    )
                }
                <div
                    className={styles.textContainer}
                >
                    <span
                        className={`${styles.category} ${styles.style}`}
                    >
                        Style
                    </span>
                    <h3
                        className={styles.postTitle}
                    >
                        Embracing the Elegance of Indian Style
                    </h3>
                    <div 
                        className={styles.detail}
                    >
                        <span
                            className={styles.username}
                        >
                            by: Ankit
                        </span>
                        <span
                            className={styles.date}
                        >    - 01.11.2023
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MenuPosts