import React, {Component} from 'react';
import Link from 'next/link';

class NavOne extends Component {
    constructor(){
        super()
        this.state = {
          sticky: false
        };
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);

        //Mobile Menu
        this.mobileMenu();
    }

    handleScroll = () => {

      if (window.scrollY > 100) {
        this.setState({
            sticky: true
        });
      } else if (window.scrollY < 100) {
        this.setState({
            sticky: false
        });
      }

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
            <div>
                <header className="header-area">
                    <div className="header-top-action">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="top-action-content">
                                        <div className="info-box info-box-1 d-flex align-items-center">
                                            <ul className="d-flex align-items-center">
                                                <li><a href="#"><i
                                                    className="fa fa-envelope"></i>info@ahimsa.garden</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-lg-7">
                                    <div className="top-action-content info-action-content">
                                        <div className="info-box info-box-2 d-flex align-items-center justify-content-end">
                                            <ul className="top-action-list d-flex align-items-center">
                                                <li className="action__text"><a href="#">login</a></li>
                                                <li className="action__text"><a href="#">register</a></li>
                                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className={`header-top header-menu-action ${this.state.sticky ? 'header-fixed' : ''}`}>
                        <div className="container">
                            <div className="row ostion-top-wrap">
                                <div className="col-lg-5 col-sm-5 site-branding">
                                    <div className="logo-action d-flex align-items-center">
                                        <div className="ostion-logo">
                                            <Link href="/">
                                                <a>
                                                    <img src="/images/Logo_Ahimsa_black.png" alt="Ahimsa" title="Ahimsa" />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="header-btn ml-auto">
                                            {/* <Link href="/donate">
                                                <a className="theme-btn">donate now</a>
                                            </Link> */}
                                            <div className="powr-stripe-button ml-5" id="f04c986b_1618559744"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-sm-7 ostion-menu">
                                    <div className="ostion-menu-innner">
                                        <div className="ostion-menu-content">
                                            <div className="navigation-top">
                                                <nav className="main-navigation">
                                                <ul>
                                                    {/* <li className="active"><Link href="/"><a>Home</a></Link></li>                */}
                                                    <li><Link href="/why"><a>why</a></Link></li>
                                                    <li><Link href="/what"><a>what</a></Link></li>
                                                    <li><Link href="/who"><a>who</a></Link></li>
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
            </div>
        );
    }
}

export default NavOne;