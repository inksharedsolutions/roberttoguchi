import React from 'react'
import Block from  './Testimonials/testimonial-block'


const Testimonial = ()=>{
    return(
        <>
            <section className="testimonial-section">
                <h1>
                    <span>
                        Testimonials
                    </span>
                </h1>
            </section>

            <section className="testimonial-blocks">
                <div className="grid-block-wrapper">
                    <Block
                        num={`01`}
                        title={`Change your habits. Change your life.`}
                        author={`Karee Levy`}
                        content={
                            `   
                            Dr. Toguchi challenges the perspective that Steve Jobs is an individual to be idolized. Instead, he paints the picture that Steve was an average American who grew up in an average environment, with below average skill. This book is a testament that the habits Steve's embodied were responsible for his achievements in life. This book shows the processes of how to deconstruct bad habits and replace them with habits that will increase the chances of cultivating your own success. I'd recommend this book to any budding entrepreneur that wants to change their mindset and win in life.
                            `
                        }
                    />

                    <Block
                        num={`02`}
                        title={`Perfecting Winning Habits!`}
                        author={`Dwayne`}
                        content={
                            `
                            The Winning Habits of Steve Jobs helped to demystify the make-up of habit forming tendencies by drawing on examples from globally recognized visionaries and pioneers. For me, the book represents a well needed resource and filled a critical gap in my budding young professional life, especially as I contend with modern distractions. The language was simple, appropriate and aided in offering great insight into what it takes to be successful in this life, while doubling as a repository for practical solutions to everyday challenges.
                            `
                        }
                    />


                    <Block
                        num={`03`}
                        title={`Great book!`}
                        author={`Valentine Izundu`}
                        content={
                            `
                            This book really motivated me to keep striving for excellence. I read this book at the lowest point of my life. and after reading this book, I was able to find my Stengthds and build upon it, which made me successful!

                            I recommend this book to anybody who is looking for encouragement. You can be great
                            `
                        }
                    />

                </div>
            </section> 
        </>
    )
}


export default Testimonial


