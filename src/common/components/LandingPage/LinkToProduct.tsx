import Link from 'next/link';
import { BsHandIndex } from 'react-icons/bs';
type LinkToProductProps = {
  path: string;
  text: string;
};
const LinkToProduct = ({ path, text }: LinkToProductProps) => {
  return (
    <Link
      href={path}
      className="group flex items-center justify-end gap-8 self-start col-start-11 col-end-13 mb-40">
      <p className="font-bold">{text}</p>
      <BsHandIndex className="rotate-90 w-44 h-44 bg-primary-red text-white px-10 rounded-full group-hover:bg-primary-yellow" />
    </Link>
  );
};

export default LinkToProduct;
