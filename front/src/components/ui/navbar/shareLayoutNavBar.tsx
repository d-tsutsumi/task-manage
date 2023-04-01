export default function ShareLayoutNavBar() {
  const aStyle = 'text-lg leading-10  text-amber-50 hover:text-gray-200';
  return (
    <nav className='p1 flex flex-row gap-4 align-bottom'>
      <h1 className='text-3xl text-amber-50'> Skill Focus</h1>
      <a href='#' className={aStyle}>
        Dashboad
      </a>
      <a href='#' className={aStyle}>
        Users
      </a>
      <a href='#' className={aStyle}>
        Project
      </a>
      <a href='#' className={aStyle}>
        Skill
      </a>
    </nav>
  );
}
