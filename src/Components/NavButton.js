import "./NavButton.css";

const NavButton = (props) =>
{
    const onClickHandler = () =>
    {
        animation();
        props.onClick(props.content);
    }
    const generateRandom = (min, max) =>
    {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const onMouseOverHandler = async () =>
    {
        const button = document.getElementById(props.text + "button");
        let bLeftPrevious = "1px solid rgba(255, 255, 255, 0)";
        let bTopPrevious = "1px solid rgba(255, 255, 255, 0)";
        let bRightPrevious = "1px solid rgba(255, 255, 255, 0)";
        let bBottomPrevious = "1px solid rgba(255, 255, 255, 0)";
        for(let i = 0; i < 5; ++i)
        {
            button.animate([
                {borderLeft: bLeftPrevious, borderTop: bTopPrevious, borderRight: bRightPrevious, borderBottom: bBottomPrevious}
            ], {duration: 100});
            bLeftPrevious = "1px solid rgba(255, 255, 255, " + generateRandom(0, 1) + ")";
            bTopPrevious = "1px solid rgba(255, 255, 255, " + generateRandom(0, 1) + ")";
            bRightPrevious = "1px solid rgba(255, 255, 255, " + generateRandom(0, 1) + ")";
            bBottomPrevious = "1px solid rgba(255, 255, 255, " + generateRandom(0, 1) + ")";
            await new Promise(r => setTimeout(r, generateRandom(100, 120)));
        }
        button.style.border = "1px solid white";
    }
    const onMouseLeaveHandler = async () =>
    {
        const button = document.getElementById(props.text + "button");
        button.style.border = "1px solid rgba(0, 0, 0, 0)"; //needed in case user mouses off button near 0 tick
        button.animate([
            {border: "1px solid white"},
            {borderLeft: "1px solid rgba(255, 255, 255, 0)", borderTop: "1px solid rgba(255, 255, 255, 1)", borderRight: "1px solid rgba(255, 255, 255, 1)", borderBottom: "1px solid rgba(255, 255, 255, 1)"},
            {borderLeft: "1px solid rgba(255, 255, 255, 0)", borderTop: "1px solid rgba(255, 255, 255, 0)", borderRight: "1px solid rgba(255, 255, 255, 1)", borderBottom: "1px solid rgba(255, 255, 255, 1)"},
            {borderLeft: "1px solid rgba(255, 255, 255, 0)", borderTop: "1px solid rgba(255, 255, 255, 0)", borderRight: "1px solid rgba(255, 255, 255, 0)", borderBottom: "1px solid rgba(255, 255, 255, 1)"},
            {borderLeft: "1px solid rgba(255, 255, 255, 0)", borderTop: "1px solid rgba(255, 255, 255, 0)", borderRight: "1px solid rgba(255, 255, 255, 0)", borderBottom: "1px solid rgba(255, 255, 255, 0)"}
        ], {duration: 600});
        await new Promise(r => setTimeout(r, 600));
        button.style.border = "1px solid rgba(0, 0, 0, 0)";
    }
    const animation = () =>
    {
        const button = document.getElementById(props.text + "button");
        button.animate([
            {background: "white", color: "black"},
            {background: "rgba(0,0,0,0)", color: "white"}
        ], {duration: 200});
    }
    return(
        <button id={props.text + "button"} className="NavButton" onClick={onClickHandler} onMouseOver={onMouseOverHandler} onMouseLeave={onMouseLeaveHandler}>
            {props.text}
        </button>
    );
}
export default NavButton