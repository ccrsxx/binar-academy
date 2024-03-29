import Image from 'next/image';
import { FiGithub } from 'react-icons/fi';

export function Header(): JSX.Element {
  return (
    <header className='flex justify-between items-center shadow-lg my-4'>
      <div className='flex gap-2 items-center'>
        <Image src='/logo.svg' width={48} height={48} alt='Logo' />
        <div>
          <h1 className='font-bold'>Binar Academy</h1>
          <p className='-mt-1 text-sm text-gray-200'>
            at{' '}
            <a
              className='custom-underline'
              href='https://risalamin.com'
              target='_blank'
            >
              risalamin.com
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
