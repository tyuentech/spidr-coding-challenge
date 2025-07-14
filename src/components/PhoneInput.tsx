import '../App.css';
import React, { useState } from 'react';

// Subcomponent for InterestForm

// Define an interface for Prop
interface PhoneInputProp {
    title: string;
    placeholder?: string;
}

// Functional Component which takes tile and optional placeholder parameter
const PhoneInput: React.FC<PhoneInputProp> = ({ title, placeholder='', }) => {
    const [phone, setPhone] = useState("");

    // Function to format input as (XXX) XXX-XXXX
    const formatPhoneNumber = (value: string) => {
        // Remove all non-digit characters
        const digits = value.replace(/\D/g, "");

        const length = digits.length;

        // Automatically add parenthesis, dashes, or spaces
        if (length === 0)
            return "";
        if (length < 4)
            return `(${digits}`;
        if (length < 7)
            return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
        
        return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
    };

    // Handles input changes and keeps track of input's state
    // Auto format the phone number and update the visual
    const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const formattedNum = formatPhoneNumber(value);
        setPhone(formattedNum);           
    };

    return (
        <>
            <div className='mt-[27px]'>
                <p className='text-white items-center'>{title}</p>
                <input name={title} value={phone} onChange={handle} type="text" className='test' placeholder={placeholder}/>
            </div> 
        </>
    );
};

export default PhoneInput;