import React from 'react'
import Link from "next/link"
import style from "../styles/nav.module.css"

function Nav() {
    return (
        <div className={style.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/library">Upload music</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav
