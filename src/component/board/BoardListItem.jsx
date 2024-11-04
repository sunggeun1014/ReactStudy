import {
  BoardListitemDiv,
  BoardTitleDiv,
  BoardAuthorDiv,
  BoardWriteDateDiv,
} from "../../style/style";

function BoardListItem(props) {
  return (
    <BoardListitemDiv onClick={props.buttonClick}>
      <BoardTitleDiv>{props.boardTitle}</BoardTitleDiv>
      <BoardAuthorDiv>{props.boardAuthor}</BoardAuthorDiv>
      <BoardWriteDateDiv>{props.boardWriteDate}</BoardWriteDateDiv>
    </BoardListitemDiv>
  );
}

export default BoardListItem;
