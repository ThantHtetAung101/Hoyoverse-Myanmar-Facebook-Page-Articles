import React, { useEffect, useRef, useState } from 'react'
import admin from '../images/admin.png'
import { AnimatedCounter } from 'react-animated-counter';
import { useInView } from 'framer-motion';

const Article = ({ post }) => {
    const { id, created_time, message, permalink_url, full_picture, comments, likes } = post;
    const title = message.split('\n')[0]
    const description = getDescription(message)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const totalLikes = likes.summary.total_count;
    const totalComments = comments.summary.total_count;
    const posted_month = created_time.split('-')[1]
    // const tag = message.split('#')[4].replace(/\n/g, '')
    // const poster = message.split('#')[5].replace(/\n/g, '')
    function getShortMonthName(month) {
        console.log(month);
        switch (month) {
            case '01':
                return "JAN";
            case '02':
                return "FEB";
            case '03':
                return "MAR";
            case '04':
                return "APR";
            case '05':
                return "MAY";
            case '06':
                return "JUN";
            case '07':
                return "JUL";
            case '08':
                return "AUG";
            case '09':
                return "SEP";
            case '10':
                return "OCT";
            case '11':
                return "NOV";
            case '12':
                return "DEC";
            default:
                return "Invalid month";
        }
    }
    function getDescription(message) {
        const phrases = message.split('\n');
        const filteredPhrases = phrases.filter((phrase, index) => index !== 0 && !phrase.includes('#'));
        const desc = filteredPhrases.join('');

        return desc;
    }
    return (
        <div ref={ref} style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }} className="flex flex-col sm:flex-row w-full gap-3 mx-5 sm:mx-10 md:mx-10 lg:mx-10 xl:mx-10 mt-7 mb-5">
            <div className="hidden sm:flex flex-col items-center mt-14">
                <img src={admin} alt="admin-img" className='w-[70px] h-[70px] sm:h-[150px] rounded-full object-cover' />
                <span className="roboto text-4xl mt-3">
                    {posted_month}
                </span>
                <span className="text-gray-700 inter text-3xl mt-5 sm:rotate-90 tracking-[.2rem]">
                    {getShortMonthName(posted_month)}
                </span>
            </div>
            <div className="card bg-white drop-shadow-lg rounded-3xl w-[90%] sm:w-[800px] max-h-[600px] flex flex-col items-center pt-3">
                <span className="card-header h-[70px] sm:h-[35px] inter font-bold text-center text-lg px-2 flex items-center">
                    <span>{title}</span>
                </span>
                <div className='w-[95%] h-[300px] mt-5 drop-shadow-lg flex justify-center bg-gray-200 rounded-3xl'>
                    <img src={full_picture} alt="cover" className='h-full rounded-3xl object-cover drop-shadow' />
                </div>
                <span className='inter text-balance leading-relax sm:text-pretty 
                font-semibold px-5 sm:ms-5 mt-5 w-full max-h-[120px] sm:max-h-[150px] overflow-hidden truncate'>
                    {description}
                </span>
                <div className="flex justify-between text-purple-500 w-[90%] self-start ms-5 sm:ms-7 mt-5 mb-5">
                    <div className="flex inter items-center gap-1 font-semibold text-sm sm:text-base md:text-base lg:text-base xl:text-base">
                        <i className="text-[16px] ri-heart-line"></i>
                        <span>{totalLikes}</span>
                        <span>Likes</span>
                    </div>
                    <div className="flex inter items-center gap-1 font-semibold text-sm sm:text-base md:text-base lg:text-base xl:text-base">
                        <i className="text-[16px] ri-chat-1-line"></i>
                        <span>{totalComments}</span>
                        <span>Comments</span>
                    </div>
                    <a href={permalink_url} target='_blank'>
                        <div className="flex inter items-center gap-1 font-semibold text-sm sm:text-base md:text-base lg:text-base xl:text-base">
                            <span>Read More</span>
                            <i className="text-[16px] ri-arrow-right-line"></i>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Article