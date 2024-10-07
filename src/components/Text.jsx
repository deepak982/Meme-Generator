import React, { useState } from "react";
import Draggable from "react-draggable";

export const Text = () => {
    const [editMode, setEditMode] = useState(false);
    const [val, setVal] = useState("Double Click to Edit");

    const handleDoubleClick = () => {
        setEditMode(true);
    };

    const handleExitEditMode = () => {
        setEditMode(false);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleExitEditMode();
        }
    };

    return (
        <Draggable>
            <div style={{ cursor: "move", display: "inline-block", padding: "5px" }}>
                {editMode ? (
                    <input
                        value={val}
                        onChange={(e) => setVal(e.target.value)}
                        onDoubleClick={handleExitEditMode}
                        onKeyPress={handleKeyPress} // Detect 'Enter' key press
                        autoFocus // Automatically focus on input when editing
                    />
                ) : (
                    <h1 onDoubleClick={handleDoubleClick}>{val}</h1>
                )}
            </div>
        </Draggable>
    );
};
