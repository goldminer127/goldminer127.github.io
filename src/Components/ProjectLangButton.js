import "./ProjectLangButton.css"

const ProjectLangButton = (props) =>
{
    const onMouseOverHandler = () =>
    {
        let button = document.getElementById("langButton" + props.buttonid);
        button.style.border = "1px solid white";
        button.animate([
            {border: "1px solid rgba(0, 0, 0, 0)"},
            {border: "1px solid white"}
        ], {duration: 100});
        let leftButton = document.getElementById("langButton" + (props.buttonid - 1));
        let rightButton = document.getElementById("langButton" + (props.buttonid + 1));
        if(leftButton !== null)
        {
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
        button.style.border = "1px solid rgba(0,0,0,0)";
        button.animate([
            {border: "1px solid white"},
            {border: "1px solid rgba(0, 0, 0, 0)"}
        ], {duration: 100});
        let leftButton = document.getElementById("langButton" + (props.buttonid - 1));
        let rightButton = document.getElementById("langButton" + (props.buttonid + 1));
        if(leftButton !== null)
        {
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
            rightButton.style.borderImage = "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0)) 1";
            rightButton.style.borderStyle = "solid";
            rightButton.style.borderWidth = "1px";
            rightButton.animate([
                {borderImage: "linear-gradient(to right, white, rgba(0,0,0,0), rgba(0,0,0,0)) 1", borderStyle: 'solid', borderWidth: '1px'},
                {borderImage: "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0)) 1", borderStyle: 'solid', borderWidth: '1px'}
            ], {duration: 400});
        }
    }

    return(
        <button className="projectLangButton" id={"langButton" + props.buttonid} onMouseOver={onMouseOverHandler} onMouseLeave={onMouseLeaveHandler}>
            {props.display}
        </button>
    );
}
export default ProjectLangButton