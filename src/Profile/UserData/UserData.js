import React from 'react'

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import MainUserData from './MainUserData';
import MainCompanyData from './MainCompanyData';
import MainAddress from './MainAddress1';
// import CorUAddress from './CorAddress';

import { withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  buttonPadding: {    
    // paddingBottom: '6px',   
    marginTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
  },
});
function UserData(props) {

    const userType = props.userType;
    const {classes} = props;


    function UserType() {
        if (userType === 'person') {
            return <MainUserData />;
        } else {
            return <MainCompanyData />;
        }
    }

    // const sectionHeaders = ['Dane podstawowe', 'Adres główny', 'Adres korespondencyjny'];

    // const profileSection = sectionHeaders.map((profileHeader) => 
    //     <React.Fragment>
    //         <Typography variant="h4" component="h1" className={classes.buttonPadding}>
    //             {profileHeader}
    //         </Typography>
    //         <Divider />
    //         {/* <SectionType /> */}
    //         {getSection}
    //         <p>dddd</p>
    //     </React.Fragment>
    // );


    return (
        <React.Fragment>
            {/* {profileSection} */}
            <React.Fragment>
                <Typography variant="h4" component="h1" className={classes.buttonPadding}>
                    Dane podstawowe
                </Typography>
                <Divider />
                <UserType />
            </React.Fragment>
            <React.Fragment>
                <Typography variant="h4" component="h1" className={classes.buttonPadding}>
                    Adres główny
                </Typography>
                <Divider />
                <MainAddress />
            </React.Fragment>
        </React.Fragment>
    )
}

export default withStyles(styles)(UserData);