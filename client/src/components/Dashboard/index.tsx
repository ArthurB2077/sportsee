import { useContext } from "react";
import { DataContext } from '../../utils/context';
import Info from "../../components/Info";
import styled from "styled-components";
import Activity from "../Activity";
import Sessions from "../Session";

const Dashboard = (): JSX.Element => {
    const { userInfos, userActivity, userSessions, userPerformances}: any = useContext(DataContext);

    const DashboardContainer = styled.div `
      position: absolute;
      left: 100px;
      top: 92px;
      width: calc(100vw - 100px);
      height: calc(100vh - 92px);
    `;

    const performanceKind = userPerformances.data.data && userPerformances.data.data.kind;
    const performances: Array<any> = userPerformances.data.data && userPerformances.data.data.data.map((item: any) => {
        return (
            {
                value: item.value,
                kind: performanceKind[item.kind]
            }
        )
    });
    
    //console.log(score)
    // console.log(performances)
    // console.log("Dashboard - Infos", userInfos.data.data && userInfos.data.data);
    // console.log("Dashboard - Activity", userActivity.data.data && userActivity.data.data);
    // console.log("Dashboard - Sessions", userSessions.data.data && userSessions.data.data);
    // console.log("Dashboard - Performances", userPerformances.data.data && userPerformances.data.data.data);
    // console.log("Dashboard - Performances", userPerformances.data.data && userPerformances.data.data.kind);
    //todayScore

    return (
        <DashboardContainer>
            {userInfos &&  Object.entries(userInfos.data).length !== 0 &&
                <Info userName={userInfos.data.data && userInfos.data.data.userInfos && userInfos.data.data.userInfos.firstName}/>
            }
            {userActivity &&  Object.entries(userActivity.data).length !== 0 &&
                <Activity activities={userActivity.data.data && userActivity.data.data.sessions}/>
            }
            {userSessions &&  Object.entries(userSessions.data).length !== 0 &&
                <Sessions sessions={userSessions.data.data && userSessions.data.data.sessions} performances={performances} score={userInfos.data.data && userInfos.data.data.todayScore * 100}/>
            }
        </DashboardContainer>
    )
}

export default Dashboard;