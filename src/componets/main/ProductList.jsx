import ProductItem from "./ProductItem";

function ProductList({ data }) {
    return (
        <main className="container bg-base-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                {data.map((item) => (<ProductItem key={item.ID} data={item} />))}
            </div>
        </main>
    );

}

export default ProductList;