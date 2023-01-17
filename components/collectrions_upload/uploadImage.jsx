import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";

function ImageUpload({ image, type }) {

  useEffect(() => {
    if (image) {
      type = type.split('/').reverse().join('');
      type = type.substr(0, 3);
      const postResult = (<video className="inp_img" controls autoPlay muted loop src={image} allow="fullscreen" ></video>)
      const emptyResult = (<img className="inp_img" src={image} rounded alt="" />)

      if (type === "mp4" || type === "mov" || type === "avi" || type === "m4v" || type === "mpeg" || type === "ogv" || type === "webm" || type === "wmv") {
        setPlayMan(postResult);
      }
      if (type === "gif" || type === "png" || type === "jpg" || type === "bmp" || type === "jpe" || type === "svg" || type === "web") {
        setPlayMan(emptyResult);
      }
    }
  }, [image]);

  const [playMan, setPlayMan] = useState('');

  return (playMan)

} export default ImageUpload;
