import React from "react";
import Nav from 'react-bootstrap/Nav'

const Header = () => {
    return (
        <Nav>
            <Nav.Item>
                <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    width="50"
                    height="50"
                    className="d-inline-block align-items-center ms-4"
                    alt="GitHub logo"
                />
                <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png"
                    width="70"
                    height="21"
                    className="d-inline-block align-items-center"
                    alt="GitHub"
                />
            </Nav.Item>
        </Nav>
    );
};
export default Header;


