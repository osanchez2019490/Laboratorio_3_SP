import { useRoutes } from 'react-router-dom';
import './App.css'
import { Toaster } from "react-hot-toast";
import routes from "./routes.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

    let element = useRoutes(routes);
    return (
        <>
            {element}
            <Toaster position="bottom-right" reverseOrder={false} />
        </>
    );
};

export default App
