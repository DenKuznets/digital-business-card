import avatarUrl from '../assets/avatar.jpg'

export default function Info() {
  return (
    <section className="info">
      <img src={avatarUrl} className="info--img filter" alt="avatar" />
      <h1 className="info--h1">Denis Kuznetsov</h1>
      <h3 className="info--h3">Trainee Frontend Developer</h3>      
      <a href="https://github.com/DenKuznets">Github</a>
      <div className='info-buttons-container'>
        <button className='email'><i></i>Email</button>
        <button className='linkedin'><i></i>Email</button>
      </div>
    </section>
  );
}
