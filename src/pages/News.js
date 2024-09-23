import introdyctoryNews from "../files/photo/introductoryNews.png";
import brNews1 from "../files/photo/brNews1.png";
import brNews2 from "../files/photo/brNews2.png";
import brNews3 from "../files/photo/brNews3.png";
import FNews1 from "../files/photo/FNews1.png";
import FNews2 from "../files/photo/FNews2.png";
import newsauthor from "../files/photo/newsauthor.png";

function News() {
  return (
    <main className="main">
      <section className="mediasection banner">
        <h2 className="banner_title">
          WeatherTrip.<span className="small">news</span>
        </h2>
        <p className="banner_subtitle">
          Your guide to weather: Accurate forecasts, storm warnings, tips for
          preparing and more.
        </p>
      </section>
      <section className="mediasection introductorynews">
        <div className="mainnews">
          <h2 className="mainnews_title">
            Lorem ipsum dolor sit amet consectetur. Amet tortor tempor feugiat
            elementum. Faucibus faucibus tempor habitasse amet auctor. Sit lorem
            a cursus a. Donec vitae massa et lectus dolor in.
          </h2>
          <div className="mainnews_photo">
            <img src={introdyctoryNews} alt="news"></img>
          </div>
          <div className="mainnews_author">
            <div className="news_author_photo">
              <img src={newsauthor} alt="author"></img>
            </div>
            <div className="about_author">
              <p className="author_title">Becky Ferreira</p>
              <span className="author_subtitle">Author</span>
            </div>
            <div className="about_author">
              <p className="author_title">BBC news</p>
              <span className="author_subtitle">26/06/2024</span>
            </div>
            <button className="button">
              <span className="button_text">Access article</span>
            </button>
          </div>
        </div>
        <div className="othernews">
          <div>
            <h4 className="othernews_title">BBC news</h4>
            <p className="othernews_text">
              Lorem ipsum dolor sit amet consectetur. Amet tortor tempor feugiat
              elementum. Faucibus faucibus tempor habitasse amet auctor. Sit
              lorem a cursus a.
            </p>
            <a className="othernews_link" href="#">
              Access article
            </a>
          </div>
          <div>
            <h4 className="othernews_title">BBC news</h4>
            <p className="othernews_text">
              Lorem ipsum dolor sit amet consectetur. Amet tortor tempor feugiat
              elementum. Faucibus faucibus tempor habitasse amet auctor. Sit
              lorem a cursus a.
            </p>
            <a className="othernews_link" href="#">
              Access article
            </a>
          </div>
          <div>
            <h4 className="othernews_title">BBC news</h4>
            <p className="othernews_text">
              Lorem ipsum dolor sit amet consectetur. Amet tortor tempor feugiat
              elementum. Faucibus faucibus tempor habitasse amet auctor. Sit
              lorem a cursus a.
            </p>
            <a className="othernews_link" href="#">
              Access article
            </a>
          </div>
          <div>
            <h4 className="othernews_title">BBC news</h4>
            <p className="othernews_text">
              Lorem ipsum dolor sit amet consectetur. Amet tortor tempor feugiat
              elementum. Faucibus faucibus tempor habitasse amet auctor. Sit
              lorem a cursus a.
            </p>
            <a className="othernews_link" href="#">
              Access article
            </a>
          </div>
        </div>
      </section>
      <section className="mediasection">
        <h3 className="newsBlockTitle">Breaking News</h3>
        <div className="newsBlock">
        <div className="someNew">
          <img src={brNews1} alt="news"></img>
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
      </section>
      <section className="mediasection">
      <h3 className="newsBlockTitle">Featured</h3>
      <div className="newsBlock featuredNews">
      <div className="someNew">
          <img src={FNews1}  alt="news"></img>
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
          <img src={FNews2}  alt="news"></img>
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
      </section>
    </main>
  );
}

export { News };
