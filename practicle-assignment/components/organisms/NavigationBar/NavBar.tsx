import React from 'react';
import Link from 'next/link';
import HeadlineText from "../../atoms/HeadlineTextField/HeadlineText";

const NavBar = () => {
    return (
        <div className="navigation-bar">
            <Link href="/">
                <a>
                    <HeadlineText description={"Employee Manager"}/>
                </a>
            </Link>
        </div>
    );
};

export default NavBar;