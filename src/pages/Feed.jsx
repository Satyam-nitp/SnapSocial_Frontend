import React, { useEffect, useState } from "react";
import { dummyPostsData } from "../assets/assets";
import Loading from "../components/common/Loading";
import StoryBar from "../components/common/StoryBar";

const Feed = () => {
  const [feeds, setfeeds] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchfeeds = async () => {
    setfeeds(dummyPostsData);
    setLoading(true);
  };

  useEffect(() => {
    fetchfeeds();
  }, []);

  return loading ? (
    <div className="h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex items-start justify-center xl:gap-8">
      {/* stories and post */}
      <div>
        <StoryBar/>
        <div className="p-4 space-y-6">List OF post</div>
      </div>

      {/* right sidebar */}
      <div>
        <div>
          <h1>Sponsored</h1>
        </div>
        <h1>Recent messages</h1>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Feed;
