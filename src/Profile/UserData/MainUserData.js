import React from 'react'

import {Typography, TextField, Grid, Input, FormHelperText} from '@material-ui/core';

import {PrimaryButton} from '../PrimaryButton.js';

import {useStyles} from './styles';


export default function MainUserData() {
    const classes = useStyles();
    const isMobile = window.innerWidth < 576;


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
        if (value !== '') {
            newUserData[getKeyByValue(userData,value)] = value;
        }
    });
    // console.log(newUserData);

    const handleChange = (event) => {
        console.log(event.target.value)
    }

    const item = Object.keys(newUserData).map((key) => 
        <Grid container className={classes.root} key={key}>
            <Grid item xs={12} md={4}>
                <Typography variant='body2'className={classes.label}>{labels[key]}</Typography>
                    
            </Grid>
            <Grid item xs={12} md={8}>
                <TextField
                        id="key"
                        name="key"
                        value={newUserData[key]}
                        onChange={handleChange}
                        fullWidth
                        disabled={true}
                    />                
            </Grid>
        </Grid>
        // <p>gbfgb</p>
        
    );


    return (
        <div>
            {item}
            <div className={classes.button}>
                <PrimaryButton
                    variant="contained"
                    // onClick={handleNext}
                >
                    {/* {activeStep === steps.length - 1 ? 'Zapisz' : 'Dalej'} */}
                    Edytuj
                </PrimaryButton>
            </div>

        </div>
    )
}