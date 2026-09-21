import React from 'react';
import SectionHeader from './shared/SectionHeader';
import { FaArrowRight } from 'react-icons/fa';

const NextStudySession = () => {
    return (
        <section className='container mx-auto bg-white px-[150px] py-[50px] text-center space-y-4'>
            <SectionHeader title={"Set your first goal in under two minutes. No credit card required."} subTitle={"Your next study session could be the one that sticks"}/>
            <button className='btn bg-[#0e7c66] text-white'>Get Started <FaArrowRight /></button>
        </section>
    );
};

export default NextStudySession;