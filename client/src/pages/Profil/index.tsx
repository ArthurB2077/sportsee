import TopBar from "../../layout/TopBar";
import LeftSideBar from "../../layout/LeftSideBar";
import Dashboard from "../../components/Dashboard";

const Profil: React.FC = (): JSX.Element => {
    return(
        <>
            <TopBar/>
            <LeftSideBar/>
            <Dashboard/>
        </>
    );
};

export default Profil;