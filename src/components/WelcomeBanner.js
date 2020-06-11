import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';


function WelcomeBanner() {

    return (
        <Container maxWidth="sm">
        <div className="topDiv">
            <h2 className='headerText'>What Kind of Coffee are You?</h2>
        </div>

        </Container>
    )
}

export default WelcomeBanner;



