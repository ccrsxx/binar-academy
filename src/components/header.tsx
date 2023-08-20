import { FiGithub } from 'react-icons/fi';
import { Logo } from './logo';

export function Header(): JSX.Element {
  return (
    <header className='flex justify-between items-center shadow-lg my-4'>
      <div className='flex gap-2 items-center'>
        <Logo />
        <div>
          <h1 className='font-bold'>Binar Academy</h1>
          <p className='-mt-1 text-sm text-gray-200'>
            at{' '}
            <a
              className='custom-underline'
              href='https://ccrsxx.me'
              target='_blank'
            >
              ccrsxx.me
            </a>
          </p>
        </div>
      </div>
      <div>
        <a
          className='smooth-tab grid text-2xl'
          href='https://github.com/ccrsxx'
          target='_blank'
        >
          <FiGithub />
        </a>
      </div>
    </header>
  );
}
