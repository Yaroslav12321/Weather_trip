import { NavLink } from 'react-router-dom';
import { WeatherForMainApp } from "../components/WeatherForMainApp";
import brNews1 from "../files/photo/brNews1.png";
import brNews2 from "../files/photo/brNews2.png";
import brNews3 from "../files/photo/brNews3.png";

function WeatherApp() {
  return (
    <main>
        <WeatherForMainApp />
        <section className="mediasection">
        <h3 className="newsBlockTitle">Breaking News</h3>
        <div className="newsBlock">
        <div className="someNew">
          <img src={brNews1}  alt="news"></img>
          <h4 className="othernews_title">BBC news</h4>
          <p className="othernews_text">
            Lorem ipsum dolor sit amet consectetur. Amet tortor tempor feugiat
            elementum. Faucibus faucibus tempor habitasse amet auctor. Sit lorem
            a cursus a.
          </p>
          <a className="othernews_link" href="#">
              Access article
            </a>
        </div>
        <div className="someNew">
          <img src={brNews2}  alt="news"></img>
          <h4 className="othernews_title">BBC news</h4>
          <p className="othernews_text">
            Lorem ipsum dolor sit amet consectetur. Amet tortor tempor feugiat
            elementum. Faucibus faucibus tempor habitasse amet auctor. Sit lorem
            a cursus a.
          </p>
          <a className="othernews_link" href="#">
              Access article
            </a>
        </div>
        <div className="someNew">
          <img src={brNews3}  alt="news"></img>
          <h4 className="othernews_title">BBC news</h4>
          <p className="othernews_text">
            Lorem ipsum dolor sit amet consectetur. Amet tortor tempor feugiat
            elementum. Faucibus faucibus tempor habitasse amet auctor. Sit lorem
            a cursus a.
          </p>
          <a className="othernews_link" href="#">
              Access article
            </a>
        </div>
        </div>
        <button className="newsBtn">
          <span ><NavLink to='/News' className="newsBtn_text">All news</NavLink></span></button>
      </section>
    </main>
  );
}

export { WeatherApp };
