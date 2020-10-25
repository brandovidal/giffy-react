import React from 'react'
import {Link} from 'wouter'
import "./Category.css"

export default function Category({name, options=[], ...props}) {
    return (
        <div className={props.className}>
            <h3 className="Category-title">{name}</h3>
            <ul className="Category-list">
                {options.map(({title}) => (
                <li key={title}>
                    <Link className="Category-link" to={`/search/${title}`}>Gifs de {title}</Link>
                </li>
                ))}
            </ul>
        </div>
    )
}