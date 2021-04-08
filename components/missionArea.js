import React from 'react';

const MissionArea = ({
    mainTitle,
    heading1,
    heading2,
    heading3,
    content1,
    content2,
    content3,
    img1Url,
    img2Url,
    img3Url
}) => {
    return (
        <section className="service-area mission-area text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="section-heading service-heading">
                            <div className="section-icon">
                                <img src="/images/section-icon.png" alt="section-icon" />
                            </div>
                            <h2 className="section__title">{mainTitle}</h2>
                            <p className="section__meta">is our passion</p>
                        </div>
                    </div>
                </div>
                <div className="row service-wrap">
                    <div className="col">
                        <div className="service-item service-item1">
                            <div className="service-item-inner">
                                <div className="service-icon">
                                    <img src={img1Url} />
                                </div>
                                <div className="service-content">
                                    <h4 className="service__title">{heading1}</h4>
                                    <div className="service__desc">
                                      <ul>
                                          { content1.map(item => {
                                              return <li key={item}>{item}</li>
                                          })

                                          }
                                      </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service-item service-item2">
                            <div className="service-item-inner">
                                <div className="service-icon">
                                    <img src={img2Url} />
                                </div>
                                <div className="service-content">
                                    <h4 className="service__title">{heading2}</h4>
                                    <div className="service__desc">
                                        <ul>
                                            { content2.map(item => {
                                                return <li key={item}>{item}</li>
                                            })
                                          }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service-item service-item3">
                            <div className="service-item-inner">
                                <div className="service-icon">
                                    <img src={img3Url} />
                                </div>
                                <div className="service-content">
                                    <h4 className="service__title">{heading3}</h4>
                                    <div className="service__desc">
                                        <ul>
                                            { content2.map(item => {
                                                return <li key={item}>{item}</li>
                                            })
                                          }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className='row'>
                    <div className='col-md mx-auto mission-margin'>
                        <img src="/images/section-icon.png" alt="section-icon" />
                    </div>
                </div>
                <div className="row">
                    <div className='col-md mx-auto'>
                        <h1 className='donation-title'><b>100%</b> of your donation</h1>
                    </div>
                </div>
                <div className="row">
                    <div className='col-md-4 mx-auto mt-4'>
                        <p>
                          Will be used to preserve the rainforest and support indiginious peoples.
                          All team members work on a volutary bases.
                        </p>
                    </div>
                </div>
                <div className="row mx-auto">
                    <div className='col-md-4 mx-auto mt-4'>
                        <img src='/images/009-appreciation.svg' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 mt-5">
                        <div className="button-shared">
                            <a href="/donate" className="theme-btn">donate
                                now</a>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default MissionArea;
