import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import ContactForm from "./ContactForm.jsx"; // Adjust the import path based on your file structure

const ParentComponent = () => {
  const [openDialog, setOpenDialog] = useState(false);

  // Function to handle opening the dialog
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  // Function to handle closing the dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // Optional: Function to refresh the contact list
  const refreshContacts = async () => {
    try {
      // Make the GET request to your API to fetch the updated contact list
      const response = await axios.get(
        "http://localhost:8001/api/contacts/getall"
      );

      // Assuming the response contains the contacts in response.data
      const updatedContacts = response.data;

      // Log the refreshed contacts (or update your state with new contact data)
      console.log("Contact list refreshed", updatedContacts);

      // If you have a state that holds contacts in the parent component, update it here:
      // Example: setContacts(updatedContacts);
      // This assumes you have a state like const [contacts, setContacts] in your parent component.
    } catch (error) {
      console.error("Error refreshing contact list:", error);
      alert("Failed to refresh contact list. Please try again.");
    }
  };

  return (
    <div>
      {/* Button to open the contact form dialog */}
      <Button variant="contained" color="primary" onClick={handleOpenDialog}>
        Add New Contact
      </Button>

      {/* Dialog for the contact form */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Add Contact</DialogTitle>
        <DialogContent>
          {/* Pass refreshContacts and closeDialog as props to ContactForm */}
          <ContactForm
            refreshContacts={refreshContacts}
            closeDialog={handleCloseDialog}
          />
        </DialogContent>
        <DialogActions>
          {/* Close the dialog without doing anything */}
          <Button onClick={handleCloseDialog} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ParentComponent;
