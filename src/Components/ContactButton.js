import "./ContactButton.css"
import { Box } from "@mui/material";
import { useEffect } from "react"

const ContactButton = ({name, link, image, buttonNum}) =>
{
    useEffect(() => {
        let button = document.getElementById("contact-button-" + name);
        button.style.opacity = "0";

        let buttonAnimation = button.animate([
            {opacity: "0", transform: 'translate(0,-1rem) scale(0.75)'},
            {opacity: "1", transform: 'translate(0,0) scale(1)'}
        ], {duration: 250, delay: buttonNum * 250 + 1000});
        buttonAnimation.onfinish = () => {
            button.removeAttribute('style');
        }
    });

    const onMouseOverHandler = () =>
    {
        let button = document.getElementById("contact-button-" + name);
        button.style.transform = "scale(1.1)";
    }

    const onMouseLeaveHandler = () =>
    {
        let button = document.getElementById("contact-button-" + name);
        button.removeAttribute('style');
    }

    const onclickHandler = () =>
    {
        if(link !== "")
            window.open(link);
    }

    return(
        <Box id={"contact-button-" + name} className="contact-option-container" component={"div"} onMouseOver={onMouseOverHandler} onMouseLeave={onMouseLeaveHandler} onClick={onclickHandler}>
            <img className="contact-button-image" src={image}/>
        </Box>
    );
}
export default ContactButton;