import { useEffect, useState } from 'react';
import '../Generic.css';
import "./ProjectDisplayCard.css"
import { Box } from '@mui/material';

const ProjectLangBox = (props) =>
{
    let[value, forceUpdate] = useState(0);

    const coverImage = (props.project.coverImage !== "") ? props.project.coverImage : "/assets/project-assets/github.png";

    const rerenderComponent = () =>
    {
        forceUpdate(value + 1);
    }
    
    var trigger;
    window.onresize = function(){
      clearTimeout(trigger);
      trigger = setTimeout(rerenderComponent, 1000);
    };

    useEffect(() => {
        if(value === 0)
        {
            let loadBox = document.getElementById(props.project.name + "load-box");
            let displayBox = document.getElementById(props.project.name + "display-box");

            loadBox.getAnimations().every(animation => animation.cancel());
            displayBox.getAnimations().every(animation => animation.cancel());
        

            loadBox.style.display = "flex";
            displayBox.style.display = "none";

            let animation = loadBox.animate([
                {opacity: '0'},
                {opacity: '0.5'},
                {opacity: '0'}
            ], {duration: 500, delay: 500 * props.index});
            animation.onfinish = () => {
                loadBox.style.display = "none";
                let displayAnimation = displayBox.animate([
                    {display: 'block', opacity: '0'},
                    {display: 'block', opacity: '1'}
                ], {duration: 1000});
                displayAnimation.onfinish = () => {
                    displayBox.style.display = "block";
                }
            };
            animation.oncancel = () => {
                displayBox.style.display = "none";
            };
        }
    });

    const onClickHandler = () => {
        props.onClick(props.project.name);
    }

    return(
        <Box id={props.project.name + "wrapper-box"} className='header-text' component="div" sx={{width: '10rem', height: '10rem', cursor: 'pointer'}} onClick={onClickHandler}>
            <Box id={props.project.name + "load-box"} component="div" sx={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '4vw', fontWeight: '950', opacity: '0'}}>{props.project.language}</Box>
            <Box id={props.project.name + "display-box"} className='std-text' component="div" sx={{width: '100%', height: '100%', border: 'solid white 1px', display: 'none'}}>
                <Box component="div" sx={{textAlign: 'center', marginTop: '10%', marginBottom: '10%'}}>
                    {props.project.name}
                </Box>
                <Box component="div" sx={{display: 'flex', justifyContent: 'center'}}>
                    <img className='project-cover-image' src={coverImage}/>
                </Box>
            </Box>
        </Box>
    );
}
export default ProjectLangBox;