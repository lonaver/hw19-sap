import React from "react";
import styles from "./public.module.css";

const ANAKIN_IMAGE =
  "https://i.pinimg.com/736x/09/27/5a/09275a0b75eba63c98c81af8901e6ee4.jpg";

const RAY_IMAGE =
  "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

const DARTHVADER_IMAGE =
  "https://www.shutterstock.com/image-photo/san-benedetto-del-tronto-italy-260nw-239338216.jpg";

const DART_POST =
  "https://3.bp.blogspot.com/-LGkP5IBg3iE/T8QFexhJvGI/AAAAAAAAAWc/BA2OF7PSJ-c/w1200-h630-p-k-no-nu/darth-vader-and-son-3.jpg";

const YODA_IMAGE =
  "https://www.fototapete.de/media/catalog/product/1/4/14721_star_wars_yoda_ma_1.jpg";
const YODA_POST =
  "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/12/20/Pictures/_0745b0ec-231b-11ea-8c10-7db3e225203f.jpg";
const CHUBAKA_IMAGE =
  "https://i.pinimg.com/originals/46/0e/13/460e132071327f5c7f2000f909f0b9f1.jpg";
const CHUBAKA_POST =
  "https://images.immediate.co.uk/production/volatile/sites/3/2019/09/Star-Wars-The-Force-Awakens-han-solo-chewbacca-afb1527.jpg?quality=90&resize=980,654";

const postData = [
  {
    author: {
      name: "Anakin skywalker",
      photoNick: ANAKIN_IMAGE,
      nickname: "@dart_vader",
    },
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    imagePost: RAY_IMAGE,
    date: "26 feb",
    countComment: 482,
    countLook: 146,
    countLikes: 887,
    countDownload: 0,
    theme: "themesky",
  },
  {
    author: {
      name: "Dart Vayder",
      photoNick: DARTHVADER_IMAGE,
      nickname: "@dart_vader",
    },
    content: "Happy fathers day!!! ",
    imagePost: DART_POST,
    date: "26 feb",
    countComment: 1025,
    countLook: 152,
    countLikes: 589,
    countDownload: 0,
    theme: "themegreen",
  },
  {
    author: {
      name: "Yoda",
      photoNick: YODA_IMAGE,
      nickname: "@yoda",
    },
    content: "How far times... when I was young ",
    imagePost: YODA_POST,
    date: "25 feb",
    countComment: 5025,
    countLook: 1529,
    countLikes: 12000,
    countDownload: 400,
    theme: "themesky",
  },
  {
    author: {
      name: "Chubaka",
      photoNick: CHUBAKA_IMAGE,
      nickname: "@chubaka",
    },
    content: "What the funny times ))) ",
    imagePost: CHUBAKA_POST,
    date: "27 feb",
    countComment: 625,
    countLook: 529,
    countLikes: 928,
    countDownload: 25,
    theme: "themegreen",
  },
];

const Post = ({
  author,
  content,
  imagePost,
  date,
  countComment,
  countLook,
  countLikes,
  countDownload,
  theme,
}) => {
  return (
    <div className={styles[`post`]}>
      <div className={styles["post_header"]}>
        <div className={styles["thumb_photo"]}>
          <img src={author.photoNick} alt="card author"></img>
        </div>
        <p className={styles["header_name"]}>{author.name}</p>

        <div className={styles["header_date"]}>{date}</div>
      </div>
      <h4 className={styles["post_title"]}>{content}</h4>
      <div className={styles["block"]}>
        <div className={styles["post_image"]}>
          <img src={imagePost} alt="card context"></img>
        </div>

        <form name="form_chat" class={styles["form_chat"]}>
          <div className={styles["chat_comment"]}>
            <label for="comment" className={styles["chat_area"]}>
              Comment
            </label>
            <textarea
              name="comment"
              rows="12"
              placeholder="Welcome"
              id="comment"
            ></textarea>
          </div>
          <button type="button" className={styles["btn"]}>
            WOW!
          </button>
        </form>
      </div>
      <div className={styles["wrapper"]}>
        <a className={styles["comment"]} href="">
          {countComment}
        </a>
        <a className={styles["look"]} href="">
          {countLook}
        </a>
        <a className={styles["likes"]} href="">
          {countLikes}
        </a>
        <a className={styles["wrapper_link download"]} href="#">
          {countDownload}
        </a>
      </div>
    </div>
  );
};

const PublicPage = () => {
  return (
    <div className={styles["page-public"]}>
      {postData.map((elem) => (
        <Post {...elem}></Post>
      ))}
    </div>
  );
};
export default PublicPage;
