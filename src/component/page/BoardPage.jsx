import { useNavigate } from "react-router-dom";
import data from "../../data.json";
import BoardList from "../board/BoardList";
import DefaultButton from "../ui/DefaultButton";

function BoardPage(props) {
  const navigate = useNavigate();

  return (
    <>
      <BoardList
        data={data}
        buttonClick={(postId) => navigate(`/boardDetail/${postId}`)}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "20px",
        }}
      >
        <DefaultButton
          buttonClick={() => {
            navigate("/boardWrite");
          }}
          buttonText="글쓰기"
        />
      </div>
    </>
  );
}

export default BoardPage;
