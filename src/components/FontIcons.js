import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChild, faFemale, faHome, faMale } from '@fortawesome/free-solid-svg-icons';

const FontIcons = ({loc}) => {
    const icons=[faHome,faMale,faFemale,faChild];
    return (
        <FontAwesomeIcon icon={icons[loc]}/>
    )
}

export default FontIcons
