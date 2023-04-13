import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/f0d5299a324e257a6972ea68015c85c4.jpeg?x-expires=1681552800&x-signature=6sVM8yzikUNm25v7SAiEN6pFFzc%3D"
                alt=""
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>
                        nguyenxuantruong
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                    </strong>
                </p>
                <p className={cx('name')}> Nguyen Xuan Truong</p>
            </div>
        </div>
    );
}
AccountItem.propTypes = {};

export default AccountItem;
