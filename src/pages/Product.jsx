import { Helmet } from "react-helmet-async";

import Header from "../componets/header/Header"
import Title from "../componets/main/Title";
import ProductList from "../componets/main/ProductList";
import Footer from "../componets/footer/Footer";
import { useParams } from "react-router";

import products from "../json/books.json"
import ProductDetail from "../componets/main/ProductDetail";

function Product() {
    const { bookId } = useParams();
    const bookData = products.find(
        (x) => (x.ID === Number(bookId))
    );
    const title="Book Detail";

    return (
        <div className="main-layout">
            <Helmet>
                <title>WK6|ProductInfo page</title>
            </Helmet>

            <Header />
            <main className="container content bg-base-100">
                <Title className="title" title={title} />
                {bookData ? <ProductDetail data={bookData} /> : <p>Not Found</p>}
            </main>
            <Footer />
        </div>
    );
}

export default Product;