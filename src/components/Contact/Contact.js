import React from "react";
import "./Contact.css";
import AlbumIcon from "@material-ui/icons/Album";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";

function Contact() {
  return (
    <div className="contact container">
      <h1 className="contact-heading">
        The only certified partner of all social and digital platforms.
      </h1>
      <div className="icon-wrapper">
        <AlbumIcon style={{ fontSize: "40px", margin: " 0 20px" }} />
        <AllInclusiveIcon style={{ fontSize: "40px", margin: "0 20px" }} />
        <CloudDownloadIcon style={{ fontSize: "40px", margin: "0 20px" }} />
        <FingerprintIcon style={{ fontSize: "40px", margin: "0 20px" }} />
        <OfflineBoltIcon style={{ fontSize: "40px", margin: "0 20px" }} />
      </div>
    </div>
  );
}

export default Contact;
