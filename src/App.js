import './Generic.css';
import { Box } from '@mui/material';
import NavButton from "./Components/NavButton";
import RerenderAnimationHandler from './RerenderAnimationHandler'
import { useEffect, useState } from 'react';
import ProjectContentBox from './Components/ProjectContentBox';
import TestComponent from './Components/TestComponent';
import ContactContentBox from './Components/ContactContentBox';

//Disables animations for added components on rerender if states change
let rerenderAnimationHandler = new RerenderAnimationHandler();

function App() {
  //Pass a state or hardcoded variable into lang buttons basically saying should it update or not. Upon first load it should use animation, upon select it should not. You can control it with the switch content function
  let[contentState, changeContent] = useState("home");

  useEffect(() => {
    if(contentState === "contact")
    {
      let pageContentContainer = document.getElementById("page-content-display");
      let contactNavButton = document.getElementById("Contact Mebutton");
      let navHeaderContainer = document.getElementById("nav-header-container");
      let navHeaderText = document.getElementById("nav-header-text");

      pageContentContainer.style.height = window.visualViewport.height * 0.75 - document.getElementById("nav-bar").offsetHeight + "px";
      pageContentContainer.style.display = "flex";
      pageContentContainer.style.flexDirection = "column";
      pageContentContainer.style.justifyContent = "center";
      pageContentContainer.style.alignItems = "center";

      contactNavButton.style.display = 'none';
      /*
      let contactNavAnimation = contactNavButton.animate([
        {opacity: '1'},
        {opacity: '0'},
        {opacity: '0', width: '10rem'},
        {opacity: '0', width: '0'}
      ], {duration: 500});
      contactNavAnimation.onfinish = () => {
        contactNavButton.style.display = 'none';
      }
      */

      let headerAnimation = navHeaderContainer.animate([
        {width: "50%"},
        {width: "0%"},
      ], {duration: navHeaderText.textContent.length * 100});
      headerAnimation.onfinish = () => {
        navHeaderContainer.style.width = "0%";
        navHeaderContainer.style.display = "none";
      };
      
      backspaceEffect(navHeaderText);
    }
    else
    {
      document.getElementById("page-content-display").removeAttribute('style');
      document.getElementById("Contact Mebutton").removeAttribute('style');

      document.getElementById("nav-header-container").removeAttribute("style");
      document.getElementById("nav-header-text").textContent = "Brandon Tiev";
    }
  })

  const backspaceEffect = async (element) =>
  {
    while(element.textContent.length > 0)
    {
      element.textContent = element.textContent.substring(0, element.textContent.length - 1);
      await new Promise(r => setTimeout(r, 75));
    }
  }

  const displayContent = (content) =>
  {
    switch(content)
    {
      case "home":
        return (
          <Box className="home-text" component="div" sx={{width: '90%', height: '75vh', margin: 'auto 5% auto 5%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            I am a developer who just recently graduated from University at Albany, SUNY. I've worked with C#, HTML/CSS/JS and others.
          </Box>
        );
      case "projects":
        return (
          <ProjectContentBox langs={["C#", "Java", "Lua", "Rust"]} rerenderAnimationHandler={rerenderAnimationHandler}/>
        );
      case "contact":
        /*
        return (
          <Box component="div" sx={{width: '90%', height: '75vh', margin: 'auto 5% auto 5%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "white"}}>
            <TestComponent sx={{width: '100%', height: '100%'}}></TestComponent>
          </Box>
        );
        */
       return (
        <Box component="div" sx={{width: '90%', height: '50vh', margin: 'auto 5% auto 5%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <ContactContentBox rerenderAnimationHandler={rerenderAnimationHandler}>

          </ContactContentBox>
        </Box>
       );
      case "secret":
        return (
          <Box component="div" sx={{width: '90%', height: '75vh', border: '1px solid white', borderRadius: '50px', margin: 'auto 5% auto 5%', bgcolor: 'rgb(38, 38, 38)'}}>
            Test
          </Box>
        );
      default:
        return undefined;
    }
  }

  const switchContent = (content) =>
  {
    changeContent(content);
    rerenderAnimationHandler.resetShouldNotPlayAnimation();
  }

  //Check if styling nav-buttons-container looks better with flex-end or center as justify content with the buttons
  return (
    <Box component="div" sx={{bgcolor: 'black', height: '100vh'}}>
      <Box id="nav-bar" component="div" sx={{height: "5rem", marginBottom: '5vh', textAlign: 'center', justifyContent: 'center', display: 'flex'}}>
        <Box id="nav-header-container" component="div" sx={{width: '50%', height: '100%', display: 'flex'}}>
          <Box id="nav-header-text" className="header-text" component="div" sx={{margin: "auto 0 auto 10%"}}>
            Brandon Tiev
          </Box>
        </Box>
        <Box id="nav-buttons-container" component="div" sx={{width: '50%', height: '100%', justifyContent: 'center', display: 'flex'}}>
          <NavButton text="Home" onClick={switchContent.bind(this)} content="home"/>
          <NavButton text="Projects" onClick={switchContent.bind(this)} content="projects"/>
          <NavButton text="Contact Me" onClick={switchContent.bind(this)} content="contact"/>
        </Box>
      </Box>
      <div id="page-content-display">
        {displayContent(contentState)}
      </div>
    </Box>
  );
}

export default App;
