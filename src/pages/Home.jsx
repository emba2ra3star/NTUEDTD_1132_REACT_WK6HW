import { Helmet } from "react-helmet-async";
import Header from "../componets/header/Header"
import Title from "../componets/main/Title";
import ProductList from "../componets/main/ProductList";
import Footer from "../componets/footer/Footer";

function Home() {
    return (
        <div className="main-layout">
            <Helmet>
                <title>WK6|Home page</title>
            </Helmet>
            <Header />
            <Title  className="title" />
            <ProductList className="content" />
            <Footer className="footer" />
        </div>
    );
}

export default Home;