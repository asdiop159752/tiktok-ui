import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';

//forwardRef nó dùng để lấy thông tinh bên Image component bên trang header để nó lấy các thuộc 
// tính của thằng kia và có thể chuyển dữ liệu custom này vào Tippy để có thể mở thành menu
//nếu không có nó chỉ coi thằng này là 1 image bình thường và không có thuộc tính Tippy và nó sẽ không hiện thanh menu 
const Image = forwardRef(({ className, fallback : customFallback =images.noImage,src, alt, ...props }, ref) => {
    const [fallback, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(customFallback);
    };

    return (
        <img
        //Nghĩa là thằng const Image nó vẫn có thuộc tính css mặc 
        //đinh muốn custom riêng thì đổi className trong fordwardRef lại 
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
            
        />
    );
});

export default Image;
