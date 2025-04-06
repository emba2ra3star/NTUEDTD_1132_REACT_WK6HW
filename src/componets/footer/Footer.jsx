function Footer() {
    return (
        <div className="footer">
            <div className="bg-base-100 flex flex-col items-center px-16">
                <hr className="w-[60%] border_rounded border-amber-300 " />
                <div className="text-base-content flex flex-col gap-5 my-7">
                    <div className="flex justify-center gap-8">
                        <div className="w-[60%]">
                            <span className="font-bold">DESCRIPTIONS</span>
                            <p className="indent-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                                deleniti iste sit enim. Veniam eos sequi laudantium optio, saepe
                                excepturi illo autem quibusdam delectus illum ipsa? Nobis culpa
                                debitis error!
                            </p>
                        </div>
                        <div className="w[40%]">
                            <span className="font-extrabold">CONTACT US</span>
                            <p className="text-gray-300">02 2732 1104</p>
                        </div>
                    </div>

                    <p className="mx-auto opacity-60">
                        © 2006 - 2023 Copyright Digital Technology Design
                    </p>
                </div>
            </div>
        </div>
    );

}

export default Footer;