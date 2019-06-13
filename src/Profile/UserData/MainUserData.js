import React from 'react'

import {Typography, FormControl, Grid, Input, FormHelperText} from '@material-ui/core';
import useStyles from './styles';



export default function MainUserData() {
    const classes = useStyles();

    const userData = {
        name: 'name',
        surname: 'surname',
        email: 'email',
        phoneNumber: 'phoneNumber',
        pesel: '',
        docType: 'docType',
        docNumber: 'docNumber',
    };

    const labels = {
        name: 'Imię',
        surname: 'Nazwisko',
        email: 'E-mail',
        phoneNumber: 'Numer kontaktowy',
        pesel: 'PESEL',
        docType: 'Rodzaj dokumentu tożsamości',
        docNumber: 'Numer dokumentu tożsamości',
    }

    let newUserData = {};

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
      }

    Object.values(userData).map((value) => {
            newUserData[getKeyByValue(userData,value)] = (value !== '') ? value : 'Brak';

        }
    );
    console.log(newUserData);

    const item = Object.keys(newUserData).map((key) => 
        <Grid container className={classes.root} key={key}>
            <Grid item xs={12} md={4} spacing={2}>
                <Typography variant='body1'>{labels[key]}</Typography>
                    
            </Grid>
            <Grid item xs={12} md={4} spacing={2}>
                <Typography variant='h6'>{newUserData[key]}</Typography>

                {/* <Input id="my-input" aria-describedby="my-helper-text" /> */}
                
            </Grid>
        </Grid>
        // <p>gbfgb</p>
        
    );


    return (
        <div>
            {item}
            
        </div>
    )
}