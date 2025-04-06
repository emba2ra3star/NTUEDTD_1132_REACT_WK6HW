import { useState } from "react";

function ProductDetail({ data }) {
    const [Qty, setQty] = useState(data.stock > 0 ? 1 : 0)
    return (
        <main className="container content bg-base-100">
            <div className="flex flex-col-2 gap-6 mt-8 p-4 border_round border-amber-400">
                <div className="w-1/3">
                    <img className="rounded justify-self-center" src={data.cover} alt={data.title} />
                </div>
                <div className="w-2/3 flex flex-col gap-2">
                    <span className="text-lg lg:text-4xl font-bold text-base-content">{data.title}</span>
                    <p className="text-md lg:text-xl opacity-80 text-amber-100">{data.author}</p>
                    <p className="text-sm lg:text-lg opacity-80 justify-self-end mt-1 pr-2">{data.summary}</p>
                    <p className="text-lg lg:text-2xl font-bold opacity-80 mt-1 pr-2">$US{data.price}</p>
                    <div className="text-sm lg:text-lg opacity-80 mt-1 pr-2 flex flex-col gap-1">
                        <p><span className="font-bold text-sm opacity-60">Status</span>: {data.stock > 0 ? "In stock" : "Unavailable"}</p>
                        <div className="flex flex-row items-center gap-2">
                            <span className="font-bold text-sm opacity-60">Qty:</span>
                            <select className="select-borderer w-20 bg-base-300 border_round border-amber-50" defaultValue={data.stock > 0 ? 1 : 0} onChange={event=>setQty(event.target.value)}>
                                {Array(data.stock).keys().map((x) => (
                                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                                ))}
                            </select>
                        </div>
                        <p><span className="font-bold text-sm opacity-60">Toltal Price: </span>{Qty * data.price}</p>
                    </div>
                    <button className="btn mt-auto mb-8">Add to cart</button>
                </div>
            </div>
        </main>
    );
}

export default ProductDetail;