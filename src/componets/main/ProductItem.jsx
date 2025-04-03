import { Link } from "react-router-dom";

function ProductItem({ data }) {
    return (
        <>
            <section className="bg-base-100 mt-4 px-4">
                <div className="border-1 rounded border-amber-400">
                    <Link to={"/"}>
                        <img className="w-full rounded" src={data.cover} alt={data.title} />
                        <div className="mt-3 mb-5 px-4">
                            <span className="font-bold text-base-content">《 {data.title} 》</span>
                            <p className="text-amber-100">{data.author}</p>
                            <p className="text-base-content line-clamp-3">{data.summary}</p>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    );
}

export default ProductItem;