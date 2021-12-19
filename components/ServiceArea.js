import React from "react";

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
  textContent4,
}) => {
  return (
    <section className="service-area text-center" id="what">
      <div className="container">
        <div style={{ marginBottom: "70px" }}>
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
                    <p className="service__desc">{textContent1}</p>
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
                    <p className="service__desc">{textContent2}</p>
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
                    <p className="service__desc">{textContent3}</p>
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
                    <p className="service__desc">{textContent4}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md mx-auto mt-5">
            <h1 className="donation-title">Core Values & Guidelines</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mx-auto mt-4">
            <p>
              Although we promote a free way of life, we do have some basic
              rules which must be followed if you wish to stay here.
            </p>
          </div>
        </div>
        <div className="row mx-auto">
          <div className="col-md-6 mx-auto mt-4">
            <ul
              className="flex"
              style={{ listStyle: "circle", listStylePosition: "inside" }}
            >
              <b>
                <li>No violence - verbal, mental or physical.</li>
                <li>Vegan - no consumption or use of animal products.</li>
                <li>Be impeccable with your word.</li>
                <li>Don't take it personally :) And don't make assumptions.</li>
                <li>Treat others as you would expect to be treated.</li>
                <li>Respect one another and their belongings.</li>
                <li>Value all living things.</li>
                <li>Aim to live in harmony with all community members.</li>
                <li>Take only what you need, nothing more.</li>
                <li>
                  Be creative together and work in harmony to do greatness.
                </li>
                <li>Build a community that you're proud of.</li>
                <li>Breath, eat, sleep Ahimsa.</li>
              </b>
            </ul>
          </div>
        </div>
        <div className="row mx-auto">
          <div className="col-md-4 mx-auto mt-5">
            <img src="/images/009-appreciation.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
