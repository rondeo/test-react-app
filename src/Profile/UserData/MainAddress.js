import React from 'react'

import {Typography, TextField, Grid, Input, FormHelperText} from '@material-ui/core';

import {PrimaryButton} from '../PrimaryButton.js';

import {useStyles} from './styles';


export default function MainAddress() {
    const classes = useStyles();
    const isMobile = window.innerWidth < 576;


    const addressData = {
        locality: 'locality value',
        street: 'street value',
        buildingNo: 'buildingNo value',
        apartmentNo: ''
    };

    const labels = {
        locality: 'Miejscowość',
        street: 'Ulica',
        buildingNo: 'Numer doku',
        apartmentNo: 'Numer lokalu'
    }

    let newAddressData = {};

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
      }

    Object.values(addressData).map((value) => {
        if (value !== '') {
            newAddressData[getKeyByValue(addressData,value)] = value;
        }
    });

    // Object.values(addressData).map((value) => {
    //     if (value === '') {
    //         delete addressData[value];
    //         console.log(addressData)
    //         // return addressData; 
    //     };
    // });
    // console.log(newAddressData);

    const handleChange = (event) => {
        console.log(event.target.value)
    }

    const item = Object.keys(newAddressData).map((key) => 
        <Grid container className={classes.root} key={key}>
            <Grid item xs={12} md={4}>
                <Typography variant='body2'className={classes.label}>{labels[key]}</Typography>
                    
            </Grid>
            <Grid item xs={12} md={8}>
                {/* <Typography variant='h6'>{newAddressData[key]}</Typography> */}
                <TextField
                        id="key"
                        name="key"
                        value={newAddressData[key]}
                        onChange={handleChange}
                        fullWidth
                        disabled={true}
                    />

                {/* <Input id="my-input" aria-describedby="my-helper-text" /> */}
                
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