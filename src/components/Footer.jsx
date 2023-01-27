import twitUrl from "../assets/Twitter.png";
import fbUrl from "../assets/Facebook.png";
import instUrl from "../assets/instagram.png";
import gitUrl from "../assets/GitHub.png";
import "./Footer.css";

export default function Footer() {
  return (
    <section className="Footer">
      <ul>
        <li>
          <a href="https://twitter.com">
            <img src={twitUrl} alt="twitter logo" />
          </a>
        </li>
        <li>
          <a href="https://facebook.com">
            <img src={fbUrl} alt="facebook logo" />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/denis_kyznecov">
            <img src={instUrl} alt="instagram logo" />
          </a>
        </li>
        <li>
          <a href="https://github.com/DenKuznets">
            <img src={gitUrl} alt="github logo" />
          </a>
        </li>
      </ul>
    </section>
  );
}
