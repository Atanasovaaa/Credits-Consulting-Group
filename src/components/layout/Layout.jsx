import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";
import "./layout.scss";

export function Layout() {
    return (
        <div className="wrapper">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}