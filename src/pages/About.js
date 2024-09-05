import authorPhoto from "../files/photo/authorPhoto.png";
import aboutInfoPhoto from "../files/photo/aboutInfoPhoto.png";
import github from "../files/svg/github.svg";
import linkedin from "../files/svg/linkedin.svg";

function About() {
  return (
    <main className="main mediasection mainAbout">
      <h1 className="mainTitle">WEB DEVELOPER</h1>
      <section className="aboutInfo">
        <div className="infoSpace">
          <img
            className="infoSpace_img"
            src={authorPhoto}
            alt="author photo"
          ></img>
        </div>
        <div className="infoSpace">
          <span className="infoSpace_title"><span className="hash">#</span>BuildTheWeb</span>
          <p className="infoSpace_text">
            build bridges that connect people to information
          </p>
          <div><img src= { aboutInfoPhoto } alt="photo"></img></div>
        </div>
        <div className="infoSpace"></div>
      </section>
      <section className="linkBlock">
        <button className="linkBtn"><span className="linkBtn_text">Portfolio</span></button>
        <div className="socialLink">
        <object className="socialLink_svg" type="image/svg+xml" data= { linkedin } alt="Description of the image"></object>
        <object className="socialLink_svg" type="image/svg+xml" data= { github } alt="Description of the image"></object>
        </div>
      </section>
    </main>
  );
}

export { About };
