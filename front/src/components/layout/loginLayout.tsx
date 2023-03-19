import { ReactNode } from 'react';

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className='p-4 bg-pink-300 w-full'>
        <nav className='p-2'>
          <h1 className='text-3xl  text-amber-50'>Skill Focus</h1>
        </nav>
      </header>
      <main className='p-4'>{children}</main>
    </>
  );
}
