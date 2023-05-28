import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Anime/Home/Index';
import Info from '../pages/Anime/Info/Index';
import Watch from '../pages/Anime/Watch/Index';

import Manga from '../pages/Manga/index';
import MangaList from '../pages/Manga/List/Index';
import MangaInfo from '../pages/Manga/Info/Index';
import MangaRead from '../pages/Manga/Read/Index';

import LightNovel from '../pages/LightNovel/index';
import LightNovelList from '../pages/LightNovel/List/index';
import LightNovelInfo from '../pages/LightNovel/Info/index';
import LightNovelRead from '../pages/LightNovel/Read/index';

import ApiSetting from '../pages/Settings/APISetting/index';
import SettingApiForm from '../pages/Settings/APISetting/Form/index';

import NotFound from '../pages/NotFound';


export default function RouterApp() {
    //react router v5
    return (
    <Router>
        <Routes>
            <Route index element={<Home />} />
            <Route path="info/:name" element={<Info />} />
            <Route path="watch/:name" element={<Watch />} />
            <Route path="manga" element={<Manga />} >
                {/* <Route path=":id"> */}
                    <Route index element={<MangaList />}  />
                    <Route path="info/:id" element={<MangaInfo />} />
                    <Route path="read" element={<MangaRead />} />
                {/* </Route> */}
            </Route>
            <Route path="lightnovel" element={<LightNovel />} >
                <Route index element={<LightNovelList />} />
                <Route path="info/:id" element={<LightNovelInfo />} />
                <Route path="read" element={<LightNovelRead />} />
            </Route>
            <Route path="setting/apisetting" element={<ApiSetting />} >
                <Route index element={<SettingApiForm />}  />
            </Route>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </Router>
    )
}