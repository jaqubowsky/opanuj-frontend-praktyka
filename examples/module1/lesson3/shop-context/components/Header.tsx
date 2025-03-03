import { CiShop } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { useRenderLogging } from '../tests/useRenderLogging';
import { CartBag } from './CartBag';

interface HeaderProps {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ setIsSidebarOpen }: HeaderProps) => {
  useRenderLogging('Header'); // Code required for acceptance testing

  return (
    <header
      className={`bg-none py-6 fixed w-full z-10 lg:px-8 transition-all`}
      data-testid="shop-header"
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={`/`} className="cursor-pointer ml-8">
          <CiShop className="text-3xl " />
        </Link>
        <CartBag setIsSidebarOpen={setIsSidebarOpen} />
      </div>
    </header>
  );
};

export default Header;
