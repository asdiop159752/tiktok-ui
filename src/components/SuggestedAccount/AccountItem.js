import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Poper';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);
function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <div className={cx('preview')}>
                        <AccountPreview />
                    </div>
                </PopperWrapper>
            </div>
        );
    };
    return (
        //tag around the reference element solves this by creating a new parentNode context.
        //Specifying `appendTo: document.b
        //libray Tippy
        <div>
            <Tippy 
//Cho Khung đo hiện lên lun 
            // visible 

//Xác định xem tippy có tương tác hay không, tức là có thể di chuột qua hoặc nhấp vào mà không bị ẩn. 
//Nếu tippy của bạn xuất hiện bị cắt hoặc không nhìn thấy, hãy xem Câu hỏi thường gặp để biết giải pháp.
            interactive
//Delay thời gian hiện lên 
            delay={[900, 0]} 
//Cảnh chuyển vị trí của khung x và y x là trái phải y là trên dưới
            offset={[-20, 0]} 
//Cái này dùng để render ra UI
            render={renderPreview} 
//Dùng để nằm ở vị trí dưới
            placement="bottom"
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/f0d5299a324e257a6972ea68015c85c4.jpeg?x-expires=1681552800&x-signature=6sVM8yzikUNm25v7SAiEN6pFFzc%3D"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>nguyenxuantruong</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}> Nguyen Xuan Truong</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}
AccountItem.propTypes = {};

export default AccountItem;
