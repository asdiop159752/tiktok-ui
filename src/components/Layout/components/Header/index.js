import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import {faCircleXmark,faSpinner,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless';


import styles from './Header.module.scss'
import images from '~/assetst/images';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Poper';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles)
function Header () {
    const[searchResult,setSearchResult]=useState([])
    useEffect(()=>{
        setTimeout(()=>{
            setSearchResult([])
        },0)
    })

    return <header className={cx('wrapper')}> 
    <div className={cx('inner')}>
        <div className={cx('logo')}> 
                <img src={images.logo} alt="Tiktok" />
        </div>
        <Tippy 
        //Có thể sử dụng trong phần kết quả VD: Tô đen vv
        interactive
        //Nếu tìm kiếm có trên 0 thì hiện
            visible={searchResult.length > 0}
            render={(attrs)=>(
                <div className={cx('search-result')}  tabIndex="-1" {...attrs}> 
            <PopperWrapper>
                <h4 className={cx('search-title')}> 
                Account
                </h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
            </PopperWrapper>
                </div>
        )}> 
        <div className={cx('search')}>
    <input placeholder='Search account and videos' spellCheck={false} />
        <button className={cx('clear')}>
        <FontAwesomeIcon icon={faCircleXmark}/>
        </button>
        <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/> 
        <button className={cx('search-btn')}>
        <FontAwesomeIcon icon={faMagnifyingGlass}/>
        </button>
        </div>
        </Tippy> 
        <div className={cx('actions')}>

        </div>
    </div>
    </header>
}

export default Header ;