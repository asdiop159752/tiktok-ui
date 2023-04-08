import Button from "~/components/Button";
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);


function MenuItem({data}) {
    return <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to}>  {data.title || data.switch} </Button>
}

export default MenuItem;