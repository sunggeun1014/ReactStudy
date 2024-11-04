import React from "react";
import { BoardDetailContentDiv, BoardDetailTitleDiv } from "../../style/style";
import { useParams } from "react-router-dom";

function BoardDetail(props) {
  const params = useParams();
  const post = props.posts.find((post) => post.id === parseInt(params.postId));

  return (
    <div>
      <BoardDetailTitleDiv>{post.title}</BoardDetailTitleDiv>
      <BoardDetailContentDiv>{post.content}</BoardDetailContentDiv>
    </div>
  );
}

export default BoardDetail;
