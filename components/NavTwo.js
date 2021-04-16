import React, {Component} from 'react';
import Link from 'next/link';

class NavTwo extends Component {
    constructor(){
        super()
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);

        //Mobile Menu
        this.mobileMenu();
    }

    mobileMenu = () => {
        //Mobile Menu Toggle
        let mainNavToggler = document.querySelector(".mobile-menu-toggle");
        let mainNav = document.querySelector(".side-nav-container");

        mainNavToggler.addEventListener("click", function () {
            mainNav.classList.add('active');
        });

        //Close Mobile Menu
        let closeMenu = document.querySelector(".side-menu-close");
            closeMenu.addEventListener("click", function () {
            mainNav.classList.remove('active');
        });

    }

    render() {
        return (
            <header className="header-area header-area2">
                <div className='header-top header-menu-action header-fixed'>
                    <div className="container">
                        <div className="row ostion-top-wrap">
                            <div className="col-lg-5 col-sm-5 site-branding">
                                <div className="logo-action d-flex align-items-center">
                                    <div className="ostion-logo">
                                        <Link href="/">
                                            <a href="">
                                                <img src="/Logo_Ahimsa_rev003.png" alt="Ahimsa" title="Ahimsa" />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-sm-7 ostion-menu">
                                <div className="ostion-menu-innner">
                                    <div className="ostion-menu-content">
                                        <div className="navigation-top">
                                            <nav className="main-navigation">
                                                <ul>               
                                                    <li><Link href="/#why"><a>why</a></Link></li>
                                                    <li><Link href="/#what"><a>what</a></Link></li>
                                                    <li><Link href="/#who"><a>who</a></Link></li>
                                                    <li><Link href="/contact"><a>contact</a></Link></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="mobile-menu-toggle">
                                        <i className="fa fa-bars"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="side-nav-container">
                    <div className="humburger-menu">
                        <div className="humburger-menu-lines side-menu-close"></div>
                    </div>
                    <div className="side-menu-wrap">
                        <ul className="side-menu-ul">
                            <li className="sidenav__item"><Link href="/"><a>home</a></Link></li>
                            <li className="sidenav__item"><Link href="/#why"><a>why</a></Link></li>
                            <li className="sidenav__item"><Link href="/#what"><a>what</a></Link></li>
                            <li className="sidenav__item"><Link href="/#who"><a>who</a></Link></li>
                            <li className="sidenav__item"><Link href="/contact"><a>contact</a></Link></li>
                        </ul>
                        <ul className="side-social">
                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        </ul>
                        <div className="side-btn">
                            <Link href="/donate"><a className="theme-btn">donate now</a></Link>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default NavTwo;