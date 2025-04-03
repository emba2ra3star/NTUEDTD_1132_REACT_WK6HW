function Title({title}) {
    return (
        <div className="container main mx-auto mt-2 mb-6 bg-base-100">
            <div className="justify-items-center">
                <h1 className="text-4xl justify-items-center">
                    <span>{title}</span>
                    <hr className="border-1 w-[130%] mt-1 rounded border-amber-400" />
                </h1>
            </div>
        </div>
    );

}

export default Title;