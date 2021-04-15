

const Place = ({ mainTitle, mapUrl }) => {

  return (
    <div>
      <section className="place-area">
        <div className="container mt">
          <div className="section-heading text-center">
            <div className="col-lg-8 mx-auto">
              <div className="section-icon">
                  <img src="/images/section-icon.png" alt="section-icon" />
              </div>
              <h1 className='place__title mx-auto'>{mainTitle}</h1>
            </div>
            <img className="w-100 img-fluid" src={mapUrl} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Place;