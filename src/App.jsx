import Service from "./features/services/pages/Service";
import Home from "./features/StartPage/pages/Home";
import Team from "./features/Teams/pages/Team";
import Contact from "./features/contact/pages/Contact";
import Services2 from "./features/mainService/Services2";
import Projects from "./features/projects/Projects";
import Blog from "./features/blog/Blog";

function App() {
  return (
    <>
      <Home />
      <Service />
      <Team />
      <Services2 />
      <Projects />
      <Blog />
      <Contact />
    </>
  )
}

export default App;
