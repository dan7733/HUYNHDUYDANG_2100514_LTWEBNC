import Item from './Item'; // Adjust the import path as necessary

const Menu = () => {
    const list = [
        { link: '/home', content: 'Trang Chủ' },
        { link: '/about', content: 'Giới Thiệu' },
        { link: '/contact', content: 'Liên Hệ' },
        { link: 'lLogin', content: 'Đăng nhập' },
    ];

    return (
        <div>
            <ul>
                {list.map((item, index) => (
                    <Item key={index} link={item.link} content={item.content} />
                ))}
            </ul>
        </div>
    );
};

export default Menu;
