export function Footer(): JSX.Element {
  return (
    <footer className='container'>
      <section className='footer__section'>
        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
        <p>binarcarrental@gmail.com</p>
        <p>081-233-334-808</p>
      </section>
      <section className='footer__section'>
        <nav className='footer_section-nav'>
          {linksData.map(({ title, link }) => (
            <a className='nav-link' href={link} key={title}>
              {title}
            </a>
          ))}
        </nav>
      </section>
      <section className='footer__section'>
        <p>Connect with us</p>
        <ul className='footer__section-item pl-0'>
          {socialMediaData.map(({ title, icon }) => (
            <li key={title}>
              <img src={icon} alt={icon} />
            </li>
          ))}
        </ul>
      </section>
      <section className='footer__section'>
        <p>Copyright Binar 2022</p>
        <p>Rent a Car</p>
      </section>
    </footer>
  );
}

const linksData = [
  {
    title: 'Our services',
    link: '#our-services'
  },
  {
    title: 'Why Us',
    link: '#why-us'
  },
  {
    title: 'Testimonial',
    link: '#testimonial'
  },
  {
    title: 'FAQ',
    link: '#faq'
  }
] as const;

const socialMediaData = [
  {
    title: 'Facebook',
    icon: 'assets/icon/facebook.svg'
  },
  {
    title: 'Instagram',
    icon: 'assets/icon/instagram.svg'
  },
  {
    title: 'Twitter',
    icon: 'assets/icon/twitter.svg'
  },
  {
    title: 'Email',
    icon: 'assets/icon/email.svg'
  },
  {
    title: 'Twitch',
    icon: 'assets/icon/twitch.svg'
  }
] as const;
