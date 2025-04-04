import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter ,Routes, Route} from "react-router";
import HomePage from "./routes/homepage/Homepage.jsx";
import CreatePage from "./routes/createPage/createPage.jsx";
import PostPage from "./routes/postPage/PostPage.jsx";
import AuthPage from "./routes/authPage/AuthPage.jsx";
import ProfilePage from "./routes/profilePage/ProfilePage.jsx";
import SearchPage from "./routes/searchPage/SearchPage.jsx";
import MainLayouts from "./routes/layouts/MainLayouts.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MainLayouts/>}>
        <Route path="/" element={<HomePage/>} />
        <Route path="/create" element={<CreatePage/>} />
        <Route path="/pin/:id" element={<PostPage/>} />
        <Route path="/:username" element={<ProfilePage/>} />
        <Route path="/search" element={<SearchPage/>} />
        </Route>
        <Route path="/auth" element={<AuthPage/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
