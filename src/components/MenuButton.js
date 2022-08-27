import React from 'react';
import '../css/MenuButton.css';
import { Link } from 'react-router-dom';

export default function MenuButton() {
    return (
        <div className='menu-btn-container'>
            <Link to='/menu'>
                <button className='menu-btn'>메뉴보기</button>
            </Link>
        </div>
    )
}