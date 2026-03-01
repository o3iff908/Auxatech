import { Route, Routes } from "react-router-dom";

// HOME
import Home6 from "./pages/homePages/Home6";
import Home6Light from "./pages/homePages/Home6Light";

// INNER LIGHT
import About2LightPage from "./pages/innerPages/About2LightPage";
import Team2LightPage from "./pages/innerPages/Team2LightPage";
import ProjectLightPage from "./pages/innerPages/ProjectLightPage";
import ProjectDetailsLightPage from "./pages/innerPages/ProjectDetailsLightPage";
import ContactUsLightPage from "./pages/innerPages/ContactUsLightPage";

// SERVICES
import Services3LightPage from "./pages/servicesPages/Services3LightPage";
import ServiceDetailsLightPage from "./pages/servicesPages/ServiceDetailsLightPage";

// BLOG
import BlogStandardLightPage from "./pages/blogPages/BlogStandardLightPage";

// 404
import NotFoundPage from "./pages/innerPages/NotFoundPage";

const Routers = () => {
return ( <Routes>

  {/* الصفحة الرئيسية */}
  <Route path="/" element={<Home6Light />} />
  <Route path="/dark" element={<Home6 />} />

  {/* الصفحات */}
  <Route path="/about" element={<About2LightPage />} />
  <Route path="/team" element={<Team2LightPage />} />
  <Route path="/projects" element={<ProjectLightPage />} />
  <Route path="/project/:id" element={<ProjectDetailsLightPage />} />

  <Route path="/services" element={<Services3LightPage />} />
  <Route path="/service/:id" element={<ServiceDetailsLightPage />} />

<Route path="/blog" element={<BlogStandardLightPage />} />  

  <Route path="/contact" element={<ContactUsLightPage />} />

  {/* 404 فقط لو رابط غلط */}
  <Route path="*" element={<NotFoundPage />} />

</Routes>
);
};

export default Routers;
