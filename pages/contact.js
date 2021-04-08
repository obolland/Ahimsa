import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Map from "../components/Map";


const ContactPage = () => {
    return (
        <Layout pageTitle="Ahimsa | Contact">
            <NavOne />
            <Contact />
            <Map />
            <Footer />
        </Layout>
    );
};

export default ContactPage;
