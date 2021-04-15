import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [formData, setFormData] =
  useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const { name, email, phone, message } = formData;

  const onSubmit = (event) => {
    event.preventDefault();
    
    emailjs.sendForm('service_46qv27g', 'template_frh3tfw', event.target, 'user_CeUFgLS0y9mViIM0qPkKp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    })

    toast.success("Your message has been sent!")
  }

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData({ ...formData, [name]: value })
  }

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
                            <form onSubmit={onSubmit}>
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 form-group">
                                        <input 
                                            className="form-control"
                                            onChange={handleChange}
                                            value={name}
                                            type="text"
                                            name="name"
                                            placeholder="Full Name" />
                                    </div>

                                    <div className="col-lg-6 col-sm-6 form-group">
                                        <input
                                            className="form-control"
                                            onChange={handleChange}
                                            value={email}
                                            type="email"
                                            name="email"
                                            placeholder="Email Address" />
                                    </div>

                                    <div className="col-lg-12 form-group">
                                        <input
                                            className="form-control"
                                            onChange={handleChange}
                                            value={phone}
                                            type="number"
                                            name="phone"
                                            placeholder="Phone Number" />
                                    </div>

                                    <div className="col-lg-12 col-sm-12 form-group">
                                        <textarea
                                            className="textarea"
                                            onChange={handleChange}
                                            value={message}
                                            type="text"
                                            name="message"
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
                                info@ahimsa.garden <br />
                                whatsApp +41 76 468 30 33
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};
export default Contact;
