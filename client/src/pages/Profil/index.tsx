import TopBar from "../../layout/TopBar";
import LeftSideBar from "../../layout/LeftSideBar";
import Dashboard from "../../components/Dashboard";


/**
 * @description Page component displaying the profil interface
 */

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