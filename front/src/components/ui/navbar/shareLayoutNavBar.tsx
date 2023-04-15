import Link from 'next/link';

export default function ShareLayoutNavBar() {
  const aStyle = 'text-lg leading-10  text-amber-50 hover:text-gray-200';
  return (
    <nav className='p1 flex flex-row gap-4 align-bottom'>
      <h1 className='text-3xl text-amber-50'> Skill Focus</h1>
      <Link href='/dashboad' className={aStyle}>
        Dashboad
      </Link>
      <a href='/users' className={aStyle}>
        Users
      </a>
      <Link href='/project' className={aStyle}>
        Project
      </Link>
      <Link href='skill' className={aStyle}>
        Skill
      </Link>
    </nav>
  );
}
