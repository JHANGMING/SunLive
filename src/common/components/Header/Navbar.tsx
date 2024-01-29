import Link from 'next/link';
import { navBarDatas } from './data';
import Logo from '@/common/components/Logo';
import { useRouter } from 'next/router';
const NavBar = () => {
  const router = useRouter();
  return (
    <ul className="flex w-824 items-center justify-between">
      <li>
        <Logo />
      </li>
      {navBarDatas.map((data) => {
        const { src, title, subTitle } = data;
        const isActive = router.pathname === src;
        return (
          <li
            key={subTitle}
            className={`text-center font-bold text-20 w-[20%] ${isActive ? 'text-primary-green' : ''}`}>
            <Link href={src} className="relative hover-trigger">
              <p className="mb-1">{title}</p>
              <span>{subTitle}</span>
              <div className="absolute top-0 left-16 w-60 h-60 rounded-full bg-primary-yellow opacity-0 hover-target -z-10"></div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavBar;
