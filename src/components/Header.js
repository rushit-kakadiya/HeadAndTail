import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <ListGroup horizontal className='mt-3'>
            <ListGroup.Item>
                <Link to='/'>Home</Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to='/about'>About</Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to='/head-and-tail'>Head {'&'} Tail</Link>
            </ListGroup.Item>
        </ListGroup>
    )
}

export default Header;