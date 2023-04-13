import classNames from "classnames/bind";
import styles from './Sidebar.module.scss'
import Menu , {MenuItem} from "./Menu";
import config from '~/config';

import {HomeIcon,HomeActiveIcon,UserGroupIcon,UserGroupActivecIcon,LiveIcon,LiveActiveIcon} from '~/components/Icons'
import SuggestedAccounts from '~/components/SuggestedAccount'

const cx = classNames.bind(styles)
function Sidebar () {
    return <aside className={cx('wrapper')}> 
        <Menu> 
        <MenuItem title= "For Your" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />    
        <MenuItem title= " Following" to={config.routes.following} icon={<UserGroupIcon />}  activeIcon={<UserGroupActivecIcon />} />    
        <MenuItem title= "LIVE" to={config.routes.live} icon={<LiveIcon />}  activeIcon={<LiveActiveIcon />} />    
        </Menu> 
        <SuggestedAccounts label='Suggested accounts'/>
        <SuggestedAccounts label='Following accounts'/>

            </aside>
}

export default Sidebar ;