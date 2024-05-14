import React from 'react'

 const navitem = [
   {
    id:1,
    title:'Home',
    path:'/',
    cName:'navmenu'
  },
   {
    id:2,
    title:'About',
    path:'/about',
    cName:'navmenu'
  },
  {  id:3,
    title:'Contact',
    path:'/contact',
    cName:'navmenu'
  },
  {  id:4,
    title:'Blog',
    path:'/blog',
    cName:'navmenu'
  },
  {  id:5,
    title:'Test',
    path:'/test',
    cName:'navmenu'
  }
];

const NavMenu = () => {
  return (
    <div>
        <nav className='navbar'>
            <Link to='/' className='navbar-logo'>
               <img src="Assets/Logo.png" alt="site logo" />Home
            </Link>
            <ul id='navbar'>
                {navitems.map(item=>{
                    const {id, path, title} = item;
                    return(
                    <li key={id} className='item.cName'>
                        <Link to={path}>
                            {title}
                        </Link>
                    </li>
                    )
                })}
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Lat's Talk<span className='w-5 h-5 bg-white rounded-full ml-3'>4h</span></button>
            </ul>
        </nav>
    </div>
  )
}

export default NavMenu