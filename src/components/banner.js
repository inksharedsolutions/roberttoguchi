import React,{useEffect, useRef} from 'react'
import {Link} from 'gatsby'
import  ImgBanner from '../../static/book/book-cover.png'

const Banner = ()=>{

    const elemBanner = useRef(null);

    useEffect(() => {

    });
 

    return (
        <>
            <section className="banner-section">

                    <div className="grid-two-layout-col">
                        <div className="wrapper-bg-left">
                            <div className="left-col">
                                <div className="banner-content-wrapper">
                                    <h1>
                                        <span className="first-block">
                                            <span>
                                                The Winning Habit of
                                            </span>
                                        </span>

                                        <span className="second-block">
                                            <span id="color-o">
                                             Steve Jobs
                                            </span>
                                        </span>
                                    </h1>
                                    <p>
                                        The Winning Habits of Steve Jobs provides a glimpse into the successful attributes of this remarkable icon of the technology industry. Often characterized as one of the founders of the personal computer revolution, Steve Jobs displayed distinct habits and behaviors of entrepreneurship that were the foundations of his success.
                                    </p>

                                    <button>
                                        <Link to="/about-the-book">
                                            Read More
                                        </Link>
                                    </button>
                               
                                </div>
                            </div>
                        </div>

                        <div className="wrapper-bg-right">
                            <div className="right-col banner-img-col">

                                <div className="img-banner-wrapper" ref={elemBanner}>
                                    <img src={ImgBanner}/>
                                </div>

                            </div>
                        </div>
                    </div>

            </section>
        </>
    )
}

export default Banner;