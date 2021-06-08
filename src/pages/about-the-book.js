import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/book/book-cover.png'
import Helmet from 'react-helmet'


const ATB = (props)=>{


    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'dr-robert-m-toguchi',
	  config: { identifier:  12, slug}
    }
    

	return (
		<>
		 	<Layout>
                <Helmet title="About the Book | Dr. Robert M. Toguchi" />
		 		<Nav pathExt={props.path}/>
            
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                 
                 />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`The Winning Habits of Steve Jobs`,
                                    spanTitle: '',
                                    imgSrc: Book1,
                                    id:'the_gifted_one',
                                    content:
                                    `
                                    
                                        The Winning Habits of Steve Jobs provides a glimpse into the successful attributes of this remarkable icon of the technology industry. Often characterized as one of the founders of the personal computer revolution, Steve Jobs displayed distinct habits and behaviors of entrepreneurship that were the foundations of his success. Of note, the vast majority of books that describe Jobs's success emphasizes what he did in terms of dates, events, start-ups, and product launches.
                                    

                                    
                                        Other books discuss lessons learned, but they rarely address the approach of how to apply these insights. This book is different. Rather than focusing on a chronology of biographical events, Winning Habits will delve into an exploration of the how behind Jobs's remarkable success. It provides the perspective that Steve designed his personal life to optimize many aspects of entrepreneurship by creating and sustaining successful habits that were aligned with his core values. These core habits supported his long-term goal of becoming the preeminent technology entrepreneur of his time.
                                    

                                    
                                        Beyond the habits of Steve Jobs, this book also innovates by comparing these remarkable habits with those of entrepreneurs Jeff Bezos, Mark Cuban, Elon Musk, Bill Gates, Mark Zuckerberg, Warren Buffett, and Larry Ellison.
                                    

                                    `,
                                    
                                    ebooks:{
                                        stratton : '',
                                        barnes: 'https://www.barnesandnoble.com/w/the-winning-habits-of-steve-jobs-dr-robert-m-toguchi/1126338268?ean=9781648953071',
                                        amazon :'https://www.amazon.com/Winning-Habits-Steve-Jobs-ebook/dp/B08SYB8PKK/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1610655719&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Winning-Habits-Steve-Jobs/dp/1648953069/ref=sr_1_1?dchild=1&keywords=9781648953064&qid=1623038838&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/the-winning-habits-of-steve-jobs-dr-robert-m-toguchi/1126338268?ean=9781648953064',
                                        booksamillion:'https://www.booksamillion.com/p/Winning-Habits-Steve-Jobs/Robert-Toguchi/9781648953064?id=8230387821951',
                                    }
                                }}
                            />
			    {/*Stratton Link: https://www.stratton-press.com/books/one-full-american-life-of-a-first-generation-immigrant-of-mexican-descent/*/}
                            <div className="commentSection" >
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                    </div>	
                </main>
		 	</Layout>
		</>
	)
}


export default ATB;
