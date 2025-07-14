import { useState } from 'react'
import '../App.css'
import TextInput from './TextInput'
import PhoneInput from './PhoneInput'
import SecretPinInput from './SecretPin'

const InterestForm:React.FC = () => {
    const [submit, setSubmit] = useState(false);

    // Initialize React useState hooks with current state values
    // and functions to update the state
    const [valid, setValid] = useState(true);
    const [validFirstName, setValidFirstName] = useState(true);
    const [validLastName, setValidLastName] = useState(true);
    const [validEmail, setValidEmail] = useState(true);
    const [validPrice, setValidPrice] = useState(true);
    const [validPin, setValidPin] = useState(true)

    // Submit functionality involving validation and sending data to the console
    const submitEvent = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        // Retrieve form values
        const firstName = formData.get("First Name");
        const lastName = formData.get("Last Name");
        const num = formData.get("Phone Number");
        const email = formData.get("Email Address");
        const price = formData.get("Guess the cost");
        const pin = formData.get("Secret 16-Digit Spidr Pin");

        // Validate data ensuring proper entries
        const isValidFirstName = typeof firstName === "string" && firstName.trim().length > 0;
        const isValidLastName = typeof lastName === "string" && lastName.trim().length > 0;
        const isValidPhone = typeof num === "string" && num.length === 14;
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = typeof email === "string" && re.test(email.toLowerCase());
        const priceRegex = /^\$?\d+(\.\d{2})?$/;
        const isValidPrice = typeof price === "string" && priceRegex.test(price);
        const isValidPin = typeof pin === "string" && pin.length === 19;
        
        // Update the corresponding boolean variables for error checking
        setValidFirstName(isValidFirstName);
        setValidLastName(isValidLastName);
        setValid(isValidPhone);
        setValidEmail(isValidEmail);
        setValidPrice(isValidPrice);
        setValidPin(isValidPin);

        // Check Validity
        if (!isValidFirstName || !isValidLastName || !isValidPhone || !isValidEmail || !isValidPrice || !isValidPin) {
            return;
        }

        console.log(Object.fromEntries(formData.entries()));
        setSubmit(true);
    }


    if (submit) {
        return (
            <>
                <div className=' bg-background flex flex-col text-center w-auto h-auto p-[30px] relative max-w-[987px]'>
                    <h1 className='text-white pb-[30px] font-raleway font-extralight'>Thank You For Your Interest!</h1>
                    
                    <p className='text-white font-normal'>We hope you are as excited as we are for the future launch of this product! We'll get in touch with you in the near future!</p>
                    <span id='item'></span>
                    
                    <p className='text-white font-normal'>Beyond this air fryer and coding challenge, thank you <span className='font-bold'>Spidr Design</span> for your time and consideration for my application. I am very excited about the possibility of working and learning alongside the dedicated team, and would love to dedicate my passion and potential, towards Spidr's goals, as a Full-Stack Software Engineer!</p>
                    <span id='item'></span>
                    
                    <p className='text-white font-normal'>I look forward to hearing back and getting in touch!</p>
                    <span id='item'></span>
                    
                    <p className='text-white font-normal'>Tyler Yuen</p>
                </div>
            </>
        );
    }

    return (
        <>
            <div className=' bg-background flex flex-col text-center w-auto max-w-[567px] h-auto p-[30px] relative'>
                <h1 className='text-white pb-[30px] font-raleway font-extralight'>Interest Form</h1>
            
                <p className='text-white font-normal'>Interested in our exciting new air fryer? Fill out this form to let us know!</p>
          
                <form action="" onSubmit={submitEvent} className='relative'>
                    <TextInput title='First Name' placeholder='John'></TextInput>
                    {!validFirstName && <p id="error">Please enter your first name</p>}
                
                    <TextInput title='Last Name' placeholder='Doe'></TextInput>
                    {!validLastName && <p id="error">Please enter your last name</p>}
                
                    <PhoneInput title='Phone Number' placeholder='(123) 456-7891'></PhoneInput>
                    {!valid && <p id="error">Please enter a valid phone number</p>}
                
                    <TextInput title='Email Address' placeholder='johndoe@gmail.com'></TextInput>
                    {!validEmail && <p id="error">Please enter a valid email address</p>}
                
                    <TextInput title='Guess the cost' placeholder='$120.09 | 235 | $1000 | 59.04'></TextInput>
                    {!validPrice && <p id="error">Please enter a proper price</p>}
                
                    <SecretPinInput title='Secret 16-Digit Spidr Pin' placeholder='####-####-####-####'></SecretPinInput>
                    {!validPin && <p id="error">Please enter 16 digits</p>}

                    <button type="submit" className='items-center text-white border border-white mt-[27px] py-[6px] px-[12px] inline-block cursor-pointer hover:bg-[#333] hover:text-button-accent hover:border-[#56ACBD] transition-all ease-linear duration-250 delay-0' >Submit</button>
                </form>
            </div>
        </>
    )
}

export default InterestForm;