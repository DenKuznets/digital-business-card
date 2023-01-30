import './Info.css'
import maillogoUrl from '../assets/mail.png'
import lkdnLogoUrl from '../assets/linkedin.png'
import avatarUrl from '../assets/avatar.jpg'


export default function Info() {
  return (
    <section className="info">
      <img src={avatarUrl} className="info--img filter" alt="avatar" />
      <h1 className="info--h1">Denis Kuznetsov</h1>
      <h3 className="info--h3">Trainee Frontend Developer</h3>
      <a className="info--a" href="https://github.com/DenKuznets">
        denkuznets.Github
      </a>
      <div className="info--buttons-container">
        <a href="mailto: denis.kyznecov@gmail.com" className="email">
          <img src={maillogoUrl} alt="mail-icon" /> Email
        </a>
        <a href="www.linkedin.com/in/DenKuznets" className="linkedin">
          <img src={lkdnLogoUrl} alt="linkedin-icon" />
          Linkedin
        </a>
      </div>
    </section>
  );
}
