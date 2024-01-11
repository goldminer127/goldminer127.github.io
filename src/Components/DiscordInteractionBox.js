import { Box } from '@mui/material';
import { Fragment, useState } from "react";
//import Bot from '../bot/Bot'

const DiscordInteractionBox = (props) => {
    const sendMessageToChannel = (payload, webhookUrl) =>
    {
        const data = typeof payload === 'string' ? { content: payload } : payload;

        return new Promise((resolve, reject) =>
        {
            fetch(webhookUrl, {
                method: 'POST',
                headers:
                {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }).then((response) =>
                {
                    if (!response.ok)
                    {
                        reject(new Error(`Could not send message: ${response.status}`));
                    }
                    resolve();
                }).catch((error) =>
                    {
                        console.error(error);
                        reject(error);
                    });
        });
    }

    const readMessageToChannel = (payload, webhookUrl) =>
    {
        const data = typeof payload === 'string' ? { content: payload } : payload;

        return new Promise((resolve, reject) =>
        {
            fetch(webhookUrl, {
                method: 'POST',
                headers:
                {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }).then((response) =>
                {
                    if (!response.ok)
                    {
                        reject(new Error(`Could not send message: ${response.status}`));
                    }
                    resolve();
                }).catch((error) =>
                    {
                        console.error(error);
                        reject(error);
                    });
        });
    }

    return(
        <Box component='div' sx={{width: props.width, height: props.height, background: 'grey'}}>
            <button onClick={() => sendMessageToChannel("Hell yeah", "https://discord.com/api/webhooks/1189337862102073455/-7y5vyjo7DNl0ThNjx7yAaQT2eIDGYr7bAaikCPpypNmGO9Sfv5aJPumhdXwW4QcI2R6")}>Test</button>
        </Box>
    );
}
export default DiscordInteractionBox;