import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";
const getContacts = async () => {
  const response = await axios.get(`${base_url}contact/`, config);

  return response.data;
};

const createContacts = async (contact) => {
  const response = await axios.post(`${base_url}contact/`, contact, config);

  return response.data;
};
const updateContact = async (contact) => {
  const response = await axios.put(
    `${base_url}contact/${contact.id}`,
    {
      name: contact.contactData.name,
      expiry: contact.contactData.expiry,
      discount: contact.contactData.discount,
    },
    config
  );

  return response.data;
};
const getContact = async (id) => {
  const response = await axios.get(`${base_url}contact/${id}`, config);

  return response.data;
};

const deleteContact = async (id) => {
  const response = await axios.delete(`${base_url}contact/${id}`, config);

  return response.data;
};
const contactService = {
  getContacts,
  createContacts,
  deleteContact,
  getContact,
  updateContact,
};

export default contactService;
