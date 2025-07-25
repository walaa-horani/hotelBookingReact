import React from "react";
import logo from "../assets/logo.png"
import { useNavigate, useLocation } from "react-router-dom"
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";
import { FaBook } from "react-icons/fa";

const Navbar = () => {
    
    console.log("Navbar component mounted");
const navigate = useNavigate()
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/hotels' },
        { name: 'Experience', path: '/experience' },
        { name: 'About', path: '/about' },
    ];

   

    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const {openSignIn} = useClerk()

    const {user} = useUser()
        
        const location = useLocation()

    React.useEffect(() => {
        
        const handleScroll = () => {
             if (location.pathname === "/") {
            setIsScrolled(window.scrollY > 10);
             }
             else{
                 setIsScrolled(true);
             }
            
        };

          handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);


   
    return (
       
         
            <nav className={`fixed top-0 left-0 w-full flex  justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>

                {/* Logo */}
                <a href="/" >
                    <img src={logo} alt="logo" className={` w-40   ${isScrolled && "invert opacity-80"}`} />
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}>
                            {link.name}
                            <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </a>
                    ))}
                   { user && <button  onClick={() => navigate('/dashboard')}   className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} transition-all`}>
                        Dashoboard
                    </button>}
                </div>

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-4">
                    <svg className={`h-6 w-6 text-white transition-all duration-500 ${isScrolled ? "invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                   
                   {user ? (

                    <UserButton >
                        

                        
                        <UserButton.MenuItems >

 
                            <UserButton.Action  label="My Bookings" labelIcon={<FaBook />}     onClick={()=> navigate("/my-bookings") }/>

                        </UserButton.MenuItems>
                         
                    </UserButton>
                   ) :
                        (<button   onClick={openSignIn}  className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${isScrolled ? "text-white bg-black" : "bg-white text-black"}`}>
                        Login
                    </button>)  

                }
                    
                </div>

                {/* Mobile Menu Button */}
                
          
                <div className="flex items-center gap-3 md:hidden">

                    {user && (

                         <UserButton >
                        

                        
                        <UserButton.MenuItems >

 
                            <UserButton.Action  label="My Bookings" labelIcon={<FaBook />}     onClick={()=> navigate("/my-booking") }/>

                        </UserButton.MenuItems>
                         
                    </UserButton>
                    )}
                    <svg onClick={() => setIsMenuOpen(!isMenuOpen)} className={`h-6 w-6 cursor-pointer text-white ${isScrolled ? "invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                </div>

                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <button className=" !bg-white !text-black absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </a>
                    ))}

                   
                   { user && <button   onClick={() => navigate('/dashboard')} className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
                        Dashboard
                    </button>}

                 { !user &&  <button     className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
                        Login
                    </button>}
                </div>
            </nav>
       
    );
}

export default Navbar