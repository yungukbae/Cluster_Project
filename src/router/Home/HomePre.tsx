import React, { useState } from "react";
import { makeStyles, Box, Button } from "@material-ui/core";
import ModalProvider from "../../components/ModalProvider/ModalProvider";
const useStyles = makeStyles({
  root: {
    width: "100vw",
    height: "100vh",
  },
});

const Tester = () => {
  return (
    <>
      <div>이것은 모달의 내용</div>
    </>
  );
};

const HomePre: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    console.log(open);
    setOpen(!open);
  };

  return (
    <>
      <Box className={classes.root}>
        <Button onClick={handleClick}>click</Button>
        <ModalProvider click={open ? 1 : 0}>
          <Tester />
        </ModalProvider>
      </Box>
    </>
  );
};

export default HomePre;
