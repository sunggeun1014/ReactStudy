import styled from "styled-components";

const Wrapper = styled.div`
  width: 1000px;
  margin: auto;
`;
const HeaderDiv = styled.div`
  text-align: center;
  height: 100px;
  line-height: 100px;
`;

const HeaderTitleText = styled.label`
  font-size: 34px;
  font-weight: bold;
`;

const BoardListitemDiv = styled.div`
  display: flex;
  padding: 20px;
  border-top: 1px solid #d8d8d8;
  border-bottom: 1px solid #d8d8d8;
  cursor: pointer;
`;

const BoardTitleDiv = styled.div`
  width: 80%;
`;

const BoardWriteDateDiv = styled.div`
  width: 10%;
`;

const BoardAuthorDiv = styled.div`
  width: 10%;
`;

const Button = styled.button`
  width: 80px;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: grey;
  border-radius: 5px;
  cursor: pointer;
`;

const BoardDetailTitleDiv = styled.div`
  width: 600px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 0 auto 20px auto;
`;

const BoardDetailContentDiv = styled.div`
  width: 600px;
  height: 500px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  margin: auto;
`;

const BoardWriteTitleInput = styled.input`
  width: 500px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
`;

const BoardWriteContentTextArea = styled.textarea`
  width: 500px;
  height: 500px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  resize: none;
`

export {
  Wrapper,
  HeaderDiv,
  HeaderTitleText,
  BoardListitemDiv,
  BoardTitleDiv,
  BoardAuthorDiv,
  BoardWriteDateDiv,
  Button,
  BoardDetailTitleDiv,
  BoardDetailContentDiv,
  BoardWriteTitleInput,
  BoardWriteContentTextArea
};
