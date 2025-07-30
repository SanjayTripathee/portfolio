import { Outlet, Route, Routes } from "react-router-dom";
import About from "../About";
import Contact from "../Contact";
import Header from "../Header";
import HomePage from "../HomePage";
import Projects from "../Projects";


const ReactRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Outlet></Outlet>}>
          {/* index on a Route, it means that this route will be rendered when the parent route's path is matched exactly. */}
          <Route index element={<HomePage/>}></Route>

          <Route path='/about' element={<About/>}></Route>  

          <Route path="contact" element={<Contact />}></Route> 
            <Route path="header" element={<Header />}></Route>
            <Route path="projects" element={<Projects />}></Route>
          </Route>
        <Route path="*" element={<div>404 Page</div>}></Route>
      </Routes>
    </div>
  );
};

export default ReactRouter;