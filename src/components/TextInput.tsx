import '../App.css';
import React, { useState } from 'react';

// Subcomponent for InterestForm

// Define an interface for Prop
interface TextInputProp {
    title: string;
    placeholder?: string;
}

// Functional Component which takes tile and optional placeholder parameter
const NameInput: React.FC<TextInputProp> = ({ title, placeholder='', }) => {
    const [text, setText] = useState('');

    // Handles input changes and keeps track of input's state
    const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setText(value); 
    }

    return (
        <>
            <div id='section' className='mt-[27px]'>
                <p className='text-white items-center'>{title}</p>
                <input name={title} value={text} onChange={handle} type="text" className='test' placeholder={placeholder}/>
            </div>
            
        </>
    );
};

export default NameInput;