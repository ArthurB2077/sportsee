import { useContext } from "react";
import { DataContext } from '../../utils/context';
import Info from "../../components/Info";
import styled from "styled-components";
import Activity from "../Activity";
import Sessions from "../Session";
import Consomation from "../Consomation";
import Calories from '../../assets/images/calories-icon.png';
import Carbs from '../../assets/images/carbs-icon.png';
import Fat from '../../assets/images/fat-icon.png';
import Protein from '../../assets/images/protein-icon.png';

const Dashboard = (): JSX.Element => {
    const DashboardContainer = styled.div `
      position: absolute;
      left: 100px;
      top: 92px;
      width: calc(100vw - 100px);
      height: calc(100vh - 92px);
      display: flex;
    `;

    const DashboardContainerLeft = styled.div `
        width: 80%;
        display: flex;
        flex-direction: column;
    `;

    const DashboardContainerRigth = styled.div `
        width: 20%;
        display: flex;
        flex-direction: column;
    `;

    const { userInfos, userActivity, userSessions, userPerformances}: any = useContext(DataContext);

    const text = ["Calories", "Protéines", "Glucides", "Lipides"];
    const images = [Calories, Protein, Carbs, Fat];
    const consoValues: any = userInfos.data && userInfos.data.keyData && Object.values(userInfos.data.keyData);


    const keyData = consoValues && text.map((item, index) => {
        return (
            {
                name: item,
                value: consoValues[index],
                image: images[index]
            }
        )
    });

    const performanceKind = userPerformances && userPerformances.data && userPerformances.data.kind;
    const performances: Array<any> = userPerformances && userPerformances.data && userPerformances.data.data && userPerformances.data.data.length > 0 && userPerformances.data.data.map((item: any) => {
        return (
            {
                value: item.value,
                kind: performanceKind[item.kind]
            }
        );
    });

    
    return (
        <DashboardContainer>
            <DashboardContainerLeft>
                {userInfos && Object.entries(userInfos.data).length !== 0 &&
                    <Info userName={userInfos.data && userInfos.data.userInfos && userInfos.data.userInfos.firstName}/>
                }
                {userActivity && Object.entries(userActivity.data).length !== 0 &&
                    <Activity activities={userActivity.data && userActivity.data.sessions}/>
                }
                {userSessions && Object.entries(userSessions.data).length !== 0 &&
                    <Sessions sessions={userSessions.data && userSessions.data.sessions} performances={performances} score={userInfos.data && userInfos.data.todayScore && userInfos.data.todayScore * 100}/>
                }
            </DashboardContainerLeft>
            <DashboardContainerRigth>
                {userInfos &&  Object.entries(userInfos.data).length !== 0 &&
                    <Consomation keyData={keyData}></Consomation>
                }
            </DashboardContainerRigth>
        </DashboardContainer>
    )
}

export default Dashboard;