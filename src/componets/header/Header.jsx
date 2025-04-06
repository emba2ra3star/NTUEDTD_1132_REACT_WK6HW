function Header({title}) {
    return (
        <div className="py-8 bg-base-100">
            <div className="justify-items-center">
                <h1 className="text-4xl justify-items-center">
                    <span>{title}</span>
                    <hr className="border-1 w-[130%] mt-2 rounded border-amber-400" />
                </h1>
            </div>
        </div>
    );

}

export default Header;