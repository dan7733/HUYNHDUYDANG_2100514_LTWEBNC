const Hello = () => {
    const hiAll = () => {
        alert("Hello everyone");
    };
    const hiYou = (name) => {
        alert("Hello " + name);
    };
    return (
        <span>
            <button onClick={hiAll}>Hi All</button>
            <button onClick={() => hiYou("Peter")}>Hi you</button>
        </span>
    );
};
export default Hello; // Xuất component để có thể sử dụng ở nơi khác
