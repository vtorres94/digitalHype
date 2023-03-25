import React from "react";
import { Grid } from 'semantic-ui-react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import '../App.css'

const Header: React.FC = () => {
    return(
        <Grid className="nav-bar">
            <Grid.Row columns={2}>
                <Grid.Column computer={6} mobile={12}>
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </Grid.Column>
                <Grid.Column computer={10} mobile={6}>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default Header;