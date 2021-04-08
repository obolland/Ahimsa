import React from 'react';

const Contact = () => {
    return (
        <section className="contact-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-heading">
                            <div className="section-icon">
                                <img src="/images/section-icon.png" alt="section-icon" />
                            </div>
                            <h2 className="section__title">Get in Touch With Us</h2>
                            <p className="section__meta">Write a message</p>
                            <p className="section__desc">
                                If you'd like more info about volunteering,
                                how you can better support us or you simple want to say hello, we'd love to hear from you!
                                Please bare in mind we are a tiny community without wifi, so it may take a couple of days
                                for us to get back to you.
                            </p>
                            <ul className="section__list">
                                {/* <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-pinterest"></i></a></li> */}
                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-shared">
                            <form action="#" method="post">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 form-group">
                                        <input className="form-control" type="text" name="name" placeholder="Full Name" />
                                    </div>

                                    <div className="col-lg-6 col-sm-6 form-group">
                                        <input className="form-control" type="email" name="email"
                                               placeholder="Email Address" />
                                    </div>

                                    <div className="col-lg-12 form-group">
                                        <input className="form-control" type="number" name="phone"
                                               placeholder="Phone Number" />
                                    </div>

                                    <div className="col-lg-12 col-sm-12 form-group">
                                        <textarea className="textarea" name="message"
                                                  placeholder="Write a Message"></textarea>
                                    </div>

                                    <div className="col-lg-12 col-sm-12">
                                        <button className="theme-btn submit__btn" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row contact-detail-action">
                    <div className="col-lg-4">
                        <div className="contact-item contact-item1">
                            <h3 className="contact__title">About</h3>
                            <p className="contact__desc">
                                We are Ahimsa - a tiny community in the heart of Costa Rica dedicated to protecting rainforrest
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="contact-item contact-item2">
                            <h3 className="contact__title">Address</h3>
                            <p className="contact__desc">
                                Ahimsa Tribe Association,<br />
                                Jungle Road 13,<br />
                                81726 San Jose,<br />
                                Costa Rica
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="contact-item contact-item3">
                            <h3 className="contact__title">Contact</h3>
                            <p className="contact__desc">
                                email@comething.com <br />
                                whatsApp +41 76 468 30 33
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Contact;
