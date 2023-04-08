import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faSignIn,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faMoon,
    faCloudUpload,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assetst/images';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Poper';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Poper/menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Languege',
            data: [
                {
                    type: 'languege',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'languege',
                    code: 'v',
                    title: 'VietNam',
                    // children: {
                    //     title: 'Languege',
                    //     data: [
                    //         {
                    //             code: 'en',
                    //             title: 'English 123 ',
                    //         },
                    //         {
                    //             code: 'v',
                    //             title: 'VietNam 123',
                    //         },
                    //     ],
                    // },
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        switch: 'Swith',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    const currentUser = true;


    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    });
    //---------Handle logic-------------
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'languege':
                //Handle change languege
                break;
            default:
                throw new Error('Invalid');
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/@hoaa',
        },  {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins',
        },  {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/Setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/log out',
            separate: true,
        },
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <HeadlessTippy
                    //Có thể sử dụng trong phần kết quả VD: Tô đen vv
                    interactive
                    //Nếu tìm kiếm có trên 0 thì hiện
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Account</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search account and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0,200]} content="Upload video" placement="bottom">
                                <button className={cx('action-button')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn} />}>
                                Log in
                            </Button>
                        </>
                    )}
                {/* Nếu mà có thằng currentMenu thì mình cho nó sử dụng useMenu còn nếu không có thù chỉ hiện thằng MENU_ITEM */}
                    <Menu items={ currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/eba731a3973a9d8b7441308af3257fe4~c5_100x100.jpeg?x-expires=1681120800&x-signature=8GWec7pkXFGGIzHtP%2BLwvsuifY4%3D"
                                className={cx('user-avatar')}
                                alt="Nguyen Xuan Truong"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
