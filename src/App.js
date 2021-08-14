import React, { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import Header from "./component/Header.jsx";
import RepositoryCard from "./component/RepositoryCard.jsx";
import OrganizationCard from "./component/OrganizationCard.jsx";
import Spinner from 'react-bootstrap/Spinner'
import "./App.css"
import { getOrganizationsByUserName, getRepositoriesByUserName } from "./ApiMangement.js";


function App() {
    const [repositories, setRepositories] = useState([]);
    const [organizations, setOrganizations] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [isFetchingOrganizations, setIsFetchingOrganizations] = useState(false);
    const [isFetchingRepositories, setIsFetchingRepositories] = useState(false);


    const handleChange = (event) => {
        setSearchValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const trimedSearchValue = searchValue.trim();

        if (!trimedSearchValue.trim()) {
            return;
        }

        setIsFetchingOrganizations(true);
        getOrganizationsByUserName(trimedSearchValue).then((organizations) => {
            setIsFetchingOrganizations(false);
            if (organizations) {
                setOrganizations(organizations);
            }
        })
            ;

        setIsFetchingRepositories(true);
        getRepositoriesByUserName(trimedSearchValue).then((repositories) => {
            setIsFetchingRepositories(false);
            if (repositories) {
                setRepositories(repositories);
            }
        });
    };

    const printOrganizations = () => {

        return organizations.map((organization, index) => {
            return <OrganizationCard key={index} organization={organization} />
        })

    }

    const printRepositories = () => {

        return repositories.map((repositorie, index) => {
            return <RepositoryCard key={index} repositorie={repositorie} />
        })

    }

    return (
        <div className="App">

            <header>
                <Header />
            </header>

            <main>
                <div className="container">
                    <Form onSubmit={handleSubmit}>
                        <Row className="justify-content-sm-center mt-5 mb-5">
                            <Col sm={3}>
                                <Form.Label
                                    htmlFor="inlineFormInputName"
                                    visuallyHidden>
                                    Username
                                     </Form.Label>
                                <Form.Control
                                    id="input"
                                    placeholder="username"
                                    onChange={handleChange}
                                />
                            </Col>
                            <Col sm={1} className="col-md-auto">
                                <Button type="submit"><i className="fas fa-search"></i> </Button>
                            </Col>
                        </Row>
                    </Form>

                    <Row>
                        <Col>
                            <div>
                                <h2>Organizations</h2>
                            </div>
                            {isFetchingOrganizations ?
                                <Spinner animation="border" /> :
                                <div className="repositories">
                                    {printOrganizations()}
                                </div>
                            }
                        </Col>
                        <Col>
                            <div>
                                <h2>Repositories</h2>
                            </div>

                            {isFetchingRepositories ? <Spinner animation="border" /> :
                                <div className="repositories">
                                    {printRepositories()}
                                </div>
                            }
                        </Col>
                    </Row>
                </div>
            </main>

        </div >
    );
}

export default App;
