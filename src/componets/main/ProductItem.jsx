import { Link } from "react-router-dom";

function ProductItem({ data }) {
    return (
        <>
            <section className="bg-base-100 mt-4 px-4">
                <div className="border_round border-amber-400">
                    <Link to={`/products/id/${data.ID}`}>
                        <img className="w-full rounded" src={data.cover} alt={data.title} />
                        <div className="flex flex-col my-3 px-4 gap-1 max-h-30">
                            <span className="font-bold italic text-base-content">{data.title}</span>
                            <p className="text-sm opacity-80 text-amber-100">{data.author}</p>
                            <p className="text-xs opacity-60 clamp-text">{data.summary}</p>
                            <p className="text-xs opacity-80 justify-self-end mt-1 pr-2">$US{data.price}</p>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    );
}

export default ProductItem;