import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { getClassGender } from "../contact/Contact.page";
import styles from "../contact/contact.module.css";
import classes from "./userSingle.module.css";

const UserSingle = () => {
  const { contactName } = useParams();
  const decodedContactName = decodeURIComponent(contactName);

  const location = useLocation();
  return (
    <div className={classes["page-contact-single"]}>
      <h1 className={classes["card-contactName"]}>
        name contact: {decodedContactName}
      </h1>
      <div className={classes["card-contact"]}>
        <div className={styles["nameAb"]}>
          name:{" "}
          <span>{`${location.state.lastName} ${location.state.firstName}`}</span>{" "}
        </div>
        <div className={styles["phoneAb"]}>
          phone: <span>{`${location.state.phone}`}</span>
        </div>
        <div
          className={getClassGender(location.state.gender)}
        >{`gender: ${location.state.gender}`}</div>
        <div className={classes["description"]}>
          description: <span>{`${location.state.description}`}</span>
        </div>
      </div>
    </div>
  );
};

export default UserSingle;
