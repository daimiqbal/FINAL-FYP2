import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Header Component
const Header = () => {
    return (
        <header style={{ backgroundColor: "#f8f8f8", padding: "10px", textAlign: "center" }}>
            {/* Your header content here */}
            <h1>Welcome to Travel Ease</h1>
        </header>
    );
};

// Index Component
const Index = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <Header />
            {/* Add the remaining parts of your website here */}
            <section id='home'>
                {/* ... (your existing code) ... */}
            </section>

            <section id='schedule'>
                <div className='container exercise_container'>
                    {/* ... (your existing code) ... */}
                </div>
            </section>

            <section id='classes'>
                <div className='container'>
                    {/* ... (your existing code) ... */}
                </div>
            </section>

            <section id='pricing-plan'>
                <div className='container'>
                    {/* ... (your existing code) ... */}
                </div>
            </section>
        </>
    );
};

export default Index;
