import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Anime/Home/Index';
import Info from '../pages/Anime/Info/Index';
import Watch from '../pages/Anime/Watch/Index';

import MangaList from '../pages/Manga/List/Index';
import MangaInfo from '../pages/Manga/Info/Index';
import MangaRead from '../pages/Manga/Read/Index';

import NotFound from '../pages/NotFound';


export default function RouterApp() {
    //react router v5
    return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info/:name" element={<Info />} />
            <Route path="/watch/:name" element={<Watch />} />
            <Route path="/manga" element={<MangaList />} >
                {/* <Route path=":id"> */}
                
                    <Route index path="info/:id" element={<MangaInfo />} />
                    <Route path="read" element={<MangaRead />} />
                {/* </Route> */}
            </Route>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </Router>
    )
}