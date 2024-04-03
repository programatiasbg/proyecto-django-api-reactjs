import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PostsPage } from "./pages/PostsPage";
import { PostFormPage } from "./pages/PostFormPage";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Navigate to="/posts" />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts-create" element={<PostFormPage />} />
          <Route path="/posts/:id" element={<PostFormPage />} />
        </Routes>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  );
}

export default App;
