import React from "react";

export const required = value => {
    if (value) {
        return undefined
    }
    return 'Field is Required'
}

export const maxLengthCreator = (maxLenght) => (value) => {
    if (value && value.length > maxLenght) {
        return `Must be ${maxLenght} characters or less`;
    }
    return undefined
}


export const minLengthCreator = (mixLenght) => (value) => {
    if (value && value.length < mixLenght) {
        return `Must be ${mixLenght} characters or more`;
    }
    return undefined
}

