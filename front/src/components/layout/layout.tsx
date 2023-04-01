import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  NavBar: ReactNode;
};

export default function Layout({ children, NavBar }: Props) {
  return (
    <>
      <header className='p-3 bg-pink-300 w-full fixed sm:relative z-10'>{NavBar}</header>
      <main className='p-4  top-[100px] relative sm:top-0'>{children}</main>
    </>
  );
}
