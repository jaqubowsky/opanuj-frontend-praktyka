import { useContext } from 'react';
import { BsBag } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';

interface CartBagProps {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CartBag = ({ setIsSidebarOpen }: CartBagProps) => {
  const { itemAmount } = useContext(CartContext);

  return (
    <div
      onClick={() => setIsSidebarOpen((isOpen) => !isOpen)}
      className="cursor-pointer flex relative mr-8"
    >
      <BsBag className="text-2xl" />
      <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
        {itemAmount}
      </div>
    </div>
  );
};
