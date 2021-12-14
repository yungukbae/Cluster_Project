import { Box, createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      maxWidth: "960px",
      height: "100vh",
      margin: "0 auto",
      transition: "all 1s",
      [theme.breakpoints.down("sm")]: {
        maxWidth: "720px",
      },
    },
  })
);

const LayoutCon: React.FC = (props) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>{props.children}</Box>
    </>
  );
};

export default LayoutCon;
