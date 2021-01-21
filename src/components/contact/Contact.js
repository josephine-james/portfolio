import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import HomeIcon from "@material-ui/icons/Home";
import Box from "@material-ui/core/Box";
import "./Contact.css";

function Contact() {
  return (
    <div className="/contact">
      <Box className="contact-box" display="flex" justifyContent="center">
        <div className="listitems">
          <li>
            <EmailIcon style={{ fontSize: 50 }} /> josephinejames@gmail.com
          </li>
          <li>
            <PhoneInTalkIcon style={{ fontSize: 50 }} />
            8826160344
          </li>
          <li>
            <HomeIcon style={{ fontSize: 50 }} />
            Ghaziabad, Uttar Pradesh -201005
          </li>
        </div>
      </Box>
    </div>
  );
}

export default Contact;
