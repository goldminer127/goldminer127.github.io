import './Generic.css';
import { Box, Button } from '@mui/material';
import NavButton from "./Components/NavButton";
import ProjectLangButton from './Components/ProjectLangButton';
import { useState } from 'react';

function App() {
  let[contentState, changeContent] = useState("home");

  const displayContent = (content) =>
  {
    if(content === "home")
    {
      return (
        <Box className="home-text" component="div" sx={{width: '90%', height: '75vh', margin: 'auto 5% auto 5%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          I am a developer who just recently graduated from University at Albany, SUNY. I've worked with C#, HTML/CSS/JS and others.
        </Box>
      );
    }
    else if(content === "projects")
    {
      return (
        <Box id="projects" component="div" sx={{width: '90%', height: '75vh', margin: 'auto 5% auto 5%', display: 'flex'}}>
          <Box component="div" sx={{display: 'flex', height: '2.5rem'}}>
            <ProjectLangButton display="C#" buttonid={0}/>
            <ProjectLangButton display="Java" buttonid={1}/>
            <ProjectLangButton display="Lua" buttonid={2}/>
            <ProjectLangButton display="Rust" buttonid={3}/>
          </Box>
        </Box>
      )
    }
    else if(content === "contact")
    {
      
    }
    else if(content === "secret")
    {
      return (
        <Box component="div" sx={{width: '90%', height: '75vh', border: '1px solid white', borderRadius: '50px', margin: 'auto 5% auto 5%', bgcolor: 'rgb(38, 38, 38)'}}>
          Test
        </Box>
      );
    }
  }

  const switchContent = (content) =>
  {
    changeContent(content);
    switchContentAnimation();
  }

  const animateChildElement = () =>
  {
    //inline animation because I don't know any better way for this
    let element = document.getElementById(contentState)
    if(element !== null)
    {
      let elements = element.childNodes;
      for(let i = 0; i < elements.length; i++)
      {
        let elm = new HTMLElement(elements[i]);
      }
      for(let i = 0; i < elements.length; i++)
      {
        elements[i].animate([
          {opacity: "0"},
          {opacity: "1"}
        ], {duration: 50});
      }
    }
  }

  const switchContentAnimation = () =>
  {

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
          <NavButton text="Projects" onClick={switchContent.bind(this)} content="projects"/>
          <NavButton text="Contact Me" onClick={switchContent.bind(this)} content="contact"/>
        </Box>
      </Box>
      <div onLoad={animateChildElement}>
        {displayContent(contentState)}
      </div>
    </Box>
  );
}

export default App;
