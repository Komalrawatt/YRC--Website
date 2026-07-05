import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import mainlogo from "../assets/mainlogo.jpg"
import { useNavigate } from 'react-router-dom'


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import ListItem from './ListItem'
import { Menu, X } from 'lucide-react'

const activities = [
  {
    title: "Past Events",
    href: "/past-events",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Ongoing Events",
    href: "/#Ongoing",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Upcoming Events",
    href: "/upcoming-events",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
]

// const teams = [
//   {
//     title: "Coordinators",
//     href: "/coordinators",
//     description:
//       "A modal dialog that interrupts the user with important content and expects a response.",
//   },
//   {
//     title: "Members",
//     href: "/members",
//     description:
//       "For sighted users to preview content available behind a link.",
//   },
//   {
//     title: "Volunteers",
//     href: "/volunteers",
//     description:
//       "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//   },
//   {
//     title: "Alumni",
//     href: "/alumni",
//     description: "Visually or semantically separates content.",
//   },
// {
//   title: "Advisors",
//   href: "/advisors",
//   description:
//     "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
// },
// {
//   title: "Mentors",
//   href: "/mentors",
//   description:
//     "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
// },
// ]


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Function to close menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-3 md:p-5 sticky top-0 z-50 w-full">
      {/* Logo Section */}
      <div className='flex justify-between items-center w-full md:w-auto'>
        <div
          onClick={() => {
            navigate("/");
            closeMenu();
          }}
          className='logo cursor-pointer text-xl md:text-2xl flex gap-1.5 hover:scale-105 transition duration-200'
        >
          <div>
            <img className='h-6 w-6 md:h-7 md:w-7' src={mainlogo} alt="" />
          </div>
          <h2 className="roboto text-[#41080e]">YRC JCBUST</h2>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Navigation Menu */}
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto items-center gap-4 mt-4 md:mt-0`}>
        <NavigationMenu>
          <NavigationMenuList className="flex-col md:flex-row">
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} as={Link} to="/">
                <Link className='hover:cursor-pointer hover:text-[#A7101F]' to="/" onClick={closeMenu}>
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} as={Link} to="/about">
                <Link className='hover:cursor-pointer hover:text-[#A7101F]' to="/#about" onClick={closeMenu}>
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className='hover:cursor-pointer hover:text-[#A7101F]'>
                Activities
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[280px] sm:w-[340px] md:w-[500px] lg:w-[600px] gap-3 p-4 
                               grid-cols-1 md:grid-cols-2 mx-auto">
                  {activities.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      to={component.href}
                      onClick={closeMenu}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} as={Link} to="/gallery">
                <Link className='hover:cursor-pointer hover:text-[#A7101F]' to="/gallery" onClick={closeMenu}>
                  Gallery
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} as={Link} to="/team">
                <Link className='hover:cursor-pointer hover:text-[#A7101F]' to="/team" onClick={closeMenu}>
                  Teams
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} as={Link} to="/contact">
                <Link className='hover:cursor-pointer hover:text-[#A7101F]' to="/contact" onClick={closeMenu}>
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        {/* Volunteer Button */}
        <button className='w-full md:w-auto mt-4 md:mt-0' onClick={closeMenu}>
          <Button onClick={() => { navigate('/volunteers') }}
            className='bg-[#A7101F] w-full md:w-auto text-1xl hover:bg-[#E4002A] cursor-pointer transition duration-100 ease-out hover:scale-90 mr-0 md:mr-3'>
            Volunteer Now
          </Button>
        </button>
      </div>
    </div>
  );
};
// AF1740
// A31D1D
// F95454
// C7253E
// A02334
// D80032  *
// EB1D36
// DA0037

export default Navbar