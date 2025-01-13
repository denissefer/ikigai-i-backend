import React from 'react';

function StartButton({ onClick }) {
    return (
        <button type="button" onClick={onClick}>
            Start
        </button>
    );
}

export default StartButton;
