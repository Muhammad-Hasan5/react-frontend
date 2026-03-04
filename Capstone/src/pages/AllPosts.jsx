import React, { useState, useEffect } from "react";
import service from "../appwrite/config";
import { Container, PostCard } from "../components";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (posts) {
      service.getPosts([]).then((posts) => setPosts(posts.rows));
    }
  });
  return (
    <div className=" w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts?.map((post) => {
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard post={post} />
            </div>;
          })}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
