export interface KeyData {
    calorieCount: number,
    carbohydrateCount: number,
    lipidCount: number,
    proteinCount: number,
}

export interface UserInfos {
    age: number,
    firstName: string,
    lastName: string,
}

export interface SessionsCaloriesPerDay {
    day: string,
    kilogram: number,
    calories: number,
}

export interface Sessions {
    day: number,
    sessionLength: number,
}

export interface Performance {
    value: number,
    kind: string,
}

export interface PerformanceKind {
    1: string,
    2: string,
    3: string,
    4: string,
    5: string,
    6: string,
}

export interface Infos {
    id: number,
    keyData: KeyData,
    todayScore: number,
    userInfos: UserInfos,
}

export interface Activity {
    sessions: Array<SessionsCaloriesPerDay>,
    userId: number,
}

export interface AverageSessions {
    sessions: Array<Sessions>,
    userId: number,
}

export interface Performances {
    data: Array<Performance>,
    kind: PerformanceKind,
    userId: number,
}

export interface FetchResponse {
    isLoading: boolean,
    data: Infos | Activity | AverageSessions | Performances | {},
    error: unknown,
}

export interface DataProvided {
    userInfos: FetchResponse,
    userActivity: FetchResponse,
    userSessions: FetchResponse,
    userPerformances: FetchResponse,
}