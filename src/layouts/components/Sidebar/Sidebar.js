import classNames from "classnames/bind";
import styles from './Sidebar.module.scss'

import Menu , {MenuItem} from "./Menu";
import config from '~/config';
import {HomeIcon,HomeActiveIcon,UserGroupIcon,UserGroupActivecIcon,LiveIcon,LiveActiveIcon} from '~/components/Icons'
import SuggestedAccounts from '~/components/SuggestedAccount'
import * as userService from '~/services/userServices'
import { useState,useEffect } from 'react';

const cx = classNames.bind(styles)
function Sidebar () {
    const[suggestedUsers,setSuggestedUsers]=useState([]);

    useEffect(() =>{
        userService.getSuggested().then(data =>{
            setSuggestedUsers(data);
        }).catch((error)=> console.log(error))

    },[])

    return <aside className={cx('wrapper')}> 
        <Menu> 
        <MenuItem title= "For Your" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />    
        <MenuItem title= " Following" to={config.routes.following} icon={<UserGroupIcon />}  activeIcon={<UserGroupActivecIcon />} />    
        <MenuItem title= "LIVE" to={config.routes.live} icon={<LiveIcon />}  activeIcon={<LiveActiveIcon />} />    
        </Menu> 
        <SuggestedAccounts label='Suggested accounts' data={suggestedUsers} />
        <SuggestedAccounts label='Following accounts'/>
            </aside>
}

export default Sidebar ;