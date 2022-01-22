import { useEffect, useState } from "react";
import { location, useLocation } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { GrFormEdit, GrDocument } from "react-icons/gr";
import Profile from "../../Profile";
import DropOpenTo from "./ProfileCardComponents/DropOpenTo";
import DropMore from "./ProfileCardComponents/DropMore";
import EditPage from "./ProfileCardComponents/EditPage";
import DropAddSection from "./ProfileCardComponents/DropAddSection";
import AddEditPic from "./ProfileCardComponents/AddEditPic";

const ProfileCard = ({ profile, fetchProfile }) => {
  const location = useLocation();
  const [showEditPage, setShowEditPage] = useState(false);
  const [dropdown, setDropdown] = useState("");
  const [profileImg, setProfilImg] = useState();
  // edit picture
  const [editable, setEditable] = useState(true);
  const [showAddEditPic, setShowAddEditPic] = useState(false);

  const handleCloseAddEditPic = () => setShowAddEditPic(false);
  const handleShowAddEditPic = () => setShowAddEditPic(true);

  useEffect(() => {
    setProfilImg(profile.image);
    if (location.pathname !== "/profile") {
      setEditable(false);
    }
  }, [showEditPage]);

  const showDropdown = input => {
    if (dropdown === input) {
      setDropdown("");
    } else {
      setDropdown(input);
    }
  };

  /* <span className="mx-2 round-hover" onClick={(e)=>setShowAddEditPic(true)}>
            <GoPlus />
          </span>
        </p>
       */

  return (
    <Card className="profile-card round-border">
      <div style={{ overflow: "hidden", borderRadius: "10px 10px 0 0" }}>
        <Card.Img
          variant="top"
          src={
            "https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=790&h=196&q=90&fm=webp"
          }
        />
      </div>
      <span
        className="edit-bg h4 round-hover"
        style={{ display: editable ? "block" : "none" }}
      >
        <GrFormEdit />
      </span>
      <Card.Body>
        <img
          onClick={e => {
            editable && setShowAddEditPic(true);
          }}
          className="profile-pic"
          src={profile.image}
          alt="linkedin user"
        />
        <div style={{ marginTop: "60px" }}>
          <div
            className="pAbsolute w-100 modal-box"
            style={{
              display: showAddEditPic ? "block" : "none",
            }}
          >
            <AddEditPic
              profileImg={profileImg}
              showAddEditPic={showAddEditPic}
              handleCloseAddEditPic={handleCloseAddEditPic}
            />
          </div>
        </div>
        <span
          className="round-hover  h3 text-primary pAbsolute"
          style={{ right: "20px", display: editable ? "block" : "none" }}
          onClick={e => setShowEditPage(true)}
        >
          <GrFormEdit />
        </span>

        <div style={{ marginTop: "60px" }}>
          <div
            className="pAbsolute w-100 modal-box"
            style={{
              display: showEditPage ? "block" : "none",
            }}
          >
            {profile && (
              <EditPage
                fetchProfile={fetchProfile}
                profile={profile}
                setShowEditPage={setShowEditPage}
              />
            )}
          </div>
          <p className="h2 bold">
            {profile.name} {profile.surname}
          </p>
          <p>
            {profile.title} at Strive School <br /> {profile.area}
            <i className="bi bi-dot"></i>
            <span className="h6 bold blue-link">Contact info</span>
          </p>
          <p className="h6 bold blue-link">500+ Connections</p>
          <div>
            <Button
              onClick={e => showDropdown(e.target.innerText)}
              className="h6 bold rounded-btn shadow-none"
              style={{ backgroundColor: "rgb(9, 79, 168)" }}
            >
              Open to
            </Button>
            <Button
              onClick={e => showDropdown(e.target.innerText)}
              variant="outline-secondary"
              className="h6 bold rounded-btn ml-2 shadow-none"
            >
              Add Section
            </Button>
            <Button
              onClick={e => showDropdown(e.target.innerText)}
              variant="outline-secondary"
              className="h6 bold rounded-btn ml-2 shadow-none"
            >
              More
            </Button>
          </div>
          <div className="pRelative">
            <div
              id="drop-open"
              className="drop-open grey-border"
              style={{
                display: dropdown === "Open to" ? "block" : "none",
                borderRadius: "0 10px 10px 10px",
              }}
            >
              <DropOpenTo />
            </div>
            <div
              id="drop-selection"
              className="drop-selection grey-border"
              style={{
                display: dropdown === "Add Section" ? "block" : "none",
                borderRadius: "10px 10px 10px 10px",
              }}
            >
              <DropAddSection />
            </div>

            <div
              id="drop-more"
              className="drop-more grey-border "
              style={{
                display: dropdown === "More" ? "block" : "none",
                borderRadius: "10px 0 10px 10px",
              }}
            >
              <DropMore />
            </div>
          </div>
          <div
            className="mt-3 round-border py-1 px-3"
            style={{ backgroundColor: "rgb(232,229,223)", fontSize: "14px" }}
          >
            <div className="m-0 p-0 d-flex justify-content-between">
              <span className="bold">Open to work</span>
              <span
                className="h6 round-hover"
                style={{ display: editable ? "block" : "none" }}
              >
                <GrFormEdit />
              </span>
            </div>
            <p className="bold">
              {profile.bio}
              <br />
              <span className="h6 blue-link">See all details</span>
            </p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
