import { useContext } from "react";
import styled from "styled-components";
import { DataContext } from '../../utils/context';
import { SessionsCaloriesPerDay, SessionsLength, Performance, ConsomationItem } from '../../types';
import CaloriesIcon from '../../assets/icons/calories-icon.png';
import CarbsIcon from '../../assets/icons/carbs-icon.png';
import FatIcon from '../../assets/icons/fat-icon.png';
import ProteinIcon from '../../assets/icons/protein-icon.png';
import Info from "../../components/Info";
import PerformanceIndicator from '../Performances';
import GoalIndicator from '../Goal';
import SessionLengthIndicator from '../SessionLength';
import Activity from "../Activity";
import Consomation from "../Consomation";


const Dashboard: React.FC = (): JSX.Element => {

    /**
     * @description Style section for the dashboard
     */
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

    const IndicatorsPanelContainer = styled.div `
        display: flex;
        justify-content: space-between;
        width: 925px;
    `;


    /**
     * @constant {DataContext} Api's data retrived from the global DataContext
     */

    const { userInfos, userActivity, userSessions, userPerformances} = useContext(DataContext);


    /**
     * @description Labels for data visualization in the dashboard
     */

    const text: Array<string> = ["Calories", "Protéines", "Glucides", "Lipides"];

    const days: Array<string> = ["L", 'M', 'ME', 'J', 'V', 'S', 'D'];

    const kinds: Array<string> = ["Cardio","Energie","Endurance","Force", "Vitesse","Intensité"];

    const images: Array<string> = [CaloriesIcon, ProteinIcon, CarbsIcon, FatIcon];

    const consoValues: Array<number> | false = userInfos.data !== null && 'keyData' in userInfos.data && Object.values(userInfos.data.keyData);


    /**
     * @constant {activities, averageSessions, performances, keyData} Array of data transformed with labels for data visualization in the dashboard
     * @description Api's data retrived from the global DataContext transformed with labels for data visualization in the dashboard
     */

    const activities: Array<SessionsCaloriesPerDay> | false = userActivity.data !== null && 'sessions' in userActivity.data && userActivity.data.sessions.map((item : SessionsCaloriesPerDay, index : number) => {
        return (
            {
                ...item,
                day: index + 1,
            }
        );
    });

    const averageSessions: Array<SessionsLength> | false = userSessions.data !== null && 'averageSessions' in userSessions.data && userSessions.data.averageSessions.map((item : SessionsLength, index : number) => {
        return (
            {
                ...item,
                day: days[index]
            }
        );
    });

    const performances: Array<Performance> | false = userPerformances.data !== null && 'data' in userPerformances.data && userPerformances.data.data.map((item: Performance, index: number) => {
        return (
            {
                value: item.value,
                kind: kinds[index]
            }
        );
    });

    const keyData: Array<ConsomationItem> | false = consoValues && text.map((item, index) => {
        return (
            {
                name: item,
                value: consoValues[index],
                image: images[index]
            }
        )
    });

    
    return (
        <DashboardContainer>
            <DashboardTitle>
                {userInfos.data && 'userInfos' in userInfos.data &&
                    <Info userName={userInfos.data && userInfos.data.userInfos && userInfos.data.userInfos.firstName}/>
                }
            </DashboardTitle>
            <DashboardContent>
                <DashboardContentLeft>
                    {activities &&
                        <Activity activities={activities}/>
                    }
                    <IndicatorsPanelContainer>
                        {averageSessions && 
                            <SessionLengthIndicator averageSessions={averageSessions}/>
                        }
                        {performances && 
                            <PerformanceIndicator performances={performances}/>
                        }
                        {userInfos.data !== null && 'userInfos' in userInfos.data && 
                            <GoalIndicator score={userInfos.data && userInfos.data.todayScore && userInfos.data.todayScore * 100}/>
                        }
                    </IndicatorsPanelContainer>
                </DashboardContentLeft>
                <DashboardContentRigth>
                    {keyData &&
                        <Consomation keyData={keyData}></Consomation>
                    }
                </DashboardContentRigth>
            </DashboardContent>
        </DashboardContainer>
    );
};

export default Dashboard;