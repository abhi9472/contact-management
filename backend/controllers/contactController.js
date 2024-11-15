// controllers/contactController.js
import {Contact} from '../models/contactModel.js';

export const addContact = async (req, res) => {
    try {

      const { firstName, lastName, email, phoneNumber, company,jobTitle } = req.body;
  
      if (!firstName || !lastName || !email || !phoneNumber || !company || !jobTitle ) {
        return res.status(400).json({ message: "All required fields must be provided." });
      }
  
      const contact = new Contact({
        firstName,
        lastName,
        email,
        phoneNumber,
        company,
        jobTitle
      });
  
      console.log(contact); 
      await contact.save();
      res.status(201).json(contact);
    } catch (error) {
      console.error("Error creating contact:", error);
      res.status(400).json({ message: error.message });
    }
};

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateContact = async (req, res) => {
    const id=req.query._id;
    const {newnumber}=req.body;
    console.log(newnumber);
    console.log(id);
    try {
        const updateContact=await Contact.findByIdAndUpdate(
            id,
                {phoneNumber:newnumber},
                {
                    new:true
                }
        )

        if(!updateContact)
            {
                return res.status(401,"No user is available to change number");
            }
            return res.status(200).json({ message: "Number changed successfully", contact: updateContact });
        } catch (error) {
        return res.status(500).json({message:error.message});
        
    }
};
export const updateCompany = async (req, res) => {
    const id=req.query._id;
    const {newcompany}=req.body;
    // console.log(newnumber);
    // console.log(id);
    try {
        const updateContact=await Contact.findByIdAndUpdate(
            id,
                {company:newcompany},
                {
                    new:true
                }
        )

        if(!updateContact)
            {
                return res.status(401,"No user is available to change number");
            }
            return res.status(200).json({ message: "Number changed successfully", contact: updateContact });
        } catch (error) {
        return res.status(500).json({message:error.message});
        
    }
};

export const deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.query._id);
    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
