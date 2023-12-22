import './Generic.css';
import { Box } from '@mui/material';
import NavButton from "./Components/NavButton";
import ProjectLangButton from './Components/ProjectLangButton';
import ProjectDisplayBox from './Components/ProjectDisplayBox';
import { useState } from 'react';

function App() {
  const data = require("./data/projects.json");

  let[contentState, changeContent] = useState("home");
  let[langContentState, changeLang] = useState("none");

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
      //Used to adjust content box to match margins
      let width = window.visualViewport.width * .9 - (16 * 8); //16px = 1rem
      let height = window.visualViewport.height * .75 - (16 * 8);

      return (
        <Box component="div" sx={{width: '90%', height: '75vh', margin: 'auto 5% auto 5%'}}>
          <Box component="div" sx={{display: 'flex', height: '2.5rem'}}>
            <ProjectLangButton display="C#" buttonid={0} onClick={switchLangContent.bind(this)}/>
            <ProjectLangButton display="Java" buttonid={1} onClick={switchLangContent.bind(this)}/>
            <ProjectLangButton display="Lua" buttonid={2} onClick={switchLangContent.bind(this)}/>
            <ProjectLangButton display="Rust" buttonid={3} onClick={switchLangContent.bind(this)}/>
          </Box>
          <Box id="language-content-wrapper" component="div" sx={{width: '100%', height: '100%', marginTop:'2rem', display: 'flex', border: 'solid white 2px', borderRadius: '5rem'}}>
            <Box id="langauge-content" component="div" sx={{width: {width}, height: {height}, display: 'flex', margin: '4rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center', columnGap: '10%'}}>
              {displayLangContent()}
            </Box>
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
  }

  const switchLangContent = (type) =>
  {
    changeLang(type);
  }

  const displayLangContent = () =>
  {
    let projects = [];
    let filteredProjects = data.filter(entry => entry.language === langContentState);

    for(let i = 0; i < filteredProjects.length; i++)
    {
      let entry = filteredProjects[i];
      projects.push(
        <Box component="div" key={i}>
          <ProjectDisplayBox name={entry.name} coverImage={entry.coverImage} language={entry.language} index={i}/>)
        </Box>
      );
    }
    
    return (projects);
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
