import { Box } from '@mui/material';
import { Fragment, useEffect, useState } from "react";
import ProjectLangButton from "./ProjectLangButton";
import ProjectDisplayCard from "./ProjectDisplayCard"
import ProjectDisplayBox from "./ProjectDisplayBox"

const ProjectContentBox = (props) => {
    const data = require("../data/projects.json");

    const sortLanguagesByOccurance = (arr) => {
        var occurance = {}, language;

        for (let i = 0; i < arr.length; i++) {
            language = arr[i];
            if (language in occurance) {
                occurance[language]++;
            }
            else {
                occurance[language] = 1;
            }
        }

        function compareOccurance(x, y) {
            return occurance[y] - occurance[x];
        }

        return [...new Set(arr)].sort(compareOccurance);
    }
    const langs = sortLanguagesByOccurance(data.map(project => project["language"]))

    let [langContentState, changeLang] = useState("none");
    let [projectDisplayState, changeProject] = useState("none");

    useEffect(() => {
        window.addEventListener('resize', updateSize);
        let element = document.getElementById("language-content-wrapper");
        if (props.rerenderAnimationHandler.shouldNotPlayAnimation.includes("ProjectLangButton") && !props.rerenderAnimationHandler.shouldNotPlayAnimation.includes("language-content-wrapper")) {
            element.style.opacity = "0";
            let animation = element.animate([
                { opacity: "0" },
                { opacity: "1" }
            ], { duration: 500 });
            animation.onfinish = () => {
                element.style.opacity = "1";
            };
            animation.oncancel = () => {
                element.style.opacity = "1";
            };
            props.rerenderAnimationHandler.setShouldNotPlayAnimation("language-content-wrapper");
        }
        else if (props.rerenderAnimationHandler.shouldNotPlayAnimation.includes("language-content-wrapper")) {
            element.style.opacity = "1";
        }
        else {
            element.style.opacity = "0";
        }
        return () => { window.removeEventListener('resize', updateSize); } //removes event listener when component unmounts
    });

    const switchLangContent = (type) => {
        if (projectDisplayState !== "none")
            changeProject("none");
        let arr = props.rerenderAnimationHandler.shouldNotPlayAnimation.filter(entry => entry.includes("ProjectDisplayCard"))
        if (arr.length !== 0)
            arr.map(entry => props.rerenderAnimationHandler.removeShouldNotPlayAnimation(entry))

        changeLang(type);
    }

    const displayLangNavButtons = () => {
        let buttons = [];
        let id = 0;

        langs.forEach(lang => {
            buttons.push(
                <Fragment key={id}>
                    <ProjectLangButton display={lang} buttonid={id} rerenderHandler={props.rerenderAnimationHandler} onClick={switchLangContent.bind(this)} />
                </Fragment>
            );
            id++;
        });

        return (buttons);
    }

    const displayLangContent = () => {
        let projects = [];
        let index = 0;

        if (langContentState !== "none")
            props.rerenderAnimationHandler.setShouldNotPlayAnimation("ProjectLangButton");

        if (projectDisplayState === "none") {
            data.filter(entry => entry.language === langContentState).forEach(entry => {
                projects.push(
                    <Fragment key={index}>
                        <ProjectDisplayCard project={entry} index={index} onClick={changeProjectContent.bind(this)} rerenderAnimationHandler={props.rerenderAnimationHandler} />
                    </Fragment>
                );
                index++;
            });
            return (projects);
        }
    }

    const changeProjectContent = (projectName) => {
        changeProject(projectName);
    }

    const displayProjectContent = () => {
        if (projectDisplayState !== "none") {
            return (
                <ProjectDisplayBox project={data.find(entry => entry.name === projectDisplayState)} unselectProjectHandler={changeProjectContent.bind(this)} />
            );
        }
    }

    const updateSize = () => {
        let element = document.getElementById("langauge-content");
        let width = window.visualViewport.width * .9 - (16 * 8);
        let height = window.visualViewport.height * .75 - (16 * 8);
        element.style.width = width + "px";
        element.style.height = height + "px";
    }

    return (
        <Box component="div" sx={{ width: '90%', height: '75vh', margin: 'auto 5% auto 5%' }}>
            <Box component="div" sx={{ display: 'flex' }}>
                {displayLangNavButtons()}
            </Box>
            <Box id="language-content-wrapper" component="div" sx={{ width: '100%', height: '90%', marginTop: '2rem', display: 'flex', border: 'solid white 2px', borderRadius: '5rem' }}>
                <Box id="langauge-content" component="div" style={{ width: window.visualViewport.width * .9 - (16 * 8), height: window.visualViewport.height * .75 - (16 * 8) }} sx={{ display: 'flex', margin: 'auto auto auto auto', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center', columnGap: '10%' }}>
                    {displayLangContent()}
                    {displayProjectContent()}
                </Box>
            </Box>
        </Box>
    );
}
export default ProjectContentBox;