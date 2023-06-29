import { tourDetails } from "../data";


const Tour = () => {
  return (
    <div className="section-center featured-center">
      {tourDetails.map((tour) => {
        return (
          <article key={tour.id} className="tour-card">
            <div className="tour-img-container">
              <img src={tour.image} className="tour-img" alt="" />
              <p className="tour-date">{tour.tourDate}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{tour.title}</h4>
              </div>
              <p>{tour.text}</p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{' '}
                  {tour.country}
                </p>
                <p>{tour.duration}</p>
                <p>{tour.price}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
export default Tour