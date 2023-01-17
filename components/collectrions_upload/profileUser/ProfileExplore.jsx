import React, { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import { useQuery } from "react-query";

function ProfileExplore({ address }) {
  const { Moralis } = useMoralis();
  const [profileImg, setProfileImg] = useState("");

  async function ProfileImg() {
    try {
      const query = new Moralis.Query("IfUser");
      query.equalTo("postOwner", address);
      const Posts = await query.find();
      const fetchedContent = JSON.parse(JSON.stringify(Posts, ["avatarUser"]));
      const avatar = fetchedContent[0]?.avatarUser;
      if (avatar) {
        return avatar?.replace('ipfs://', 'https://nftstorage.link/ipfs/');
      }
    } catch (error) {
      console.error(error);
    }
  }

  const { data } = useQuery(`avatar${address}`, ProfileImg, {
    staleTime: 1000 * 60,
    //cacheTime: 111120000,
  });

  useEffect(() => {
    if (data) {
      setProfileImg(data);
    }
  }, [data]);

  return (
      <img
        className="h-6 w-6 rounded-full imageCardProfile"
        preview={null}
        src={profileImg ? profileImg : "/images/frame_2_1.png"}
        alt="owner"
      />
  );
}
export default ProfileExplore;
