import React from "react";

// const mode = process.env.APPLICATION_MODE;
const mode = 'null';

export const modeBasedDataProcessor = (data) => {
    if (mode === 'development') {
        return data;
    } else {
        if (Array.isArray(data)) {
            return [];
        } else if (typeof data === 'object' && data !== null && !React.isValidElement(data)) {
            return {};
        } else if (React.isValidElement(data)) {
            return null;
        } else {
            return data; // Return data as is for other types
        }
    }
}

/*
I am making a function that checks if the mode is 'development'.
If it is, the function returns the data sent in the data parameter. 
Otherwise, it returns an empty array if the data is an array, 
an empty object if the data is a JSON object, and null if the data is a React component.
*/