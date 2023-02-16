import React from "react";
import { useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./contact.module.css";

export const getClassGender = (gender) => {
  if (gender === "male") {
    return styles["person_man"];
  } else if (gender === "female") {
    return styles["person_women"];
  }
  return "";
};
const Component = ({
  firstName,
  lastName,
  phone,
  gender = "",
  description,
}) => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate(`/contacts/${lastName}`, {
      state: {
        firstName,
        lastName,
        phone,
        gender,
        description,
      },
    });
  };

  return (
    <li className={styles["listAbonent"]}>
      <a href="" onClick={navigateHandler}>
        <div className={styles["nameAb"]}>
          name: <span>{`${lastName} ${firstName}`}</span>{" "}
        </div>
        <div className={styles["phoneAb"]}>
          phone:<span>{`${phone}`}</span>
        </div>
        <div className={getClassGender(gender)}>{`gender: ${gender}`}</div>
      </a>
    </li>
  );
};

const ContactPage = () => {
  const contacts = [
    {
      firstName: "Барней",
      lastName: "Стинсовський",
      phone: "+380956319521",
      gender: "male",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, esse.",
    },
    {
      firstName: "Робін",
      lastName: "Щербатська",
      phone: "+380931460123",
      gender: "female",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, a.",
    },
    {
      firstName: "Анонімний",
      lastName: "Анонімус",
      phone: "+380666666666",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus expedita corrupti maxime consectetur, earum distinctio!",
    },
    {
      firstName: "Лілія",
      lastName: "Олдровна",
      phone: "+380504691254",
      gender: "female",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nisi.",
    },
    {
      firstName: "Маршен",
      lastName: "Еріксонян",
      phone: "+380739432123",
      gender: "male",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      firstName: "Теодор",
      lastName: "Мотсбес",
      phone: "+380956319521",
      gender: "male",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, accusamus dolorem.",
    },
  ];
  const state = {
    contacts,
    filters: new Set(["female", "male", ""]),
  };
  const [stateNew, setArray] = useState(state);
  const handleSearchChange = (event) => {
    setArray(({ contacts, filters }) => {
      let valueFind = event.target.value;
      if (!valueFind) return state;
      filters.add(valueFind);
      contacts = contacts.filter(
        ({ firstName, lastName, phone }) =>
          firstName.toLowerCase().includes(valueFind.toLowerCase()) ||
          lastName.toLocaleLowerCase().includes(valueFind.toLowerCase()) ||
          phone.includes(valueFind)
      );
      return { contacts, filters };
    });
  };

  const handleFilterChange = useCallback(
    (event) => {
      setArray((previousState) => {
        let filters = new Set(previousState.filters);
        let contacts = state.contacts;

        if (event.target.checked) {
          filters.add(event.target.value);
        } else {
          filters.delete(event.target.value);
        }

        // if (filters.size) {
        contacts = contacts.filter((contact) => {
          return filters.has(
            contact.gender === undefined ? "" : contact.gender
          );
        });
        // }
        return {
          contacts,
          filters,
        };
      });
    },
    [setArray]
  );

  return (
    <div className={styles["page-contacts"]}>
      <h1>My contacts</h1>
      <div className={styles["input_area"]}>
        <label className={styles["signup_input"]}>
          <input
            type="text"
            name="message"
            placeholder="find name or number"
            onChange={handleSearchChange}
          />
        </label>
      </div>
      <div className={styles["check-area"]}>
        <fieldset className={styles["checkbox"]}>
          <legend>Check gender</legend>
          <label className={styles["checkbox_input"]}>
            <input
              type="checkbox"
              name="gender"
              onChange={handleFilterChange}
              value="male"
              defaultChecked={true}
            />
            male
          </label>
          <label className={styles["checkbox_input"]}>
            <input
              type="checkbox"
              name="gender"
              onChange={handleFilterChange}
              value="female"
              defaultChecked={true}
            />
            female
          </label>
          <label className={styles["checkbox_input"]}>
            <input
              type="checkbox"
              name="gender"
              onChange={handleFilterChange}
              value={undefined}
              defaultChecked={true}
            />
            undefined
          </label>
        </fieldset>
      </div>
      <ul className={styles["contacts"]}>
        {stateNew.contacts.map((elem) => (
          <Component {...elem}></Component>
        ))}
      </ul>
    </div>
  );
};

export default ContactPage;
