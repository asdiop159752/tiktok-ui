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
    large = false,
    disable=false,
    rounded=false,
    leftIcon,
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
        large,
        text,
        disable,
        rounded,
        [className] :className,
    });

    return (
        <Component className={classes} {...props}>
            <span className={cx('title')}>{children} </span>
            {leftIcon && <span className={cx('icon')}>{leftIcon} </span>}
        </Component>
    );
}

export default Button;
