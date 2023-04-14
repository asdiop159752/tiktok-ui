import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function AccountPreview({data}) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/f0d5299a324e257a6972ea68015c85c4.jpeg?x-expires=1681552800&x-signature=6sVM8yzikUNm25v7SAiEN6pFFzc%3D"
                    alt=""
                />
                    <Button medium primary> Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>{data.company.name}</strong>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </p>
                <p className={cx('name')}> {data.username}</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}> 8.2M </strong>
                    <span className={cx('label')}> Followers </span>

                    <strong className={cx('value')}> 8.2M </strong>
                    <span className={cx('label')}> Like </span>
                </p>
            </div>
        </div>
    );
}
AccountPreview.propTypes ={
    data: PropTypes.object.isRequired,
}

export default AccountPreview;
