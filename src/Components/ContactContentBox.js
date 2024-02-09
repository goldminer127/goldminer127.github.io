import '../Generic.css';
import { Box } from "@mui/material";
import { useEffect } from "react"
import ContactButton from './ContactButton';

const ContactContentBox = (props) => {
    useEffect(() => {
        let contactHeader = document.getElementById("contact-header-text");
        
        if(!props.rerenderAnimationHandler.shouldNotPlayAnimation.includes("contact-buttons-container"))
        {
            let buttonsContent = document.getElementById("contact-buttons-container");
            buttonsContent.style.opacity = "0"
            buttonsContent.getAnimations().every(animation => animation.cancel());
            let buttonsAnimation = buttonsContent.animate([
                {opacity: "0"},
                {opacity: "1"}
            ], {duration: 1000, delay: contactHeader.innerHTML.length * 75});
            buttonsAnimation.onfinish = () =>
            {
                buttonsContent.removeAttribute('style');
            }
            typingEffect(contactHeader, "Brandon Tiev");
            props.rerenderAnimationHandler.setShouldNotPlayAnimation("contact-buttons-container");
        }
    });

    const typingEffect = async (element, text) =>
    {
        let index = 0;
        while(index !== text.length)
        {
            index++;
            element.textContent = text.substring(0, index);
            await new Promise(r => setTimeout(r, 75));
        }
    }

    return (
        <Box sx={{width: '100%', height: '100%', overflow: 'hidden', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <Box id='contact-header-text' className='bigger-title-text' sx={{textAlign: 'center', marginBottom: '2%'}}>
                Brandon Tiev
            </Box>
            <Box id='contact-header-text' className='home-text' sx={{textAlign: 'center', marginBottom: '2%'}}>
                You can find me on these platforms.
            </Box>
            <Box id='contact-buttons-container' sx={{justifyContent: 'center', display: 'flex', columnGap: '5vw'}}>
                <ContactButton name="github" image="/assets/contact-assets/github.png" link="https://github.com/goldminer127" buttonNum={0}/>
                <ContactButton name="linkedin" image="/assets/contact-assets/linkedin.png" link="https://www.linkedin.com/in/brandon-tiev/" buttonNum={1}/>
            </Box>
        </Box>
    );
}

export default ContactContentBox;