import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    width:'100vw',
    height:'100vh',
    backgroundColor: '#b6b6b6',
  },
});

const HomePre = () => {

    const classes = useStyles();

    return(
        <>

           <Box className={classes.root}>
              여긴 홈이롱
           </Box>
        </>
    )
}

export default HomePre