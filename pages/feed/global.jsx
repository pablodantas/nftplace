import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import { useRouter } from "next/router";
import Link from "next/link";
import Meta from "../../components/Meta";
import { current } from "@reduxjs/toolkit";
import ColGb from "./colGb";
import ColGb2 from "./colGb2";

const Global = () => {
  // botão de comentar
  const [showElement, setShowElement] = useState(false);
  const showE = () => setShowElement(true);
  const HideE = () => setShowElement(false);
  // botão de like
  const [showEle, setShowEle] = useState(false);
  const showEL = () => {
    setShowEle(true);
  };
  //Botão seguir
  const [showfollow, setShowfollow] = useState(false);
  const showFlw = () => setShowfollow(true);

  return (
    <>
      <Meta title="Feed" />
      {/* <Navbar />  */}
      <section className="secFeedpost">
        <div className="container-xl feed_container">
          <div className="row flex flex flex-nowrap justify-between">
            <ColGb />
            <ColGb2 itemFor={1}/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Global;
