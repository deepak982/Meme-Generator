import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

export const MemeCard = (props) => {
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`/edit?url=${props.img}`);
    }

    return (
        <Card className="meme-card" style={{ width: '100%', marginBottom: "30px" }}>
            <Card.Img 
                variant="top" 
                src={props.img} 
                alt={props.title} 
                style={{ objectFit: "contain", height: "300px", width: "100%", backgroundColor: "#f8f9fa" }} // Using 'contain' to avoid cropping
            />
            <Card.Body className="text-center">
                <Card.Title>{props.title}</Card.Title>
                <Button onClick={handleEdit} variant="primary">
                    Edit
                </Button>
            </Card.Body>
        </Card>
    );
};
