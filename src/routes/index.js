//Layouts
import {HeaderOnly} from '~/components/Layout' 

//pages
import Home from '~/pages/Home'
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//Public Routes
export const publicRoutes =[
{path: '/', component: Home},
{path: '/following', component: Following},
{ path: '/:username', component: Profile },
{path: '/upload', component: Upload ,layout: HeaderOnly},
{path: '/search', component: Search ,layout: null},
];
export const privateRoutes =[
    
]

// export {publicRoutes,privateRoutes}
