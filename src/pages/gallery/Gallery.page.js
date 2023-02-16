import React from "react";
import styles from "./gallery.module.css";

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
    postName: "post cats",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    postName: "post fishes",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
    postName: "post horses",
  },
];

const GalleryPage = () => {
  return (
    <ul className={styles["gallery"]}>
      {images.map((image) => (
        <li className={styles["item"]}>
          <img src={image.url} alt={image.alt}></img>
          <p>{image.postName}</p>
        </li>
      ))}
    </ul>
  );
};

export default GalleryPage;
