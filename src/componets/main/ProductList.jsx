import ProductItem from "./ProductItem";

function ProductList() {
    return (
        <div className="container main mx-auto min-h-screen bg-base-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                <ProductItem />
            </div>
        </div>
    );

}

export default ProductList;