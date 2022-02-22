import { Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import { GrFormEdit } from "react-icons/gr";
import { axios } from "axios";
const AddEditPic = ({ showAddEditPic, handleCloseAddEditPic, profileImg }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    handleCloseAddEditPic();
    formData.append("profile", selectedFile);

    console.log(formData);

    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/61e5270f73d5cb0015395a9d/picture`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjA3YTRjZmY1ZjAwMTU5MGJkYjMiLCJpYXQiOjE2NDU1MTg2MDYsImV4cCI6MTY0NjcyODIwNn0.L81knB72Gai89P9eaaEd-av8iyNYN-iMk-sL_UOU-mY",
          },
        }
      );

      if (response.ok) {
        let data = await response.json();
        console.log("successfully Uploaded", data);
      } else {
        console.log("error on uploading");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <Modal
      show={showAddEditPic}
      onHide={handleCloseAddEditPic}
      animation={true}
      className="w-100"
    >
      <Modal.Dialog className="w-100 border-0 px-3">
        <Modal.Header closeButton>
          <Modal.Title>Change Profile Picture</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-between  align-items-center">
            <div
              style={{ width: "100px", height: "100px", marginBottom: "20px" }}
            >
              <img
                className="w-100 "
                src={selectedFile || profileImg}
                alt="change profile pic"
              />
              <input type="file" id="photo" onChange={(e) => handleChange(e)} />
              {selectedFile && (
                <>
                  <p>{selectedFile.name}</p>
                  <p className="mb-5">{selectedFile.type}</p>{" "}
                </>
              )}
            </div>
            <button
              className="bg-success text-white pointer round-border grey-border p-2 h-100"
              onClick={(e) => handleUpload(e)}
            >
              upload
            </button>
          </div>

          <div className="d-flex justify-content-between text-center px-2 mt-5 border-top pt-2">
            <div className="d-flex">
              <div className="d-flex flex-column grey-hover round-border px-2 pt-1 mx-2">
                <span>
                  <i class="bi bi-pencil-fill"></i>
                </span>
                <span>Edit</span>
              </div>
              <div className="d-flex flex-column grey-hover round-border  px-2 pt-1 mx-2">
                <span>
                  <i class="bi bi-camera-fill" />
                </span>
                <span>Add Photo</span>
              </div>
              <div className="d-flex flex-column grey-hover round-border px-2 pt-1  mx-2">
                <span>
                  <i class="bi bi-image-fill" />
                </span>
                <span>Frame</span>
              </div>
            </div>
            <div className="grey-hover round-border  px-2 pt-1 d-flex">
              <div className="d-flex flex-column mx-2">
                <span>
                  <i class="bi bi-trash-fill" />
                </span>
                <span>Delete</span>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
};

export default AddEditPic;
