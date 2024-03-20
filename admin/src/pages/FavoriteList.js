import React, { useEffect, useState } from "react";
import { Input, Modal, Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteABlog, getBlogs, resetState } from "../features/blogs/blogSlice";
import CustomModal from "../components/CustomModal";
import { base_url } from "../utils/baseUrl";
import axios from "axios";
import { toast } from "react-toastify";






const FavoriteList = () => {

  const [searchText, setSearchText] = useState('')

  const [toggle, setToggle] = useState({
    id: "",
    status: "",
  });




  const columns = [
    {
      title: "SNo",
      dataIndex: "key",
    },
    {
      title: "Title",
      dataIndex: "title",
      filteredValue: [searchText],
      onFilter: (value, record) => {

        return String(record.title).toLowerCase().includes(value.toLowerCase()) ||
          String(record.price).toLowerCase().includes(value.toLowerCase()) ||
          String(record.beds).toLowerCase().includes(value.toLowerCase()) ||

          String(record.email).toLowerCase().includes(value.toLowerCase()) ||
          String(record.key).toLowerCase().includes(value.toLowerCase())
          ;

      }
    },
    {
      title: "Image",
      dataIndex: "image",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Beds",
      dataIndex: "beds",
    },
    {
      title: "Baths",
      dataIndex: "baths",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Updated_At",
      dataIndex: "updatedAt",
    },
    {
      title: "featured",
      dataIndex: "featured",
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];


  const [open, setOpen] = useState(false);
  const [blogId, setblogId] = useState("");
  const [listing, setListing] = useState([]);

  const showModal = (e) => {
    setOpen(true);
    setblogId(e);
  };

  useEffect(() => {
    axios
      .get(`${base_url}property/get`)
      .then((res) => {
        console.log(res.data, "agency signup");
        setListing(res.data.data);
      })
      .catch((err) => { });
  }, []);

  const hideModal = () => {
    setOpen(false);
  };

  const data1 = [];
  for (let i = 0; i < listing.length; i++) {

    if (listing[i].featured === true) {
      data1.push({
        key: i + 1,
        title: listing[i].title,
        image: (
          <>
            <img
              src={listing[i]?.image[0]?.url}
              style={{ width: "60px", height: "60px", borderRadius: "50%" }}
              alt=""
            />
          </>
        ),
        price: listing[i].price,
        beds: listing[i].beds,
        baths: listing[i].baths,
        email: listing[i].email,
        updatedAt: listing[i].updatedAt,
        featured: (
          <>




            <label class="switch">
              {listing[i]?.featured === true ? (
                <input
                  type="checkbox"
                  value={i?.id}
                  onChange={(e) => {
                    setToggle({ id: e.target.value });
                  }}
                  onClick={() => {

                    const params = {

                      'featured': false

                    }
                    axios
                      .put(`${base_url}property/update/${listing[i]?.id}`, params)
                      .then((res) => {
                        console.log(res.data);
                        if (res.data.status === "ok") {
                          toast.success("Featured disabled");

                          axios
                            .get(`${base_url}property/get`)
                            .then((res) => {
                              console.log(res.data, "agency signup");
                              setListing(res.data.data);
                            })
                            .catch((err) => { });
                        }
                      });
                  }}
                  defaultChecked
                />
              ) : (
                <input
                  type="checkbox"
                  value={i?.id}
                  onChange={(e) => {
                    setToggle({ id: e.target.value });
                  }}
                  onClick={() => {


                    const params = {

                      'featured': true

                    }
                    axios
                      .put(`${base_url}property/update/${listing[i]?.id}`, params)
                      .then((res) => {
                        console.log(res.data);
                        if (res.data.status === "ok") {
                          toast.success("Featured enabled");

                          axios
                            .get(`${base_url}property/get`)
                            .then((res) => {
                              console.log(res.data, "agency signup");
                              setListing(res.data.data);
                            })
                            .catch((err) => { });
                        }
                      });
                  }}
                />
              )}
              <span class="slider round"></span>
            </label>

          </>
        ),
        action: (
          <>
            {/* <Link
              to={`/admin/blog/${listing[i].id}`}
              className=" fs-3 text-danger"
            >
              <BiEdit />
            </Link> */}
            <button
              className="ms-3 fs-3 text-danger bg-transparent border-0"
              onClick={() => showModal(listing[i].id)}
            >
              <AiFillDelete />
            </button>
          </>
        ),
      });
    }

  }
  const deleteContact = (e) => {
    axios
      .delete(`${base_url}property/delete/${e}`)
      .then((res) => {
        if (res.data.status === "ok") {
          toast.success("Property delete Successfully!");

          axios
            .get(`${base_url}property/get`)
            .then((res) => {
              console.log(res.data, "Advertisement signup");
              setListing(res.data.data);
            })
            .catch((err) => { });
        }
        console.log(res.data, "Advertisement signup");
      })
      .catch((err) => { });

    setOpen(false);
    setTimeout(() => { }, 100);
  };
  return (
    <div>
      <div className="page-header pb-4">
        <div className="row" style={{ alignItems: "center" }}>
          <div className="col-sm-10">
            <div className="page-header-left">
              <h3>
                Favorite List
                <small>Welcome to admin panel</small>
              </h3>
            </div>
          </div>
          <div className="col-sm-2">
            {/* Breadcrumb start */}
            <ol className="breadcrumb pull-right">
              <li className="breadcrumb-item">
                <a href="index.html">
                  <i className="fa fa-home" />
                </a>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
            {/* Breadcrumb end */}
          </div>
        </div>
      </div>

      <Input.Search placeholder="Enter search here.." onSearch={(value) => (
        setSearchText(value)
      )}

        onChange={(e) => {

          setSearchText(e.target.value)
        }}

      />


      <div className="pt-2">
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteContact(blogId);
        }}
        title="Are you sure you want to delete this blog?"
      />

      <div
        className=""
        style={{ position: "absolute", bottom: 60, right: 100 }}
      >
        <div
          className="text-center"
          style={{
            width: "80px",
            height: "80px",
            lineHeight: "75px",
            backgroundColor: "#4DB749",
            borderRadius: "50%",
          }}
        >
          <Link
            to="/admin/add_property"
            className="text-center text-white fs-1"
          >
            +
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FavoriteList;
