import logo from './logo.svg';
import './App.css';
import Header from './Mycomponents/header';
import Home from './Mycomponents/home';
import Contact from "./Mycomponents/contact";
import Projects from "./Mycomponents/projects";
import Footer from "./Mycomponents/footer";
import Experience from "./Mycomponents/experience";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='bg-[var(--background)]'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects/> } />
          <Route path='/experience' element={<Experience/> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;