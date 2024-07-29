import React from 'react'
import {Button, Navbar, NavbarBrand, TextInput} from "flowbite-react"
import {Link,useLocation} from "react-router-dom"
import { IoMdSearch } from "react-icons/io";
import { FaMoon } from "react-icons/fa";

function Header() {
    const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Sahand's</span>
            Blog
        </Link>
        <form action="">
            <TextInput type='text' placeholder='Search...'  className='hidden lg:inline' />
        </form>
            
        <Button className='w-20 h-11 lg:hidden' color="gray" pill>
        <IoMdSearch className='text-2xl'/>
        </Button>
        <div className="flex gap-5 mx-3 md:order-2">
            <Button className='w-12 h-10 hidden sm:inline ' color="gray" pill><FaMoon />
            </Button>
            <Link to="/signin">
                <Button gradientDuoTone="purpleToBlue">SignIn</Button>
            </Link>
            <Navbar.Toggle/>
        </div>
            <Navbar.Collapse>
                <Navbar.Link active={path==="/"} as={"div"}>
                    <Link to="/">Home</Link>
                </Navbar.Link >
                <Navbar.Link active={path==="/about"} as={"div"}>
                    <Link to="/about">About</Link>
                </Navbar.Link>
                <Navbar.Link active={path==="/projects"} as={"div"}>
                    <Link to="/projects">Projects</Link>
                </Navbar.Link>
            </Navbar.Collapse>
    </Navbar>
  )
}

export default Header