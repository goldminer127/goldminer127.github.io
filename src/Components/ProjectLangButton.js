import { useEffect } from "react";
import "./ProjectLangButton.css"

const ProjectLangButton = (props) =>
{
    useEffect(() => {
        let element = document.getElementById("langButton" + props.buttonid);
        if(!props.rerenderHandler.shouldNotPlayAnimation.includes("ProjectLangButton"))
        {
            element.style.opacity = "0";
            let animation = element.animate([
                {opacity: "0"},
                {opacity: "1"}
              ], {duration: 500, delay: 250 * props.buttonid});
            animation.onfinish = () => {
                element.style.opacity = "1";
            };
            animation.oncancel = () => {
                element.style.opacity = "1";
            };
        }
        else
        {
            element.style.opacity = "1";
        }
    });

    const onMouseOverHandler = () =>
    {
        let button = document.getElementById("langButton" + props.buttonid);
        button.getAnimations().every(animation => animation.cancel());

        button.style.border = "1px solid white";
        button.animate([
            {border: "1px solid rgba(0, 0, 0, 0)"},
            {border: "1px solid white"}
        ], {duration: 100});
        
        let leftButton = document.getElementById("langButton" + (props.buttonid - 1));
        let rightButton = document.getElementById("langButton" + (props.buttonid + 1));
        if(leftButton !== null)
        {
            leftButton.getAnimations().every(animation => animation.cancel());
            leftButton.style.borderImage = "linear-gradient(to left, white, rgba(0,0,0,0), rgba(0,0,0,0)) 1";
            leftButton.style.borderStyle = "solid";
            leftButton.style.borderWidth = "1px";
            leftButton.animate([
                {borderImage: "linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0)) 1", borderStyle: 'solid', borderWidth: '1px'},
                {borderImage: "linear-gradient(to left, white, rgba(0,0,0,0), rgba(0,0,0,0)) 1", borderStyle: 'solid', borderWidth: '1px'}
            ], {duration: 400});
        }
        if(rightButton !== null)
        {
            rightButton.getAnimations().every(animation => animation.cancel());
            rightButton.style.borderImage = "linear-gradient(to right, white, rgba(0,0,0,0), rgba(0,0,0,0)) 1";
            rightButton.style.borderStyle = "solid";
            rightButton.style.borderWidth = "1px";
            rightButton.animate([
                {borderImage: "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0)) 1", borderStyle: 'solid', borderWidth: '1px'},
                {borderImage: "linear-gradient(to right, white, rgba(0,0,0,0), rgba(0,0,0,0)) 1", borderStyle: 'solid', borderWidth: '1px'}
            ], {duration: 400});
        }
    }

    const onMouseLeaveHandler = () =>
    {
        let button = document.getElementById("langButton" + props.buttonid);
        button.getAnimations().every(animation => animation.cancel());

        button.style.border = "1px solid rgba(0,0,0,0)";
        button.animate([
            {border: "1px solid white"},
            {border: "1px solid rgba(0, 0, 0, 0)"}
        ], {duration: 100});

        let leftButton = document.getElementById("langButton" + (props.buttonid - 1));
        let rightButton = document.getElementById("langButton" + (props.buttonid + 1));
        if(leftButton !== null)
        {
            leftButton.getAnimations().every(animation => animation.cancel());
            leftButton.style.borderImage = "linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0)) 1";
            leftButton.style.borderStyle = "solid";
            leftButton.style.borderWidth = "1px";
            leftButton.animate([
                {borderImage: "linear-gradient(to left, white, rgba(0,0,0,0), rgba(0,0,0,0)) 1", borderStyle: 'solid', borderWidth: '1px'},
                {borderImage: "linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0)) 1", borderStyle: 'solid', borderWidth: '1px'}
            ], {duration: 400});
        }
        if(rightButton !== null)
        {
            rightButton.getAnimations().every(animation => animation.cancel());
            rightButton.style.borderImage = "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0)) 1";
            rightButton.style.borderStyle = "solid";
            rightButton.style.borderWidth = "1px";
            rightButton.animate([
                {borderImage: "linear-gradient(to right, white, rgba(0,0,0,0), rgba(0,0,0,0)) 1", borderStyle: 'solid', borderWidth: '1px'},
                {borderImage: "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0)) 1", borderStyle: 'solid', borderWidth: '1px'}
            ], {duration: 400});
        }
    }
    const onClickHandler = () =>
    {
        const button = document.getElementById("langButton" + props.buttonid);
        button.animate([
            {background: "rgb(150,150,150)", color: "black"},
            {background: "rgba(0,0,0,0)", color: "white"}
        ], {duration: 200});
        props.onClick(props.display);
    }
    return(
        <button className="projectLangButton" id={"langButton" + props.buttonid} onMouseOver={onMouseOverHandler} onMouseLeave={onMouseLeaveHandler} onClick={onClickHandler}>
            {props.display}
        </button>
    );
}
export default ProjectLangButton