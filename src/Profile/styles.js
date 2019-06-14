import { makeStyles } from '@material-ui/core/styles';
import { fontSize } from '@material-ui/system';

export const useStyles = makeStyles(theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: '75%',
            maxWidth: 800,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(0),
        },
    },
    topTabs: {
        backgroundColor: '#e1e2ea',
        fontSize: 12
        // backgroundColor: '#DEF2F1',
    },
    content: {
        padding: theme.spacing(3),
    }
}))
