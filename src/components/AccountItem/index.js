import PropTypes from 'prop-types'
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'

import Image from '~/components/Image'


const cx = classNames.bind(styles);

function AccountItem({data}) {
    return (
        <Link to={`/@${data.username}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src="{data.avatar}" alt="{data.name}" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span> {data.name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}> {data.username}</span>
            </div>
        </Link>
    );
}
AccountItem.propTypes ={
    data: PropTypes.object.isRequired,
}
export default AccountItem;
