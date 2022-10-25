import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer } from "./Design-System/components/index";
import { Browse, Home, Profile, Details } from "./Design-System/Pages/index";
import { AllContainer } from "./Design-System/components/index";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <AllContainer>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/browse" element={<Browse />} />
                        <Route path="/details" element={<Details />} />
                    </Routes>
                </AllContainer>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
