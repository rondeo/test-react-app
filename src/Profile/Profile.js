import React from 'react';
import {Paper, Typography} from '@material-ui/core';

import MainUserData from './UserData/MainUserData';
import MainUserAddress from './UserData/MainUserAddress';
import CorUserAddress from './UserData/CorUserAddress';

import useStyles from './styles';

export default function Profile() {
    const classes = useStyles();

    const DataTypes = ['Dane podstawowe', 'Address główny', 'Address korespondencyjny']

     
    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant='h4'>Dane podstawowe</Typography>
                <MainUserData />
                {/* <Typography variant='h4'>Address główny</Typography>
                <MainUserAddress />
                <Typography variant='h4'>Adres korespondencyjny</Typography>
                <CorUserAddress /> */}
            </Paper>
        </div>
    )
}