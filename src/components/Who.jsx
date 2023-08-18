import Projection from "../images/projection.png";
import AboutOne from "../images/about1.png";

const Who = () => {
  return (
    <div className="who">
      <div className="whoImg">
        <img src={AboutOne} alt="" />
        <img src={Projection} alt="" className="final" />
      </div>
      <div>
        <p className="w">Who We Are</p>
        <h2 className="h">Have A Project In Mind?</h2>
        <h2 className="h">Let`s Get To Work</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium
          doloremque laudantium totam rem apereaque abillo inventore veritatis
          quasi architecto beatae
        </p>
        <p>1. Business Planning, Strategy</p>
        <p>2. Financial Projections And Analysis</p>
        <p>3. International Business Opportunities</p>
      </div>
    </div>
  );
};

export default Who;
