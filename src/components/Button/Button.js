import PropTypes from 'prop-types'
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    children,
    outline = false,
    primary = false,
    text=false,
    small = false,
    medium=false,
    large = false,
    disable=false,
    rounded=false,
    leftIcon,
    rightIcon,
    className,
    onClick,
    ...passProps
}) {
    let Component = 'button';
    const props = {
        onClick,
        ...passProps,
    };

        //Remove event Listener when btn is disabled
    if(disable){
        Object.keys(props).forEach((key)=> {
            if(key.startsWith('on' && typeof props[key === 'function']))
            delete props[key];
        })
    }

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        medium,
        large,
        text,
        disable,
        rounded,
        [className] :className,
    });

    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon} </span>}
            <span className={cx('title')}>{children} </span>      
            {rightIcon && <span className={cx('icon')}>{rightIcon} </span>}
            
        </Component>
    );
}
Button.propTypes={
    to: PropTypes.string,
href: PropTypes.string,
children: PropTypes.node.isRequired,
outline: PropTypes.bool,
primary: PropTypes.bool,
text: PropTypes.bool,
small: PropTypes.bool,
medium:PropTypes.bool,
large: PropTypes.bool,
disable: PropTypes.bool,
rounded: PropTypes.bool,
leftIcon: PropTypes.node,
rightIcon: PropTypes.node,
className: PropTypes.string,
onClick: PropTypes.func,
}
export default Button;
