import { Helmet } from "react-helmet-async";
import Header from "../componets/header/Header"
import Title from "../componets/main/Title";
import ProductList from "../componets/main/ProductList";
import Footer from "../componets/footer/Footer";

import products from "../json/books.json"

function Home() {
    const title="Books Gallery";
    return (
        <div className="main-layout">
            <Helmet>
                <title>WK6|Home page</title>
            </Helmet>
            <Header />
            <main className="container bg-base-100">
            <Title className="title" title={title} />
            <ProductList className="content" data={products} />
            </main>
            <Footer className="footer" />
        </div>
    );
}

export default Home;