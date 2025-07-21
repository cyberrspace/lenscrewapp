import React from 'react'

const Navbar = () => {
  return (
    <header>

      <nav className=" bg-[url('/hero-bg.png')] bg - cover bg - center">
        <div className='flex justify-between p-6 '>
          <li> <a href=""></a></li>
          <ul className='flex gap-4 pr-10'>
            <li><a href=""></a>Home</li>
            <li><a href=""></a>Courses</li>
            <li><a href=""></a>Instructors</li>
            <li><a href=""></a>About Us</li>
            <li><a href=""></a>Contact</li>
          </ul>
        </div>
        

      </nav>
    </header>
  );
}

export default Navbar