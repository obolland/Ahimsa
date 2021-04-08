import React from 'react';

const TeamArea = ({
    mainTitle,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    name1,
    name2,
    name3,
    name4,
    name5,
    name6,
    role1,
    role2,
    role3,
    role4,
    role5,
    role6
}) => {
    return (
        <section className="team-area text-center" id="who">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="section-heading">
                            <div className="section-icon">
                                <img src="/images/section-icon.png" alt="section-icon" />
                            </div>
                            <h2 className="section__title">{mainTitle}</h2>
                            <p className="section__meta">do priceless work</p>
                        </div>
                    </div>
                </div>
                <div className="row team-content-wrap">
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-item team-item1">
                            <div className="team__img">
                                <img src={image1} alt="team image" />
                                    {/* <div className="team__img-links">
                                        <ul>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                        </ul>
                                    </div> */}
                            </div>
                            <div className="team__title">
                                <h3 className="team__title-title"><a href="#">{name1}</a></h3>
                                <span className="team__title-meta">{role1}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-item team-item2">
                            <div className="team__img">
                                <img src={image2} alt="team image" />
                            </div>
                            <div className="team__title">
                                <h3 className="team__title-title"><a href="#">{name2}</a></h3>
                                <span className="team__title-meta">{role2}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-item team-item3">
                            <div className="team__img">
                                <img src={image3} alt="team image" />
                            </div>
                            <div className="team__title">
                                <h3 className="team__title-title"><a href="#">{name3}</a></h3>
                                <span className="team__title-meta">{role3}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-item team-item4">
                            <div className="team__img">
                                <img src={image4} alt="team image" />
                            </div>
                            <div className="team__title">
                                <h3 className="team__title-title"><a href="#">{name4}</a></h3>
                                <span className="team__title-meta">{role4}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-item team-item1">
                            <div className="team__img">
                                <img src={image5} alt="team image" />
                            </div>
                            <div className="team__title">
                                <h3 className="team__title-title"><a href="#">{name5}</a></h3>
                                <span className="team__title-meta">{role5}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-item team-item2">
                            <div className="team__img">
                                <img src={image6} alt="team image" />
                                <div className="team__img-links">
                                    <ul>
                                        <li><a href="www.ollybolland.com" target='_blank'>www.ollybolland.com</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team__title">
                                <h3 className="team__title-title"><a href="#">{name6}</a></h3>
                                <span className="team__title-meta">{role6}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamArea;
