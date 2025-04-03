import { Helmet } from "react-helmet-async";
import Header from "../componets/header/Header"
import Title from "../componets/main/Title";
import ProductList from "../componets/main/ProductList";
import Footer from "../componets/footer/Footer";

import products from "../json/books.json"

function Home() {
    return (
        <div className="main-layout">
            <Helmet>
                <title>WK6|Home page</title>
            </Helmet>
            <Header />
            <Title  className="title" />
            <ProductList className="content" data={products} />
            <Footer className="footer" />
        </div>
    );
}

export default Home;