import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoardPage from "./component/page/BoardPage";
import { HeaderDiv, HeaderTitleText, Wrapper } from "./style/style";
import BoardDetailPage from "./component/page/BoardDetailPage";
import BoardWritePage from "./component/page/BoardWritePage";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <HeaderDiv>
          <HeaderTitleText>미니 게시판</HeaderTitleText>
        </HeaderDiv>
        <Routes>
          <Route index element={<BoardPage />} />
          <Route path="/boardDetail/:postId" element={<BoardDetailPage />} />
          <Route path="/boardWrite" element={<BoardWritePage />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
