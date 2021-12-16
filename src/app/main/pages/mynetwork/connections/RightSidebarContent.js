import { useEffect, useState } from 'react';
import axios from 'axios';
import MediaAd from "../../../components/MediaAd";

function RightSidebarContent() {

  useEffect(() => {
    // axios.get('/api/profile/about').then((res) => {
    //   setData(res.data);
    // });
  }, []);



  return (
    <div className="flex flex-col">
      <div className="mb-20">
        <MediaAd />
      </div>



    </div>
  );
}

export default RightSidebarContent;
