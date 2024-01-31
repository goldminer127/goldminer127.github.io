import { Box } from "@mui/material";
import { useEffect } from "react"

const ContactButton = ({text, link, image}) =>
{
    const onclickHandler = () =>
    {
        if(link !== "")
            window.open(link);
    }

    return(
        <Box sx={{background: 'purple', width: '8rem', height: '4rem', borderRadius: '1rem'}}>
            <img className="contact-button-image" src={image}></img>
            {text}
        </Box>
    );
}
export default ContactButton;