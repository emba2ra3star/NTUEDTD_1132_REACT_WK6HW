import { Helmet } from "react-helmet-async";

import Header from "../componets/header/Header"
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
    const title = "Book Detail";

    return (
        <div className="main-layout">
            <Helmet>
                <title>WK6｜{title}</title>
            </Helmet>
            <Header className="header" title={title} />
            {bookData ? <ProductDetail className="content" data={bookData} /> : <p className="content">Not Found</p>}
            <Footer className="footer"/>
        </div>
    );
}

export default Product;