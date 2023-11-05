import Link from 'next/link';

export function Header(): JSX.Element {
  return (
    <header className='sticky-top header'>
      <nav className='navbar navbar-expand-lg'>
        <div className='container'>
          <Link className='navbar-brand' href='/'>
            Rent a Car
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasNavbar'
            aria-controls='offcanvasNavbar'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='offcanvas offcanvas-end'
            tabIndex={-1}
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'
          >
            <div className='offcanvas-header'>
              <h5
                className='offcanvas-title fw-semibold'
                id='offcanvasNavbarLabel'
              >
                Rent a Car
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='offcanvas'
                aria-label='Close'
              ></button>
            </div>
            <div className='offcanvas-body'>
              <ul className='navbar-nav ms-auto'>
                {linksData.map(({ title, link }) => (
                  <li className='nav-item' key={title}>
                    <a href={link} className='nav-link active'>
                      {title}
                    </a>
                  </li>
                ))}
                <button className='btn btn-success me-auto'>Register</button>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
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
