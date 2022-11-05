import AppBar from '@material-ui/core/AppBar';
import React from 'react'
import Link from 'next/link';
function Navbar() {
    return (
        <AppBar>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/users">Users</Link>
                </li>
                <li>
                    <Link href="/news">news Post</Link>
                </li>
            </ul>
        </AppBar>
    )
}

export default Navbar