import './Generic.css';
import { Box } from '@mui/material';
import NavButton from "./Components/NavButton";
import RerenderAnimationHandler from './RerenderAnimationHandler'
import { useState } from 'react';
import ProjectContentBox from './Components/ProjectContentBox';
import TestComponent from './Components/TestComponent';

//Disables animations for added components on rerender if states change
let rerenderAnimationHandler = new RerenderAnimationHandler();

function App() {
  //Pass a state or hardcoded variable into lang buttons basically saying should it update or not. Upon first load it should use animation, upon select it should not. You can control it with the switch content function
  let[contentState, changeContent] = useState("home");

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
        return (
          <Box component="div" sx={{width: '90%', height: '75vh', margin: 'auto 5% auto 5%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "white"}}>
            <TestComponent sx={{width: '100%', height: '100%'}}></TestComponent>
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

  return (
    <Box component="div" sx={{bgcolor: 'black', height: '100vh'}}>
      <Box component="div" sx={{height: "5rem", marginBottom: '5vh', textAlign: 'center', justifyContent: 'flex-end', display: 'flex'}}>
        <Box component="div" sx={{width: '50%', height: '100%', display: 'flex'}}>
          <Box className="header-text" component="div" sx={{margin: "auto 0 auto 10%"}}>
            Brandon Tiev
          </Box>
        </Box>
        <Box component="div" sx={{width: '50%', height: '100%', justifyContent: 'flex-end', display: 'flex'}}>
        <NavButton text="Home" onClick={switchContent.bind(this)} content="home"/>
          <NavButton text="Projects" onClick={switchContent.bind(this)} content="projects"/>
          <NavButton text="Contact Me" onClick={switchContent.bind(this)} content="contact"/>
        </Box>
      </Box>
      <div>
        {displayContent(contentState)}
      </div>
    </Box>
  );
}

export default App;
