# Spidr Coding Challenge - Full-Stack Software Engineer (Entry-Level)

Thank you Spidr Design for considering my application! Here is my submission for the coding challenge.
I hope you like it!

## Background
Spidr Design created a landing page to unveil a new air fryer and showcase its capabilities in order to help sell itself.

## Challenge
Develop a custom application to embed as an interest form at the the bottom of the page. Create a React app containing a single page form with the following.
- First name
- Last name
- Phone number
- Email Address
- Guess the air fryer's cost (dollar amount)
- A very, very secret 16-digit Spidir PIN. Digits formatted with dashes in groups of four "####-####-####-####"
Include a submit button to print the user's form data to the console.

Design should be inspired by and closely match the styling of https://spidr.design/.

## Solution

# ##Prototype UI/UX via Figma
Utilizing Figma, I created a simple wireframe and prototype for the interest form styling and functionality basing the design off of Spidr's website. The app only includes the interest form component but the wireframe exemplifies what it could look like.

See it on [Figma](https://www.figma.com/design/mPb8iRhuHzjKfn0PFqNh6f/Spidr-Challenge-Prototype?node-id=1-2&t=met6H8bmiT5oCw4e-1).

### Front-end Engineering
Technologies
- React - JavaScript library for building user interfaces with components
- Vite - Build tool
- Typescript - Programming language with static typing
- Tailwind CSS - Utility first CSS framework
- Git and Github - Version control and site hosting

I initialized my project with creating the app via Vite with React and Typescript support. I used Tailwind CSS to get the styling as close to what I prototyped as well as to the design of Spidr's website. When creating the Interest Form component, some input subcomponents were created to stay as close to the Single Responsibility Principle as possible, i.e. input validation.

You can take a look at the source code here
- [Interest Form Component](src/components/InterestForm.tsx): Whole component
- [TextInput](src/components/TextInput.tsx): For more flexible entries
- [PhoneInput](src/components/PhoneInput.tsx): Handle phone formatting
- [SecretPin](src/components/SecretPin.tsx): Handle pin formatting

## Result
View the finished result on [Github Pages](https://tyuentech.github.io/spidr-coding-challenge)!