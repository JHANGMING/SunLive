import Link from 'next/link';
import { BsDisplay } from 'react-icons/bs';
import { navBarDatas } from './data';
import Logo from '@/common/components/Logo';
import { useRouter } from 'next/router';
const NavBar = () => {
  const router = useRouter();
  // const liveDetailData = useSelector(
  //   (state: RootState) => state.product.liveDetailData
  // );
  return (
    <ul className="flex w-824 items-center justify-between">
      <li>
        <Logo classProps="w-50 h-50" />
      </li>
      <div className=" relative">
        <BsDisplay size={90} className=" text-primary-red" />
        <p className=" font-bold text-24 text-primary-green absolute top-18 left-18 shiny-scale-effect">
          Live
        </p>
      </div>
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
