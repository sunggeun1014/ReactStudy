import React from "react";
import DefaultButton from "../ui/DefaultButton";
import { useNavigate } from "react-router-dom";
import { BoardWriteContentTextArea, BoardWriteTitleInput } from "../../style/style";

function BoardWritePage() {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <BoardWriteTitleInput type="text"/>
      </div>
      <div style={{ textAlign: "center" }}>
        <BoardWriteContentTextArea />
      </div>
      <div style={{ display: "flex", justifyContent: "space-around", margin: "20px 0" }}>
        <DefaultButton 
          buttonClick={() => navigate("/") } 
          buttonText="글쓰기"
        />
      </div>
    </>
  );
}

export default BoardWritePage;
