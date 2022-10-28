import React from 'react';
import Link from 'next/link';

const NavBar = () => {
    return (
        <div className="navigation-bar">
            <Link href="/">
            <h5 className="text-center">Employee Manager</h5>
            </Link>
        </div>
    );
};

export default NavBar;