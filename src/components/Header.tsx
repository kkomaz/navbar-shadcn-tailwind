import reactLogo from '@/assets/react.svg';
import { Button } from './ui/button';
import MobileNav from './MobileNav';
const Header = () => {
  return (
    <div className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <img src={reactLogo} alt="react-logo" />
        <nav className="hidden md:flex-between w-full max-w-xs">
          <ul className="flex items-start gap-5 md:flex-between md:flex-row flex-col">
            <li>Home</li>
            <li>Learn More</li>
            <li>Profile</li>
          </ul>
        </nav>

        <div className="flex justify-end gap-3 items-center">
          <Button>Sign In</Button>
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
