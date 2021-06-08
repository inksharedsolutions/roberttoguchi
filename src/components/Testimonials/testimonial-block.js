 import React from 'react'
 import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Testimonial from '../testimonial'




 const TestimonialBlock = (props)=>{
     return(
         <>
             <section className="testimonial-block-element">

                <span className="testimonial-num">
                    {props.num}
                </span>

                <h2>{props.title}</h2>
                <span className="testimonial-author">{props.author}</span><br />
                <FontAwesomeIcon className='font-awesome checked' icon={faStar} />
                <FontAwesomeIcon className='font-awesome checked' icon={faStar} />
                <FontAwesomeIcon className='font-awesome checked' icon={faStar} />
                <FontAwesomeIcon className='font-awesome checked' icon={faStar} />
                <FontAwesomeIcon className='font-awesome checked' icon={faStar} />
                <p>
                    {props.content}
                </p>
                
             </section>
         </>
     )
 }

 export default TestimonialBlock