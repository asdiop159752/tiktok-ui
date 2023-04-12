import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useState, useRef } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Poper';

import * as searchService from '~/services/searchServices';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setsearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    //1 searchValue là 1 chuỗi rỗng và nó chuyền qua bên useDebounce là 1 chuỗi rỗng khi delay 800ml s thì nó hiện ra
    //mà khi nó hiện ra cuối cùng khi render lại nên nên nó chỉ lấy kết quả đầu là '' và kết quả cuối cùng là do ta ghi
    //khi ngừng 800ml s thì nó sẽ request lên sever lần cuối cùng khi ngừng lại

    //Bước 1 chuỗi rỗng ''
    //Bước 2 khi mình ghi Vd: chữ trường thì mình đang ghi không ngừng thì nó láy giá trị State là 1 chuối rỗng
    //Bước 3 khi ghi xong nó set Lại State => nó chỉ lấy kết quả cuối cùng mà chỉ request lại 1 lần là lần cuối khi viết xong

 
    const debounced = useDebounce(searchValue, 800);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        const fetchApi = async () => {
            setLoading(true);
            const results = await searchService.search(debounced);
            
            setSearchResult(results);
            setLoading(false);
        };
        fetchApi();
    }, [debounced]);

    const handleHideresult = () => {
        setShowResult(false);
    };

    const handleChange = (e) =>{
        const searchvalue =e.target.value
        if(!searchvalue.startsWith(' ')) {
    setsearchValue(searchvalue)
        }
    }

    return (
        //Using a wrapper <div> or <span> tag around the reference element solves 
        //this by creating a new parentNode context. 
       <div>
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
                                <AccountItem key={result.id} data={result} />
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
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
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
                    <button className={cx('search-btn')} onMouseDown={(e)=> e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
       </div>
    );
}
export default Search;
