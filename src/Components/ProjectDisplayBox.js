import { useEffect } from 'react';
import '../Generic.css';
import "./ProjectDisplayBox.css"
import { Box } from '@mui/material';

const ProjectLangBox = (props) =>
{
    useEffect(() => {
        let loadBox = document.getElementById(props.name + "load-box");
        let displayBox = document.getElementById(props.name + "display-box");

        displayBox.style.display = "none";

        let animation = loadBox.animate([
            {opacity: '0'},
            {opacity: '0.5'},
            {opacity: '0'}
        ], {duration: 500, delay: 500 * props.index});
        animation.onfinish = () => {
            loadBox.style.display = "none";
            displayBox.style.display = "none";
            let displayAnimation = displayBox.animate([
                {display: 'block', opacity: '0'},
                {display: 'block', opacity: '1'}
            ], {duration: 1000});
            displayAnimation.onfinish = () => {
                displayBox.style.display = "block";
            }
        };
    });
    return(
        <Box id={props.name + "wrapper-box"} className='header-text' component="div" sx={{width: '10rem', height: '10rem'}}>
            <Box id={props.name + "load-box"} component="div" sx={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '400%', fontWeight: '950', opacity: '0'}}>{props.language}</Box>
            <Box id={props.name + "display-box"} className='std-text' component="div" sx={{width: '100%', height: '100%', border: 'solid white 1px', display: 'none'}}>
                <Box component="div" sx={{textAlign: 'center', marginTop: '10%', marginBottom: '10%'}}>{props.name}</Box>
                <Box component="div" sx={{display: 'flex', justifyContent: 'center'}}><img className='project-cover-image' src={props.coverImage}/></Box>
            </Box>
        </Box>
    );
}
export default ProjectLangBox;