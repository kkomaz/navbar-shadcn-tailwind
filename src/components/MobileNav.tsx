import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import menuButton from '@/assets/menu.svg';
function MobileNav() {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <img src={menuButton} alt="menu-button" />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg:white md:hidden">
          <ul className="flex items-start gap-5 md:flex-between md:flex-row flex-col">
            <li>Home</li>
            <li>Learn More</li>
            <li>Profile</li>
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default MobileNav;
