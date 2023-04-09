import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useState, useRef } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Poper';

import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setsearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult,setShowResult] =useState(true)
    const [loading,setLoading] =useState(false)

    const inputRef = useRef();

    useEffect(() => {
        if(!searchValue.trim()){
            setSearchResult([])
            return;
        }
        setLoading(true)

        fetch(`https://jsonplaceholder.typicode.com/users?q=${encodeURIComponent(searchValue)}&type=more`)
        .then((res)=> res.json())
        .then((res)=>{
            setSearchResult(res)
            setLoading(false)
        })
        .catch(()=>{
            setLoading(false)
        })
    },[searchValue]);

    const handleHideresult = () => {
        setShowResult(false)
    }

    return (
        <HeadlessTippy
            //Có thể sử dụng trong phần kết quả VD: Tô đen vv
            interactive
            //Nếu tìm kiếm có trên 0 thì hiện
            //2 đk đúng nó mới hiện ra cái thanh meny này 
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Account</h4>
                        {searchResult.map((result) => (
                        <AccountItem key={result.id} data={result}/>
                        ))}
                    </PopperWrapper>
                </div>
            )}
                onClickOutside={handleHideresult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search account and videos"
                    spellCheck={false}
                    onChange={(e) => setsearchValue(e.target.value)}
                    onFocus={()=> setShowResult(true)}
                />
                    {/* Nếu mà có value nhưng phải không có loading thì nó mới hiển thị ra */}
                {!!searchValue && !loading && (
                    <button
                        className={cx('clear')}
                        onClick={() => {
                            setsearchValue('');
                            inputRef.current.focus();
                        }}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
               {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
