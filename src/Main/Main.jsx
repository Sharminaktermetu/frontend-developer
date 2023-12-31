import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";


const Main = () => {
    return (
        <div>
           <Header></Header>
            <div className="min-h-[calc(100vh-16px)]"> 
            <Outlet></Outlet>
            </div>
           <Footer></Footer>
        </div>
    );
};

export default Main;