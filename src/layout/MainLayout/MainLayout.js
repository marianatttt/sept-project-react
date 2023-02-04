import {Outlet,  useNavigate} from "react-router-dom";
import {Header} from "../../components";


const MainLayout = () => {

    const navigate = useNavigate();

    return (
        <div>
            <Header/>
            <Outlet/>
            <button onClick={()=>navigate(1)}>next</button>
            <button onClick={()=>navigate(-1)}>back</button>
        </div>
    );
};

export {
    MainLayout
}