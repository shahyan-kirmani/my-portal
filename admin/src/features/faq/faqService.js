import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";
const getFaqs = async () => {
  const response = await axios.get(`${base_url}faq/`, config);

  return response.data;
};

const createFaqs = async (faq) => {
  const response = await axios.post(`${base_url}faq/`, faq, config);

  return response.data;
};
const updateFaq = async (faq) => {
  const response = await axios.put(
    `${base_url}faq/${faq.id}`,
    {
      name: faq.faqData.name,
      expiry: faq.faqData.expiry,
      discount: faq.faqData.discount,
    },
    config
  );

  return response.data;
};
const getFaq = async (id) => {
  const response = await axios.get(`${base_url}faq/${id}`, config);

  return response.data;
};

const deleteFaq = async (id) => {
  const response = await axios.delete(`${base_url}faq/${id}`, config);

  return response.data;
};
const faqService = {
  getFaqs,
  createFaqs,
  deleteFaq,
  getFaq,
  updateFaq,
};

export default faqService;
