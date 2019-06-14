import React from 'react';

import {Paper, Grid, Typography, TextField, ButtonGroup, Button, Tabs, Tab} from '@material-ui/core';

import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';

import UserData from './UserData/UserData';
// import MainUserData from './UserData/MainUserData';
// import MainUserAddress from './UserData/MainUserAddress';
// import CorUserAddress from './UserData/CorUserAddress';

import {useStyles} from './styles';

export default function Profile() {
    const classes = useStyles();

    const userType = 'person'; //company
    const isMobile = window.innerWidth < 576;
    let userTypeTab = '';
    if(userType === "person" && !isMobile) {
        userTypeTab = 'Dane użytkownika';
    } else if (userType === "company" && !isMobile) {
        userTypeTab = 'Dane firmy';
    } else {
        userTypeTab = null;
    }

    const [tabValue, setValue] = React.useState(0);
    function handleTabChange(event, newValue) {
        setValue(newValue);
    }

    // const DataTypes = ['Dane podstawowe', 'Address główny', 'Address korespondencyjny'];

     
    return (
        <div className={classes.layout}>
            <Paper className={classes.paper}>  
                <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    variant="fullWidth"
                    indicatorColor="secondary"
                    textColor="secondary"
                    className={classes.topTabs}
                >
                    <Tab icon={<PersonIcon />} label={userTypeTab} />
                    <Tab icon={<PhoneIcon />} label={!isMobile && 'Kontakty'} />
                    <Tab icon={<SettingsIcon />} label={!isMobile &&'Ustawienia'} />
                </Tabs>
                         
                <div className={classes.content}>
                    {tabValue === 0 && <UserData userType={userType} />}
                    {/* <MainUserData /> */}
                    {/* <Typography variant='h4'>Address główny</Typography>
                    <MainUserAddress />
                    <Typography variant='h4'>Adres korespondencyjny</Typography>
                    <CorUserAddress /> */}                
                </div>
            </Paper>
        </div>
    )
}