import '../Generic.css';
import { Box } from "@mui/material";
import { useEffect } from "react"
import ContactButton from './ContactButton';

const ContactContentBox = (props) => {
    useEffect(() => {
        let contactHeader = document.getElementById("contact-header-text");
        typingEffect(contactHeader, "Brandon Tiev");
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
        <Box sx={{background: 'red', width: '100%', height: '100%', overflow: 'hidden'}}>
            <Box id='contact-header-text' className='title-text' sx={{background: 'gray', textAlign: 'center', marginBottom: '5%'}}>
                Brandon Tiev
            </Box>
            <Box sx={{background: 'wheat', width: '100%', height: '60%'}}>
                <ContactButton text="Test">

                </ContactButton>
            </Box>
        </Box>
    );
}

export default ContactContentBox;