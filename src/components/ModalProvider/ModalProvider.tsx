import React, {
  ReactChild,
  ReactComponentElement,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  Modal,
  Backdrop,
  Fade,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    modalCont: {
      width: "700px",
      height: "80vh",
      padding: "30px",
      borderRadius: "20px",
      backgroundColor: "#FFFFFF",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    },
  })
);

interface Props {
  children?: JSX.Element;
  click: number;
}

const ModalProvider: React.FC<Props> = ({ children, click }) => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    handleOpen();
  }, [click]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className={classes.modalCont}>{children}</Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ModalProvider;
