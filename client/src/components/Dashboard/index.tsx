import styled from "styled-components";
import { useContext } from "react";
import { DataContext } from '../../utils/context';
import { SessionsCaloriesPerDay, SessionsLength, Performance, NutrientConsumptionItem } from '../../types';
import CaloriesIcon from '../../assets/icons/calories-icon.png';
import CarbsIcon from '../../assets/icons/carbs-icon.png';
import FatIcon from '../../assets/icons/fat-icon.png';
import ProteinIcon from '../../assets/icons/protein-icon.png';
import Info from "../../components/Info";
import PerformanceIndicator from '../Performances';
import GoalIndicator from '../Goal';
import SessionLengthIndicator from '../SessionLength';
import Activity from "../Activity";
import NutrientConsumption from "../NutrientConsumption";


/**
 * @description Main dashboard component displaying all other components
 */

const Dashboard: React.FC = (): JSX.Element => {

    /**
     * @description Style section for the dashboard
     */

    const DashboardContainer = styled.div `
        font-family: 'Roboto', sans-serif;
        position: absolute;
        left: 2.5vw;
        right: 2.5vw;
        top: 92px;
        width: 95vw;
        height: calc(100vh - 92px);
        display: flex;
        flex-direction: column;
    `;

    const DashboardTitle = styled.div `
        margin: auto;
        width: 80%;
    `;

    const DashboardContent = styled.div `
        margin: 0px auto;
        display: flex;
        width: 80%;
    `;

    const DashboardContentLeft = styled.div `
        margin-right: 2.5%;
        width: 50vw;
    `;

    const DashboardContentRigth = styled.div `
        margin-left: 2.5%;
    `;

    const IndicatorsPanelContainer = styled.div `
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
    `;


    /**
     * @description Api's data retrived from the global DataContext
     */

    const { userInfos, userActivity, userSessions, userPerformances} = useContext(DataContext);


    /**
     * @description Labels for data visualization in the dashboard
     */

    const nutrientLabels: Array<string> = ["Calories", "Protéines", "Glucides", "Lipides"];

    const daysLabels: Array<string> = ["L", 'M', 'ME', 'J', 'V', 'S', 'D'];

    const kindsLabels: Array<string> = ["Cardio","Energie","Endurance","Force", "Vitesse","Intensité"];

    const nutrientIcons: Array<string> = [CaloriesIcon, ProteinIcon, CarbsIcon, FatIcon];

    const nutrientValues: Array<number> | false = userInfos.data !== null && 'keyData' in userInfos.data && Object.values(userInfos.data.keyData);


    /**
     * @description Api's data retrived from the global DataContext transformed with labels for data visualization in the dashboard
     */

    const sessionsCaloriesPerDay: Array<SessionsCaloriesPerDay> | false = userActivity.data !== null && 'sessions' in userActivity.data && userActivity.data.sessions.map((item : SessionsCaloriesPerDay, index : number) => {
        return (
            {
                ...item,
                day: index + 1,
            }
        );
    });

    const sessionsLength: Array<SessionsLength> | false = userSessions.data !== null && 'averageSessions' in userSessions.data && userSessions.data.averageSessions.map((item : SessionsLength, index : number) => {
        return (
            {
                ...item,
                day: daysLabels[index]
            }
        );
    });

    const performances: Array<Performance> | false = userPerformances.data !== null && 'data' in userPerformances.data && userPerformances.data.data.map((item: Performance, index: number) => {
        return (
            {
                value: item.value,
                kind: kindsLabels[index]
            }
        );
    });

    const nutrients: Array<NutrientConsumptionItem> | false = nutrientValues && nutrientLabels.map((item, index) => {
        return (
            {
                name: item,
                value: nutrientValues[index],
                image: nutrientIcons[index]
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
                    {sessionsCaloriesPerDay &&
                        <Activity activities={sessionsCaloriesPerDay}/>
                    }
                    <IndicatorsPanelContainer>
                        {sessionsLength && 
                            <SessionLengthIndicator sessionsLength={sessionsLength}/>
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
                    {nutrients &&
                        <NutrientConsumption nutrients={nutrients} />
                    }
                </DashboardContentRigth>
            </DashboardContent>
        </DashboardContainer>
    );
};


export default Dashboard;