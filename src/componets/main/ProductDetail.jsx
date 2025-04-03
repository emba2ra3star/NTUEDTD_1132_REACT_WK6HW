function ProductDetail({ data }) {
    return (
        <div className="flex flex-col-2 gap-6 mt-8 p-4 border_round border-amber-400">
            <div className="w-1/3">
                <img className="rounded justify-self-center" src={data.cover} alt={data.title} />
            </div>
            <div className="w-2/3 flex flex-col gap-2">
                <span className="text-lg lg:text-4xl font-bold text-base-content">{data.title}</span>
                <p className="text-md lg:text-xl opacity-80 text-amber-100">{data.author}</p>
                <p className="text-sm lg:text-lg opacity-80 justify-self-end mt-1 pr-2">{data.summary}</p>
                <button className="btn mt-auto mb-8">Add to cart</button>
            </div>
        </div>
    );
}

export default ProductDetail;