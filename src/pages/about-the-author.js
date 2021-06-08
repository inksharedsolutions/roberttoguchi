import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/author_img.jpg'
import Helmet from 'react-helmet';

const ATB = (props)=>{
	
	return (
		<>
		 	<Layout>
                <Helmet title="About the Author | Dr. Robert M. Toguchi" />
		 		<Nav pathExt={props.path}/>
                 <Banner 
                 spanFirst={`About The`}
                 contextHeading={`Author`}/>


		 		<div className="container">
				    <section className="body-author-contents">

                        <div className="heading-quote">
                            <div className="author-image-container">
                                <img src={AuthorImg} />
                            </div> 

                            <div className="heading-quote">
                                <h4>
                                    <q>An Innovative View of Personal Empowerment - seen through the Lens of a Technology Pioneer's Life</q>
                                </h4>
                                
                                <span className="ata-span-fx">
                                    - Kirkus Review Quote
                                </span>
                            </div>
                        </div>

                        <article 
                            className="article-section" 
                            id="author">

                            <p>
                                Dr. Robert Toguchi is a writer who has served as a former faculty member of the National Defense University teaching courses on leadership, strategy, and personal effectiveness. He also spent a decade contributing to conceptual change within the U.S. Army and served two tours with the U.S. Army Training and Doctrine Command as the Director, Strategic Plans and the Chief, Initiatives Group. He and his wife Tina live in Vass, North Carolina.
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    Dr. Robert M. Toguchi
                                </span>
                            </p>
                            
                        </article>
              

                    </section>
                </div>

		 	</Layout>
		</>
	)
}


export default ATB;