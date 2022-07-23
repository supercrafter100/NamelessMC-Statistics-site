export type AutoResponseStatistic = {
    id: number;
    title: string;
    requested: number;
}

export type AutoResponseChannelStatistic = {
    id: number;
    channelId: string;
    requested: number;
}

export type ThreadCreateStatistic = {
    id: number;
    day: number;
    month: number;
    year: number;
    amount: number;
    dateString: string;
}

export type StatisticStatistic = {
    id: number;
    name: string;
    value: number;
}