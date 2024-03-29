import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import teal from '@material-ui/core/colors/teal'

export const PrimaryButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(teal[500]),
        backgroundColor: teal[500],
        '&:hover': {
            backgroundColor: teal[700],
        },
    },
}))(Button);