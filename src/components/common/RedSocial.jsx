import React from "react";
import {  Grid2 } from "@mui/material";
import githubIcon from "../../assets/img/github-white.svg";
import gmailIcon from "../../assets/img/gmail.svg";
import linkedinIcon from "../../assets/img/linkedin.svg";


const RedSocial = () => {
return (
<Grid2 container spacing={2} paddingBottom={2} className="contact">
    <Grid2 item xs={4} sm={4} md={4} textAlign="center">
        <a href="https://github.com/Deiby24" target="_blank" rel="noopener noreferrer">
        <img alt="GitHub" src={githubIcon} className="social-icon" />
        </a>
    </Grid2>
    <Grid2 item xs={4} sm={4} md={4} textAlign="center">
        <a href="mailto:bhdeiby@gmail.com" target="_blank" rel="noopener noreferrer">
        <img alt="Gmail" src={gmailIcon} className="social-icon" />
        </a>
    </Grid2>
    <Grid2 item xs={4} sm={4} md={4} textAlign="center">
        <a href="https://www.linkedin.com/in/deiby-hernandez/" target="_blank" rel="noopener noreferrer">
        <img alt="LinkedIn" src={linkedinIcon} className="social-icon" />
        </a>
    </Grid2>
</Grid2>
);

}

export { RedSocial};