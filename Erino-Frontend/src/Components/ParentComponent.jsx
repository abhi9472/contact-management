import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import ContactForm from "./ContactForm.jsx";

const ParentComponent = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const refreshContacts = async () => {
    try {
      const response = await axios.get("http://localhost:8001/contacts/getall");

      const updatedContacts = response.data;

      console.log("Contact list refreshed", updatedContacts);
    } catch (error) {
      console.error("Error refreshing contact list:", error);
      alert("Failed to refresh contact list. Please try again.");
    }
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpenDialog}>
        Add New Contact
      </Button>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Add Contact</DialogTitle>
        <DialogContent>
          <ContactForm
            refreshContacts={refreshContacts}
            closeDialog={handleCloseDialog}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ParentComponent;
