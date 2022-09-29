import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Index';
import Info from '../pages/Info/Index';
import Watch from '../pages/Watch/Index';
import NotFound from '../pages/NotFound';


export default function RouterApp() {

    return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info/:name" element={<Info />} />
            <Route path="/watch/:name" element={<Watch />} />
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </Router>
    )
}