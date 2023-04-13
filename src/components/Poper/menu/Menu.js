import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Poper';
import styles from './Menu.module.scss';
import Header from './Header';
import MenuItem from './MenuItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    const handleBack = () => {
        setHistory((prev) => prev.slice(0, -1));
    }

    const handleResetToFirstPage = () => 
    {setHistory((prev) => prev.slice(0, 1))}

    return (
        <Tippy
            hideOnClick={hideOnClick}
            //Di chuyển khối trái chiều ngnag phải chiều cao [ngang,cao]
            offset={[12, 8]}
            //visible có thể làm cho nó hiện lên dễ chỉnh sữa hoặc chỉnh đk cho nó nếu có length>0 thi nó hiện
            //xử lý thêm nếu bằng useState ở tren
            // visible
            //Có thể sử dụng trong phần kết quả VD: Tô đen vv
            interactive
            delay={[0, 800]}
            //hien thanh hover
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={handleBack}
                            />
                        )}
                        <div className={cx('menu-scroll')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={handleResetToFirstPage}
        >
            {children}
        </Tippy>
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};
export default Menu;
