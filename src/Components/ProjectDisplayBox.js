import { Box } from '@mui/material';
import '../Generic.css';
import { Fragment } from 'react';
import './ProjectDisplayBox.css';
import DiscordInteractionBox from './DiscordInteractionBox';

const ProjectDisplayBox = (props) => {
    const openNewTab = (link) =>
    {
        if(link !== "")
            window.open(link);
    }

    const loadLinks = () =>
    {
        console.log("links")
        let links = [];
        let index = 0;

        props.project.links.forEach(entry => {
            links.push(
                <Fragment key={index}>
                    <Box component="div" onClick={() => {openNewTab(entry[1])}} sx={{margin: '0 10% 0 10%', display: 'block', justifyContent: 'center', alignItems: 'center', cursor: (entry[1] === "") ? 'default' : 'pointer'}}>
                        <img className="project-link-image" src={(entry[0] === "") ? "/assets/project-assets/github.png" : entry[0]}/>
                        <Box component="div" className="std-text" sx={{marginTop: '1rem', textAlign: 'center'}}>
                            {entry[2]}
                        </Box>
                    </Box>
                </Fragment>
            );
            index++;
        });
        return(links);
    }

    const displayProjectContentFromTemplate = (template) =>
    {
        if(template === "demo")
        {
            return(
                <Box component="div" sx={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column'}}>
                    <Box component="div" className="title-text" sx={{margin: '0 0 2% 0', textAlign: 'center'}}>
                        {props.project.name}
                    </Box>
                    <Box component="div" sx={{height: '100%', display: 'flex'}}>
                        <Box component="div" sx={{width: '50%'}}>
                            <Box component="div" className="std-text" sx={{height: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <Box component="div" className="std-text" sx={{lineHeight: '2rem', margin: '0 5% 0 5%'}}>
                                    {props.project.description}
                                </Box>
                            </Box>
                            <Box component="div" className="std-text" sx={{height: '50%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
                                {loadLinks()}
                            </Box>
                        </Box>
                        <Box component="div" className="std-text" sx={{width: '50%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Box component="div" sx={{width: '90%', height: '90%', overflow: 'hidden'}}>
                                <DiscordInteractionBox width="100%" height="100%"/>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            );
        }
        else //Default
        {
            if(props.project.links.length > 0)
            {
                return(
                    <Box component="div" sx={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column'}}>
                        <Box component="div" className="title-text" sx={{textAlign: 'center'}}>
                            {props.project.name}
                        </Box>
                        <Box component="div" sx={{height: '100%', display: 'flex'}}>
                            <Box component="div" className="std-text" sx={{width: '50%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <Box component="div" className="std-text" sx={{lineHeight: '2rem', margin: '0 5% 0 5%'}}>
                                    {props.project.description}
                                </Box>
                            </Box>
                            <Box component="div" className="std-text" sx={{width: '40%', height: '100%', padding: '0 5% 0 5%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
                                {loadLinks()}
                            </Box>
                        </Box>
                    </Box>
                );
            }
            else
            {
                return(
                    <Box component="div" sx={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column'}}>
                        <Box component="div" className="title-text" sx={{textAlign: 'center'}}>
                            {props.project.name}
                        </Box>
                        <Box component="div" sx={{height: '100%', display: 'flex'}}>
                            <Box component="div" className="std-text" sx={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <Box component="div" className="std-text" sx={{lineHeight: '2rem', margin: '0 5% 0 5%'}}>
                                    {props.project.description}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                );
            }
        }
    }

    return(
        <Box component="div" sx={{width: '100%', height: '100%'}}>
            {displayProjectContentFromTemplate(props.project.displayTemplate)}
        </Box>
    )
}
export default ProjectDisplayBox;