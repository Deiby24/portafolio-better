import React from "react";
import {  Grid2 } from "@mui/material";

const images = require.context('../../src/img', true)
export function RedSocial() {
return (
<Grid2 container spacing={2} paddingBottom={2} className="contact">
    <Grid2 item xs={4} sm={4} md={4} textAlign="center">
        <a href="https://github.com/Deiby24" target="_blank" rel="noopener noreferrer">
        <img alt="GitHub" src={images('./github-white.svg')} className="social-icon" />
        </a>
    </Grid2>
    <Grid2 item xs={4} sm={4} md={4} textAlign="center">
        <a href="mailto:bhdeiby@gmail.com" target="_blank" rel="noopener noreferrer">
        <img alt="Gmail" src={images('./gmail.svg')} className="social-icon" />
        </a>
    </Grid2>
    <Grid2 item xs={4} sm={4} md={4} textAlign="center">
        <a href="https://www.linkedin.com/in/deiby-hernandez-a73280275/" target="_blank" rel="noopener noreferrer">
        <img alt="LinkedIn" src={images('./linkedin.svg')} className="social-icon" />
        </a>
    </Grid2>
</Grid2>
);

}