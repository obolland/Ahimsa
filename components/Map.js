import React from 'react';

const Map = () => {
    return (
        <div>
        <section className="map-area">
            <div id="map">
                <iframe
                    src="https://www.google.com/maps/embed/v1/view?zoom=17&center=9.4456%2C-83.6480&key=AIzaSyCFiLQG1T0QfXNC7tUZZIvRmI99IlTPhWU" className="map" allowFullScreen="">
                    
                </iframe>
            </div>
        </section>

        <style jsx>{`
           .map {
                width: 100%;
                height: 100%
           } 
        `}</style>
        </div>
    );
};

export default Map;
