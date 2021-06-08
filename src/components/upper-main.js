import React,{useEffect, useRef, useState} from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/author/author_img.jpg'

const UpperMain =()=>{


    const elemBanner = useRef(null);
    const [stateUpper, statFunc] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', scrollEffect);
    });

    const scrollEffect = (e)=>{
        let axisY =window.scrollY;

        if(axisY > 500 ){
            statFunc(true);
        }
    }   
    
    
    return  (
        <>
            <section className={`upper-main upper-style`}>
                <div className="container-gt">

                    <div className="grid-two-columns" >
                        <div className={`img-wrapper-form ${stateUpper && 'image-author'}`}>
                            <img src={AuthorImg} alt="author-image"/>
                        </div>

                        <div classNames="content-img-wrapper">
                            <section className="content-wrapper-body">
                                <h1>Dr. Robert M. Toguchi</h1>
                                <span>Author & Writer</span>

                                <p>
                                    Dr. Robert Toguchi is a writer who has served as a former faculty member of the National Defense University teaching courses on leadership, strategy, and personal effectiveness.
                                </p>

                                <button>
                                    <Link to="/about-the-author">
                                        Read More
                                    </Link>
                                </button>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UpperMain