import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage.js';
import NotFoundPage from './components/notfound/NotFoundPage.js';
import ContactPage from './components/contact/ContactPage';
import GalleryPage from './containers/gallery/GalleryPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="gallery" component={GalleryPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="contact" component={ContactPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
