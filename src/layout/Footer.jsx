import logo from "../files/photo/logo.png";
import github from "../files/svg/github.svg";
import instagram from "../files/svg/instagram.svg";
import linkedin from "../files/svg/linkedin.svg";
import "../css/main.css";

function Footer() {
  return (
    <footer className="footer">
      <img className="footer_logo" src={ logo } alt="logo" />
      <ul className="footerNav">
        <li className="footerNav_list"><a className="footerLink" href="#">Usless Link</a></li>
        <li className="footerNav_list"><a className="footerLink" href="#">Usless Link</a></li>
        <li className="footerNav_list"><a className="footerLink" href="#">Usless Link</a></li>
        <li className="footerNav_list"><a className="footerLink" href="#">Usless Link</a></li>
      </ul>
      <ul className="footerNav">
        <li className="footerNav_list"><a className="footerLink" href="https://www.linkedin.com/feed/"><object className="footerLink_svg" type="image/svg+xml" data= { linkedin } alt="Description of the image"></object></a></li>
        <li className="footerNav_list"><a className="footerLink" href="#"><object className="footerLink_svg" type="image/svg+xml" data= { instagram } alt="Description of the image"></object></a></li>
        <li className="footerNav_list"><a className="footerLink" href="#"><object className="footerLink_svg" type="image/svg+xml" data= { github } alt="Description of the image"></object></a></li>
      </ul>
      <p className="footer_title">
        Website developed by João Marcos for personal and non-commercial
        purposes, follow me on social media
      </p>
    </footer>
  );
}
export { Footer };
