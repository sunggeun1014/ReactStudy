import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../../data.json";
import BoardDetail from "../board/BoardDetail";
import DefaultButton from "../ui/DefaultButton";

function BoardDetailPage() {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <>
      <BoardDetail 
        postId={params.postId}
        posts={data}
      />
      <div style={{ display: "flex", justifyContent: "space-around", margin: "20px 0" }}>
        <DefaultButton
          buttonClick={() => navigate(-1)}
          buttonText="목록"
        />
      </div>
    </>
  );
}

export default BoardDetailPage;
