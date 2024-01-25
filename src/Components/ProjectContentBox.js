import { Box } from '@mui/material';
import { Fragment, useEffect, useState } from "react";
import ProjectLangButton from "./ProjectLangButton";
import ProjectDisplayCard from "./ProjectDisplayCard"
import ProjectDisplayBox from "./ProjectDisplayBox"

const ProjectContentBox = (props) => {
    const data = require("../data/projects.json");

    let[langContentState, changeLang] = useState("none");
    let[projectDisplayState, changeProject] = useState("none");

    useEffect(() => {
        let element = document.getElementById("language-content-wrapper");
        if(props.rerenderAnimationHandler.shouldNotPlayAnimation.includes("ProjectLangButton") && !props.rerenderAnimationHandler.shouldNotPlayAnimation.includes("language-content-wrapper"))
        {
            //window.addEventListener('resize', updateSize);
            element.style.opacity = "0";
            let animation = element.animate([
                {opacity: "0"},
                {opacity: "1"}
              ], {duration: 500});
            animation.onfinish = () => {
                element.style.opacity = "1";
            };
            animation.oncancel = () => {
                element.style.opacity = "1";
            };
            props.rerenderAnimationHandler.setShouldNotPlayAnimation("language-content-wrapper");
        }
        else if(props.rerenderAnimationHandler.shouldNotPlayAnimation.includes("language-content-wrapper"))
        {
            element.style.opacity = "1";
        }
        else
        {
            element.style.opacity = "0";
            //window.removeEventListener('resize', updateSize);
        }
    });

    const switchLangContent = (type) =>
    {
        if(projectDisplayState !== "none")
            changeProject("none");
        
        changeLang(type);
    }

    const displayLangNavButtons = () =>
    {
        let buttons = [];
        let id = 0;

        props.langs.forEach(lang =>{
            buttons.push(
                <Fragment key={id}>
                    <ProjectLangButton display={lang} buttonid={id} rerenderHandler={props.rerenderAnimationHandler} onClick={switchLangContent.bind(this)}/>
                </Fragment>
            );
            id++;
        });

        return(buttons);
    }

    const displayLangContent = () =>
    {
        let projects = [];
        let index = 0;

        if(langContentState !== "none")
            props.rerenderAnimationHandler.setShouldNotPlayAnimation("ProjectLangButton");

        if(projectDisplayState === "none")
        {
            data.filter(entry => entry.language === langContentState).forEach(entry => {
                projects.push(
                    <Fragment key={index}>
                        <ProjectDisplayCard project={entry} index={index} onClick={changeProjectContent.bind(this)}/>
                    </Fragment>
                );
                index++;
            });
            return (projects);
        }
    }

    const changeProjectContent = (projectName) =>
    {
        changeProject(projectName);
    }

    const displayProjectContent = () =>
    {
        if(projectDisplayState !== "none")
        {
            return(
                <ProjectDisplayBox project={data.find(entry => entry.name === projectDisplayState)}/>
            );
        }
    }

    const updateSize = () => {
        let element = document.getElementById("langauge-content");
        element.style.width = window.visualViewport.width * .9 - (16 * 8);
        element.style.height = window.visualViewport.height * .75 - (16 * 8);
        console.log(element.style.width)
    }

    return(
        <Box component="div" sx={{width: '90%', height: '75vh', margin: 'auto 5% auto 5%'}}>
          <Box component="div" sx={{display: 'flex'}}>
            {displayLangNavButtons()}
          </Box>
          <Box id="language-content-wrapper" component="div" sx={{width: '100%', height: '90%', marginTop:'2rem', display: 'flex', border: 'solid white 2px', borderRadius: '5rem'}}>
            <Box id="langauge-content" component="div" sx={{width: window.visualViewport.width * .9 - (16 * 8), height: window.visualViewport.height * .75 - (16 * 8), display: 'flex', margin: 'auto auto auto auto', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center', columnGap: '10%'}}>
              {displayLangContent()}
              {displayProjectContent()}
            </Box>
          </Box>
        </Box>
    );
}
export default ProjectContentBox;