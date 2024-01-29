import Link from 'next/link';
import { BsChevronRight } from 'react-icons/bs';
const CartLink = ({ cartEmpty = false }) => {
  const colStyle = cartEmpty ? 'col-span-12' : 'col-span-9 w-[74%] ';
  return (
    <Link
      href="/productshop"
      className={`font-bold text-primary-green flex items-center justify-end hover:opacity-60 mb-32 ${colStyle}`}>
      <p>繼續購物</p>
      <BsChevronRight
        size={16}
        className=" font-bold text-primary-green"
        style={{
          strokeWidth: 2,
        }}
      />
    </Link>
  );
};

export default CartLink;
