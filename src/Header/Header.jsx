import React from 'react'
import "./Header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <h1 className="title">The City Of Kavala</h1>
                <p className="description">Kavala is a city in northern Greece, the principal seaport of eastern Macedonia and the capital of Kavala regional unit.</p>

            </div>
            <img className="headerImg" src="https://www.mst.ihu.gr/wp-content/uploads/2020/05/KAVALA_1.jpg" alt="" />
        </div>
    )
}