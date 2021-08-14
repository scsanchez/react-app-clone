import React from "react";
import { Card, Button } from "react-bootstrap";

const OrganizationCard = (props) => {
    const organization = props.organization;
    
    return (
        <Card className="mx-auto mb-4">
            <Card.Body>
                <Card.Title>{organization.login}</Card.Title>
                <Card.Text>{organization.description}</Card.Text>
                <Button href={"https://github.com/orgs/" + organization.login} target="_blank" variant="secondary" >Organisation Page</Button>
            </Card.Body>
        </Card>
    );
};

export default OrganizationCard;

