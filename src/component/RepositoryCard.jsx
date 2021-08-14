import React from "react";
import { Card, Button } from "react-bootstrap";

const RepositoryCard = (props) => {
    const repositorie = props.repositorie;

    return (
        <Card className="mx-auto mb-4">
            <Card.Body>
                <Card.Title>{repositorie.name}</Card.Title>
                <Card.Text>{repositorie.description}</Card.Text>
                <Button href={repositorie.html_url} target="_blank" variant="secondary" >Repositorie Page</Button>
            </Card.Body>
        </Card>
    );
};

export default RepositoryCard;

