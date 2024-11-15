import React from "react";

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ContactForm from "./ContactForm.jsx";

const Navbar = ({ refreshContacts }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Contact Management
          </Typography>
          <Button
            color="inherit"
            startIcon={<HomeIcon />}
            onClick={() => window.location.reload()}
          >
            Home
          </Button>
          <Button color="inherit" onClick={handleOpenDialog}>
            Add Contact
          </Button>
        </Toolbar>
      </AppBar>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Add New Contact</DialogTitle>
        <DialogContent>
          <ContactForm refreshContacts={refreshContacts} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;
