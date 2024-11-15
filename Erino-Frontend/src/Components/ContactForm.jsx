import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import axios from "axios";

const ContactForm = ({ refreshContacts, closeDialog }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
    jobTitle: "",
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const response = await axios.post(
        "http://localhost:8001/api/contacts/add",
        formData
      );


      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        company: "",
        jobTitle: "",
      });


      if (refreshContacts) {
        refreshContacts();
      }

      console.log("Contact added successfully:", response.data);


      if (closeDialog) {
        closeDialog(); // Close the dialog
      }


      window.location.reload();
    } catch (error) {
      console.error("Error adding contact:", error);
      alert("Failed to add contact. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Job Title"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="space-between">
          <Button type="submit" variant="contained" color="primary">
            Add Contact
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {

              if (closeDialog) {
                closeDialog(); 
              }
            }}
          >
            Close
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
