import React, {useState} from 'react';

const SliderTwo = ({ title, subTitle }) => {
    

    return ( 
        <section className="landing-area">
            <img src='https://i3.lensdump.com/i/ISrN3a.jpg' alt='rainforest' className='landing-image'/>
            <div className="landing-heading">
                <p className="landing__meta">{subTitle}</p>
                <h2 className="landing__title">{title}</h2>
                <div class="powr-stripe-button" id="f04c986b_1618559744"></div>
                {/* <a href="#" className="theme-btn">donate now</a> */}
            </div>
        </section>
    );
};

export default SliderTwo;
