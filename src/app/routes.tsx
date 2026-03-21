import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPrograms from "./pages/ServicesPrograms";
import OnlinePersonalTraining from "./pages/OnlinePersonalTraining";
import YogaMindfulness from "./pages/YogaMindfulness";
import Physiotherapy from "./pages/Physiotherapy";
import FatLossProgram from "./pages/FatLossProgram";
import CorporateWellness from "./pages/CorporateWellness";
import OurTeams from "./pages/OurTeams";
import ResultsTestimonials from "./pages/ResultsTestimonials";
import ContactBooking from "./pages/ContactBooking";
import CaseStudies from "./pages/CaseStudies";
import Blogs from "./pages/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services-programs", Component: ServicesPrograms },
      { path: "online-personal-training", Component: OnlinePersonalTraining },
      { path: "yoga-mindfulness", Component: YogaMindfulness },
      { path: "physiotherapy", Component: Physiotherapy },
      { path: "fat-loss-program", Component: FatLossProgram },
      { path: "corporate-wellness", Component: CorporateWellness },
      { path: "our-teams", Component: OurTeams },
      { path: "results-testimonials", Component: ResultsTestimonials },
      { path: "contact", Component: ContactBooking },
      { path: "case-studies", Component: CaseStudies },
      { path: "blogs", Component: Blogs },
    ],
  },
]);
