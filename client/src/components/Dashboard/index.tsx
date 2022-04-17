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
import { SessionsCaloriesPerDay, SessionsLength } from '../../types';

const DashboardContainer = styled.div `
    font-family: 'Roboto', sans-serif;
    position: absolute;
    left: 100px;
    top: 92px;
    width: calc(100vw - 100px);
    height: calc(100vh - 92px);
    display: flex;
    flex-direction: column;
`;

const DashboardTitle = styled.div `
    margin: 40px auto;
    width: 80%;
`;

const DashboardContent = styled.div `
    margin: 0px auto;
    display: flex;
    width: 80%;
`;

const DashboardContentLeft = styled.div `
    margin-right: 10%;
`;

const DashboardContentRigth = styled.div `
    margin-left: 5%;
`;

const Dashboard = (): JSX.Element => {
    const { userInfos, userActivity, userSessions, userPerformances}: any = useContext(DataContext);

    const text = ["Calories", "Protéines", "Glucides", "Lipides"];
    const images = [Calories, Protein, Carbs, Fat];
    const consoValues: any = userInfos.data && userInfos.data.keyData && Object.values(userInfos.data.keyData);
    const days = ["L", 'M', 'ME', 'J', 'V', 'S', 'D'];
    const kinds = ["Cardio","Energie","Endurance","Force", "Vitesse","Intensité"];


    const keyData = consoValues && text.map((item, index) => {
        return (
            {
                name: item,
                value: consoValues[index],
                image: images[index]
            }
        )
    });

    //const performanceKind = userPerformances && userPerformances.data && userPerformances.data.kind;
    const performances: Array<any> = userPerformances && userPerformances.data && userPerformances.data.data && userPerformances.data.data.length > 0 && userPerformances.data.data.map((item: any, index: number) => {
        return (
            {
                value: item.value,
                kind: kinds[index]
            }
        );
    });

    const activities = userActivity.data && userActivity.data.sessions && userActivity.data.sessions.map((item : SessionsCaloriesPerDay, index : number) => {
        return (
            {
                ...item,
                day: index + 1,
            }
        );
    });

    const sessions = userSessions.data && userSessions.data.sessions && userSessions.data.sessions.map((item : SessionsLength, index : number) => {
        return (
            {
                ...item,
                day: days[index]
            }
        )
    });
    
    return (
        <DashboardContainer>
            <DashboardTitle>
                {userInfos && Object.entries(userInfos.data).length !== 0 &&
                    <Info userName={userInfos.data && userInfos.data.userInfos && userInfos.data.userInfos.firstName}/>
                }
            </DashboardTitle>
            <DashboardContent>
                <DashboardContentLeft>
                    {userActivity && Object.entries(userActivity.data).length !== 0 &&
                        <Activity activities={activities}/>
                    }
                    {userSessions && Object.entries(userSessions.data).length !== 0 &&
                        <Sessions sessions={sessions} performances={performances} score={userInfos.data && userInfos.data.todayScore && userInfos.data.todayScore * 100}/>
                    }
                </DashboardContentLeft>
                <DashboardContentRigth>
                    {userInfos &&  Object.entries(userInfos.data).length !== 0 &&
                        <Consomation keyData={keyData}></Consomation>
                    }
                </DashboardContentRigth>
            </DashboardContent>
        </DashboardContainer>
    )
}

export default Dashboard;