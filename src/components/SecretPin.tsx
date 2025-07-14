import '../App.css';
import React, { useState } from 'react';

// Subcomponent for InterestForm

// Define an interface for Prop that has a callback function for parent and receives tag
interface SecretPinInputProp {
    title: string;
    placeholder?: string;
}

// Functional Component which takes tile and optional placeholder parameter
const SecretPinInput: React.FC<SecretPinInputProp> = ({ title, placeholder='', }) => {
    const [secretPin, setSecretPin] = useState("");

    // Function to format input in groups of four like ####-####-####-####
    const formatSecretPinNumber = (value: string) => {
        // Digits only
        const digitsOnly = value.replace(/\D/g, '').slice(0, 16);

        const groups = digitsOnly.match(/.{1,4}/g);
        return groups ? groups.join('-') : '';
    };

    // Handles input changes and keeps track of input's state
    // Auto format the secretPin number and update the visual
    const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        const formatted = formatSecretPinNumber(input);
        setSecretPin(formatted);
    };

    return (
        <>
            <div className='mt-[27px]'>
                <p className='text-white items-center'>{title}</p>
                <input name={title} value={secretPin} onChange={handle} type="text" className='test' placeholder={placeholder}/>
            </div> 
        </>
    );
};

export default SecretPinInput;