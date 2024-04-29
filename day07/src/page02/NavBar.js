import React from 'react';
import data from './navData';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [nav, isNav] = useState(false)

    const onToggle = () => {
        isNav(nav)
    }

    return (
        <div className='navbar' >
            <p className='all-menu'>menu</p>
            <nav className=''>
                <ul>
                    {
                        data.map((item,index) => <li key={index}>
                            <Link to={ item. path}>{item.title}</Link>
                        </li>)
                    }
                </ul>
                <p className='close' onClick={ () => isNav(false)}></p>
            </nav>
        </div>
    );
};

export default NavBar;