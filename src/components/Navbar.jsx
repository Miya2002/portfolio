import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";


const navItems = [
  { name: "Home", id: "home" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];


function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();


  const closeMenu = () => {
    setMenuOpen(false);
  };


  const toggleMenu = () => {
    setMenuOpen((current) => !current);
  };



  useEffect(() => {

    const handleEscape = (event) => {

      if(event.key === "Escape"){
        closeMenu();
      }

    };


    const handleResize = () => {

      if(window.innerWidth > 760){
        closeMenu();
      }

    };


    window.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);


    return () => {

      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);

    };


  }, []);




  useEffect(() => {

    document.body.style.overflow = menuOpen ? "hidden" : "";


    return () => {

      document.body.style.overflow = "";

    };


  }, [menuOpen]);





  const handleNavClick = (id) => {

    closeMenu();


    if(location.pathname === "/"){

      const section = document.getElementById(id);

      if(section){

        section.scrollIntoView({
          behavior:"smooth"
        });

      }

    }

  };





  return (

    <>


<header className={`navbar ${menuOpen ? "navbar-menu-open" : ""}`}>


{/* LOGO */}

{
location.pathname === "/" ?

(
<a 
href="#home"
className="logo"
onClick={() => handleNavClick("home")}
>
TA<span>.</span>
</a>
)

:

(
<Link 
to="/"
className="logo"
>
TA<span>.</span>
</Link>
)

}




{/* DESKTOP NAV */}

<nav className="desktop-nav">


{
navItems.map((item)=>(


location.pathname === "/" ?

(

<a
href={`#${item.id}`}
key={item.id}
onClick={(e)=>{

e.preventDefault();

handleNavClick(item.id);

}}
>

{item.name}

</a>

)

:

(

<Link
to={`/#${item.id}`}
key={item.id}
>

{item.name}

</Link>

)


))
}


</nav>





{/* CTA */}

{

location.pathname === "/" ?

(

<a 
href="#contact"
className="desktop-talk-button"
onClick={(e)=>{

e.preventDefault();

handleNavClick("contact");

}}
>

<span>Let's Talk</span>
<span className="talk-arrow">↗</span>

</a>

)

:

(

<Link 
to="/#contact"
className="desktop-talk-button"
>

<span>Let's Talk</span>
<span className="talk-arrow">↗</span>

</Link>

)

}






{/* MOBILE BUTTON */}

<button

type="button"

className={`menu-toggle ${menuOpen ? "menu-toggle-open":""}`}

aria-label="Toggle navigation"

aria-expanded={menuOpen}

onClick={toggleMenu}

>

<span></span>
<span></span>
<span></span>


</button>


</header>






{/* MOBILE MENU */}

<div

className={`mobile-menu ${menuOpen ? "mobile-menu-open":""}`}

>


<div className="mobile-menu-inner">



<div className="mobile-menu-top">

<span className="menu-label">
NAVIGATION
</span>

<span className="menu-line"></span>

</div>






<nav className="mobile-nav">


{

navItems.map((item,index)=>(


location.pathname === "/" ?

(

<a

href={`#${item.id}`}

key={item.id}

onClick={(e)=>{

e.preventDefault();

handleNavClick(item.id);

}}

>


<span className="mobile-number">

{String(index+1).padStart(2,"0")}

</span>


<span className="mobile-link-name">

{item.name}

</span>


<span className="mobile-link-arrow">

↗

</span>


</a>

)

:

(

<Link

to={`/#${item.id}`}

key={item.id}

onClick={closeMenu}

>


<span className="mobile-number">

{String(index+1).padStart(2,"0")}

</span>


<span className="mobile-link-name">

{item.name}

</span>


<span className="mobile-link-arrow">

↗

</span>


</Link>

)



))


}


</nav>





<div className="mobile-menu-bottom">

<span>
AVAILABLE FOR WORK
</span>


<Link 
to="/#contact"
onClick={closeMenu}
>

Let's Talk

<span>
↗
</span>

</Link>


</div>



</div>


</div>






{/* OVERLAY */}

{

menuOpen &&

(

<button

type="button"

className="mobile-overlay"

aria-label="Close menu"

onClick={closeMenu}

/>

)

}




</>

  );

}


export default Navbar;