import classNames from "classnames/bind"
import styles from './Poper.module.scss'

const  cx = classNames.bind(styles)

function Wrapper({children}){
    return <div className={cx('wraper')}>{children} </div>
}
export default Wrapper