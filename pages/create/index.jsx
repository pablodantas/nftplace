import React, { useState, useEffect, useRef } from "react";
import "tippy.js/dist/tippy.css"; // optional
import Meta from "../../components/Meta";
import Footer from "../../components/footer";
import MoralisIPFS from "../../components/ipfsGenerete/moralisIPFS";
import MoralisIPFSMetadata from "../../components/ipfsGenerete/moralisIPFSMetadata";
import { contractABI, contractAddress } from "../../contract";
import { useMoralis } from "react-moralis";

import Web3 from "web3";
import { base64IPFS } from "../../components/ipfsGenerete/base64";
const web3 = new Web3(Web3.givenProvider);

const Create = () => {
  
  const { user, Moralis } = useMoralis();
  const walletAddress = user?.attributes?.ethAddress;
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const options = ["Select", "Post", "NFT"];
  const [selected, setSelected] = useState(options[0]);
  const inputFile = useRef(null);
  const [selectedFile, setSelectedFile] = useState();
  const [preleorder, setPreleorder] = useState(false);

  const changeHandler = async (event) => {

    const img = event.target.files[0];
    if (img) {
      setSelectedFile(URL.createObjectURL(img));
      const file1 = await base64IPFS(img);
      const file1url = await MoralisIPFS(img.type, file1);
      console.log(file1url)
      setFile(file1url);
    }
  };


  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const abi = [
        {
          path: "metadata.json",
          content: {
            name: name,
            description: description,
            image: file,
          },
        },
      ];

      const metadataurl = await MoralisIPFSMetadata(abi);

      // interact with smart contract
      const contract = new web3.eth.Contract(contractABI, "0xf02275c4a88a4c2abfa6c56ab9535364751c333a");
      setPreleorder(true);
      const response = await contract.methods.createToken(metadataurl).send({ from: user.get("ethAddress") });
      const tokenId = response.events.Transfer.returnValues.tokenId;
      setPreleorder(false);
      setFile('');
      setName('');
      setDescription('');
      setSelectedFile('');
      alert(
        `NFT successfully minted. Contract address - ${contractAddress} and Token ID - ${tokenId}`
      );

    } catch (err) {
      console.error(err);
      setPreleorder(false);
      alert("Verifique faça login novamente!");
    }
  };

  async function Post() {
    const PostFeed = Moralis.Object.extend("PostFeed");
    const newPost = new PostFeed();
    newPost.set("name", name);
    newPost.set("description", description);
    newPost.set("owner", walletAddress);
    setPreleorder(true);
    if (file) {
      newPost.set("image", file);
    }
    // await newPost.save();

    setFile('');
    setName('');
    setDescription('');
    setSelectedFile('');
    setPreleorder(false);
  }

  const onImageClick = () => {
    inputFile.current.click();
  };

  const imageReset = () => {
    setFile('');
    setSelectedFile('');
  }

  return (
    <>
      {preleorder ? (
        <div id="loading" className="mt_preloader_holder">
          <div className="mt_preloader">
            <div className="outer-ring center"></div>
            <div className="inner-ring center"></div>
          </div>
        </div>
      ) : null
      }
      <div>
        <Meta title="Create" />
        {/* <!-- Create --> */}
        <section className="relative py-24">
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img
              src="/images/gradient_light.jpg"
              alt="gradient"
              className="h-full w-full"
            />
          </picture>
          <div className="container">
            <h1 className="font-display text-jacarta-700 py-16 text-center text-4xl font-medium dark:text-white">
              Create
            </h1>

            <div className="mx-auto max-w-[48.125rem]">
              {/* <!-- File Upload --> */}
              <div className="mb-6 flex items-center image_place">
                <label className="font-display text-jacarta-700 mb-2 block dark:text-white">
                  Image or Video
                  <span className="text-red">*</span>
                </label>

                {file?.name ? (
                  <p className="dark:text-jacarta-300 text-2xs mb-3">
                    successfully uploaded : {file?.name}
                  </p>
                ) : (
                  <p className="dark:text-jacarta-300 text-2xs mb-3">
                    Drag or choose your file to upload
                  </p>
                )}

                <div className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 group relative flex max-w-md flex-col items-center justify-center rounded-lg border-2 border-dashed bg-white py-20 px-5 text-center">
                  <div className="relative cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="fill-jacarta-500 mb-4 inline-block dark:fill-white"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M16 13l6.964 4.062-2.973.85 2.125 3.681-1.732 1-2.125-3.68-2.223 2.15L16 13zm-2-7h2v2h5a1 1 0 0 1 1 1v4h-2v-3H10v10h4v2H9a1 1 0 0 1-1-1v-5H6v-2h2V9a1 1 0 0 1 1-1h5V6zM4 14v2H2v-2h2zm0-4v2H2v-2h2zm0-4v2H2V6h2zm0-4v2H2V2h2zm4 0v2H6V2h2zm4 0v2h-2V2h2zm4 0v2h-2V2h2z" />
                    </svg>
                    <p className="dark:text-jacarta-300 mx-auto max-w-xs text-xs">
                      .bmp .gif .jpg/.jpeg .png .svg .webp .avi .m4v .mov .mp4
                      .mpeg .ogv .qt .webm .wmv
                    </p>
                  </div>
                  <div className="img-over absolute inset-4 cursor-pointer rounded">
                    <input className="inp_file opacity-0 group-hover:opacity-100" type="file" ref={inputFile} onChange={changeHandler} />
                    <img className="inp_img" src={selectedFile} onClick={onImageClick}></img>
                  </div>
                </div>
                {selectedFile ? (
                  <button className="mt-3 mb-3 bg_button btn_space rounded-button" onClick={imageReset}>Reset</button>
                ) : (
                  <p className="dark:text-jacarta-300 text-2xs mb-3">
                  </p>
                )}
              </div>

              {/* <!-- Name --> */}
              <div className="mb-6">
                <label
                  htmlFor="item-name"
                  className="font-display text-jacarta-700 mb-2 block dark:text-white"
                >
                  Name<span className="text-red">*</span>
                </label>
                <input
                  type="text"
                  id="item-name"
                  className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
                  placeholder="Item name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* <!-- External Link --> */}

              {/* <!-- Description --> */}
              <div className="mb-6">
                <label
                  htmlFor="item-description"
                  className="font-display text-jacarta-700 mb-2 block dark:text-white"
                >
                  Description
                </label>
                <p className="dark:text-jacarta-300 text-2xs mb-3">
                  The description will be included on the {"item's"} detail page
                  underneath its image. Markdown syntax is supported.
                </p>
                <textarea
                  id="item-description"
                  className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
                  rows="4"
                  required
                  placeholder="Provide a detailed description of your item."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              {/* <!-- Blockchain --> */}
              <div className="mb-6">
                <label
                  htmlFor="item-supply"
                  className="font-display text-jacarta-700 mb-2 block dark:text-white"
                >
                  Type of Publication
                </label>

                {/* dropdown */}
                <div className="dropdown relative mb-4 cursor-pointer ">
                  <form>
                    <select
                      className="font_select dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
                      value={selected}
                      onChange={(e) => setSelected(e.target.value)}
                    >
                      {options.map((value) => (
                        <option className="option_drop dark:text-white" value={value} key={value}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </form>
                </div>
              </div>

              {/* <!-- Freeze metadata --> */}

              {/* <!-- Submit --> */}

              {selected === "Post" ? (
                <button
                  className="bg_button btn_space rounded-button"
                  onClick={Post}
                >
                  Create Post
                </button>
              ) : (
                <p></p>
              )}

              {selected === "NFT" ? (
                <button
                  className="bg_button btn_space rounded-button"
                  onClick={onSubmit}
                >
                  Create NFT
                </button>
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </section>
        {/* <!-- end create --> */}
      </div>
      <Footer />
    </>
  );
};

export default Create;
