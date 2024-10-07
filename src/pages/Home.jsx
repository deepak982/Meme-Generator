import React, { useEffect, useState } from "react";
import { MemeCard } from "../components/Card";
import { getAllMemes } from "../api/memes";

export const Homepage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAllMemes()
            .then((memes) => {
                setData(memes.data.memes);
            })
            .catch((error) => {
                console.error("Error fetching memes:", error);
            });
    }, []);

    return (
        <div className="container">
            <div className="row">
                {data.map((el) => (
                    <div className="col-md-4 mb-4" key={el.id}>
                        <MemeCard img={el.url} title={el.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};
