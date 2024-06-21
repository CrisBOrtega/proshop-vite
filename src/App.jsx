import Header from "./components/Header.jsx";
import {Container} from "react-bootstrap";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <>
            <Header />
            <main className="py-3">
                <Container>
                    <h1>Bienvenido a Proshop</h1>
                </Container>
            </main>
            <Footer />
        </>
    )
};

export default App;

