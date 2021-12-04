import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    width:'100px',
    height:'100px',
    backgroundColor: '#b6b6b6',
  },
});

const HomePre = () => {

    const classes = useStyles();

    return(
        <>
           <Box className={classes.root}>

           </Box>
        </>
    )
}

export default HomePre