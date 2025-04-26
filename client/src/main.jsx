import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route} from "react-router";
import { createRoot } from 'react-dom/client'
import './main.css'

import DigitalArt from './pages/jsx/DigitalArt.jsx';
import About from './pages/jsx/About.jsx';
import PenOnPaper from './pages/jsx/PenOnPaper.jsx';
import Animation from './pages/jsx/Animation.jsx';
import Code from './pages/jsx/Code.jsx';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <StrictMode>
        <App />
    </StrictMode>
    <Routes>
        <Route path="/" index element={<About />}/>
        <Route path="/digitalart" element={<DigitalArt/>}/>
        <Route path="/penonpaper" element={<PenOnPaper/>} />
        <Route path="/animation" element={<Animation/>} />
        <Route path="/code" element={<Code/>} />
    </Routes>
</BrowserRouter>
)
