import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';
import Logo from '@/common/components/Logo';
import LiveIcon from './LIveIcon';
import { navBarDatas } from './data';

const NavBar = () => {
  const router = useRouter();
  return (
    <ul className="flex w-824 items-center justify-between">
      <li>
        <Logo classProps="w-50 h-50" />
      </li>
      <LiveIcon size={60} />
      {navBarDatas.map((data) => {
        const { src, title, subTitle } = data;
        const isActive = router.pathname === src;
        return (
          <li
            key={uuidv4()}
            className={`text-center font-bold text-20 w-[20%] ${isActive ? 'text-primary-green' : ''}`}
          >
            <Link href={src} className="relative inline-block hover-trigger">
              <p className="mb-1">{title}</p>
              <span>{subTitle}</span>
              <div className="absolute top-0 left-16 w-60 h-60 rounded-full bg-primary-yellow opacity-0 hover-target -z-10" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavBar;
