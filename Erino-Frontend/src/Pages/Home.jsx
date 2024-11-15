import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const HomePage = () => {
  const [contacts, setContacts] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    phoneNumber: "",
    company: "",
  });

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8001/contacts/getall"
        );
        setContacts(response.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
        alert("Failed to load contacts. Please try again.");
      }
    };

    fetchContacts();
  }, []);

  const handleEdit = (contact) => {
    setSelectedContact(contact);
    setUpdatedData({
      phoneNumber: contact.phoneNumber,
      company: contact.company,
    });
    setOpenDialog(true);
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8001/contacts/update?_id=${selectedContact._id}`,
        {
          phoneNumber: updatedData.phoneNumber,
          company: updatedData.company,
        }
      );

      setContacts((prevContacts) =>
        prevContacts.map((contact) =>
          contact._id === selectedContact._id
            ? {
                ...contact,
                phoneNumber: updatedData.phoneNumber,
                company: updatedData.company,
              }
            : contact
        )
      );

      setOpenDialog(false);
      setSelectedContact(null);
      setUpdatedData({ phoneNumber: "", company: "" });

      console.log("Update successful:", response.data);
    } catch (error) {
      console.error("Error updating contact:", error);
      alert("Failed to update contact. Please try again.");
    }
  };

  const handleDelete = async (contactId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8001/contacts/delete?_id=${contactId}`
      );

      setContacts(contacts.filter((contact) => contact._id !== contactId));

      console.log("Delete successful:", response.data);
    } catch (error) {
      console.error("Error deleting contact:", error);
      alert("Failed to delete contact. Please try again.");
    }
  };

  const handleAddContact = async () => {
    try {
      const response = await axios.post("http://localhost:8001/contacts/add", {
        phoneNumber: updatedData.phoneNumber,
        company: updatedData.company,
      });

      setContacts((prevContacts) => [...prevContacts, response.data]);

      setOpenDialog(false);
      setUpdatedData({ phoneNumber: "", company: "" });

      console.log("Contact added successfully:", response.data);
    } catch (error) {
      console.error("Error adding contact:", error);
      alert("Failed to add contact. Please try again.");
    }
  };

  return (
    <div>
      <h2>Contact List</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>First Name</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Last Name</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Email</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Phone Number</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Company</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Job Title</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact._id}>
                <TableCell>{contact.firstName}</TableCell>
                <TableCell>{contact.lastName}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.phoneNumber}</TableCell>
                <TableCell>{contact.company}</TableCell>
                <TableCell>{contact.jobTitle}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(contact)}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(contact._id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for editing or adding a contact */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>
          {selectedContact ? "Edit Contact" : "Add New Contact"}
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Phone Number"
            fullWidth
            margin="normal"
            value={updatedData.phoneNumber}
            onChange={(e) =>
              setUpdatedData({ ...updatedData, phoneNumber: e.target.value })
            }
          />
          <TextField
            label="Company"
            fullWidth
            margin="normal"
            value={updatedData.company}
            onChange={(e) =>
              setUpdatedData({ ...updatedData, company: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={selectedContact ? handleUpdate : handleAddContact}
            color="primary"
          >
            {selectedContact ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default HomePage;
