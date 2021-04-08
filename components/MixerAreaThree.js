import React, {Component} from 'react';
import ModalVideo from 'react-modal-video';

class MixerAreaThree extends Component {
    constructor(props){
        super(props)
        this.state = {
            isOpen: false
        }
    }

    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        const { mainTitle, subTitle, mainText, videoImg } = this.props;
        return (
            <section className="mixer-area mixer-area3 mixer-area4" id="why">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <div className="section-icon">
                                    <img src="/images/section-icon.png" alt="section-icon"/>
                                </div>
                                <h2 className="section__title text__white">{mainTitle}</h2>
                                <p className="section__meta">{subTitle}</p>
                                <p className="section__desc text__white">
                                    {mainText}
                                </p>
                                <a href="#" className="theme-btn">Donate Now</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mixer-video-content">
                                <img src={videoImg} alt=""/>
                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='RQu7jpcNUWI'
                                            onClose={() => this.setState({isOpen: false})}/>
                                <div onClick={this.openModal} className="mfp-iframe video-play-btn" title="Play Video">
                                    <i
                                        className="fa fa-play"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

export default MixerAreaThree;
