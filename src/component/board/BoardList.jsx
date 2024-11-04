import BoardListItem from "./BoardListItem";

function BoardList(props) {
  return (
    <div>
      {props.data.map((post, index) => {
        return (
          <BoardListItem
            key={post.id}
            boardTitle={post.title}
            boardAuthor={post.boardAuthor}
            boardWriteDate={post.writeDate}
            buttonClick={() => {
              props.buttonClick(post.id);
            }}
          />
        );
      })}
    </div>
  );
}

export default BoardList;
