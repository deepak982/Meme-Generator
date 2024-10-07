import React, { useState, createRef } from "react";
import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { Text } from "../components/Text";
import { exportComponentAsJPEG } from "react-component-export-image";

export const EditPage = () => {
    const [params] = useSearchParams();
    const [count, setCount] = useState(0);
    const memeRef = createRef();

    const addText = () => {
        setCount(count + 1);
    };

    return (
        <div className="container text-center mt-5">
            <div ref={memeRef} className="meme position-relative d-inline-block">
                <img src={params.get("url")} width="250px" alt="meme" className="img-fluid" />
                {Array(count).fill(0).map((_, index) => (
                    <Text key={index} />
                ))}
            </div>
            <div className="mt-4">
                <Button onClick={addText} className="me-2">Add Text</Button>
                <Button
                    variant="success"
                    onClick={() => exportComponentAsJPEG(memeRef)}
                >
                    Save
                </Button>
            </div>
        </div>
    );
};
