import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2, 1),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(2, 4),
        },
        
        '& .MuiInputBase-input': {
            color: '#000000de',
            // color: '#004841',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: '#009688',
        },
    },
    label: {
        color: '#025049',
        [theme.breakpoints.up('md')]: {
            textAlign: 'right',
            paddingTop: theme.spacing(0.7),
            paddingRight: theme.spacing(3),

        }
    },
    button: {
        // float: 'right',
        textAlign: 'right',
        marginTop: theme.spacing(3),
        marginRight: theme.spacing(1),
        [theme.breakpoints.up('md')]: {
            marginRight: theme.spacing(4),
        }

    },
}));