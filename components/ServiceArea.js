import React from 'react';

const ServiceArea = ({
    mainTitle,
    img1,
    img2,
    img3,
    img4,
    heading1,
    heading2,
    heading3,
    heading4,
    textContent1,
    textContent2,
    textContent3,
    textContent4
}) => {
    return (
        <section className="service-area text-center" id="what">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="section-heading service-heading">
                            <div className="section-icon">
                                <img src="/images/section-icon.png" alt="section-icon" />
                            </div>
                            <h2 className="section__title">{mainTitle}</h2>
                            <p className="section__meta">get invloved!</p>
                        </div>
                    </div>
                </div>
                <div className="row service-wrap">
                    <div className="col">
                        <div className="service-item service-item1">
                            <div className="service-item-inner">
                                <div className="service-icon">
                                    <img src={img1} />
                                </div>
                                <div className="service-content">
                                    <h4 className="service__title">{heading1}</h4>
                                    <p className="service__desc">
                                        {
                                            textContent1
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service-item service-item2">
                            <div className="service-item-inner">
                                <div className="service-icon">
                                    <img src={img2} />
                                </div>
                                <div className="service-content">
                                    <h4 className="service__title">{heading2}</h4>
                                    <p className="service__desc">
                                        {
                                            textContent2
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service-item service-item3">
                            <div className="service-item-inner">
                                <div className="service-icon">
                                    <img src={img3} />
                                </div>
                                <div className="service-content">
                                    <h4 className="service__title">{heading3}</h4>
                                    <p className="service__desc">
                                        {
                                            textContent3
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service-item service-item4">
                            <div className="service-item-inner">
                                <div className="service-icon">
                                    <img src={img4} />
                                </div>
                                <div className="service-content">
                                    <h4 className="service__title">{heading4}</h4>
                                    <p className="service__desc">
                                        {
                                            textContent4
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceArea;
