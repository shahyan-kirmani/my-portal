import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAFaq, getAllFaq} from "../features/faq/faqSlice";
import CustomModal from "../components/CustomModal";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },

  {
    title: "Question",
    dataIndex: "question",
    sorter: (a, b) => a.question.length - b.question.length,
  },
  {
    title: "Answer",
    dataIndex: "answer",
    sorter: (a, b) => a.answer - b.answer,
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    sorter: (a, b) => a.createdAt - b.createdAt,
  },

  {
    title: "Action",
    dataIndex: "action",
  },
];

const Blogs = () => {
  const [open, setOpen] = useState(false);
  const [contactId, setcontactId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setcontactId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllFaq());
  }, []);
  const contactState = useSelector((state) => state.contact.contacts);
  const data1 = [];
  for (let i = 0; i < contactState?.length; i++) {
    data1.push({
      key: i + 1,
      name: contactState[i].name,
      discount: contactState[i].discount,
      expiry: new Date(contactState[i].expiry).toLocaleString(),
      action: (
        <>
          {/* <Link
            to={`/admin/contact/${contactState[i]._id}`}
            className=" fs-3 text-danger"
          >
            <BiEdit />
          </Link> */}
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(contactState[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }
  const deleteContact = (e) => {
    dispatch(deleteAFaq(e));

    setOpen(false);
    setTimeout(() => {
      dispatch(getAllFaq());
    }, 100);
  };
  return (
    <div>
      <h3 className="mb-4 title">Faq</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteContact(contactId);
        }}
        title="Are you sure you want to delete this Contact?"
      />
    </div>
  );
};

export default Blogs;
