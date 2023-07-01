const Header: React.FC<{}> = () => {
    return (
        <div>
            <div className="h-80;"></div>
            <header className="header fixed top-0 left-0 w-full bg-black bg-opacity-10 z-50 flex justify-between">
                <div className="logo w-20 h-10 text-center leading-80 text-2xl font-semibold bg-skyblue">仮ロゴ</div>
                <nav >
                    <ul className="w-full flex list-none p-0 m-0 mx-1">
                        <li className="w-1/3 mr-4"><a href="#">Menu 1</a></li>
                        <li className="w-1/3 mr-4"><a href="#">Menu 2</a></li>
                        <li className="w-1/3 mr-4"><a href="#">Menu 3</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
export default Header