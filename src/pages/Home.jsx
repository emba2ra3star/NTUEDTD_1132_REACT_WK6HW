import { Helmet } from "react-helmet-async";
import Header from "../componets/header/Header"
import ProductList from "../componets/main/ProductList";
import Footer from "../componets/footer/Footer";

import products from "../json/books.json"

function Home() {
    const title = "Books Gallery";
    return (
        <div className="main-layout">
            <Helmet>
                <title>WK6｜{title}</title>
            </Helmet>
            <Header className="header" title={title} />
            <ProductList className="content" data={products} />
            <Footer className="footer" />
        </div>
    );
}

export default Home;