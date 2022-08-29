import type { NextPage } from 'next'
import Head from 'next/head'
import AutoResponseChannelStatistics from '../components/AutoResponseChannelStatistics'
import AutoResponseStatistics from '../components/AutoResponseStatistics'
import useRequest from '../hooks/useRequest'
import { Bars } from "react-loader-spinner";
import ThreadCreateStatistics from '../components/ThreadCreateStatistics'
import Statistic from '../components/Statistic'
import { StatisticStatistic } from '../types'

const Home: NextPage = () => {

  const statistics = [
    {
      name: "Images scanned",
      db: "ImageScannedCount",
    },
    {
      name: "Total threads made",
      db: "ThreadCount",
    },
    {
      name: "Total slash commands executed",
      db: "CommandCount"
    },
    {
      name: "Total autoresponses sent",
      db: "AutoResponseCount"
    },
    {
      name: "Total auto respones sent before thread creation",
      db: "AutoResponsePreThreadCreate"
    }
  ];

  const [autoResponseStatistic, loadingAutoResponseStatistic] = useRequest('ResponseStatistics');
  const [autoResponseChannelStatistic, loadingAutoResponseChannelStatistic] = useRequest('ResponseChannelStatistics');
  const [threadCreateStatistic, loadingThreadCreateStatistic] = useRequest('ThreadCreateStatistics');
  const [statisticsStatistic, loadingStatisticsStatistic] = useRequest('StatisticsStatistics');

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>NamelessMC Statistics</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-10 text-center">
        <h1 className="text-6xl font-bold">
          <a className="text-yellow-400" href="https://namelessmc.com">
            NamelessMC {' '}
          </a>
          Statistics
        </h1>

        <p className="mt-3 text-2xl">
          This is a simple statistics page for the NamelessMC support bot.
        </p>

        <div className="mt-6 flex max-w-full lg:max-w-7xl flex-wrap items-center justify-around ">
          <div className="w-full rounded-xl p-6 text-left bg-[#F3F4F6]">
            {loadingStatisticsStatistic ? (
              <div className="mt-4 flex items-center justify-center">
              <Bars height={80} width={80} color={"#FACC15"} />
            </div>
            ) : (
              <>
                <span className='text-gray-600 font-bold'>General Statistics</span>
                <div className="grid grid-cols-4 gap-4 py-3">
                  {statistics.map((statistic, idx) => (
                    <Statistic name={statistic.name} value={(statisticsStatistic as any).find((stat: StatisticStatistic) => stat.name === statistic.db)!.value} key={idx} />
                  ))}
                </div>
              </>
            )}
            
          </div>
          <div
            className="mt-6 w-full rounded-xl border p-6 text-left"
          >
            <h3 className="text-2xl font-bold">Autoresponse amount:</h3>
            {
              loadingAutoResponseStatistic ? (
                <div className="mt-4 flex items-center justify-center">
                  <Bars height={80} width={80} color={"#FACC15"} />
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <div className="w-[64rem] lg:w-full"> 
                    <AutoResponseStatistics data={autoResponseStatistic as any} />
                  </div>
                </div>
              )
            }
          </div>
          <div
            className="mt-6 w-full rounded-xl border p-6 text-left"
          >
            <h3 className="text-2xl font-bold">Autoresponse channels:</h3>
            {
              loadingAutoResponseChannelStatistic ? (
                <div className="mt-4 flex items-center justify-center">
                  <Bars height={80} width={80} color={"#FACC15"} />
                </div>
              ) : (
                <div className="w-full"> 
                  <AutoResponseChannelStatistics data={autoResponseChannelStatistic as any} />
                </div>
              )
            }
          </div>   
          <div
            className="mt-6 w-full rounded-xl border p-6 text-left"
          >
            <h3 className="text-2xl font-bold">Thread creation:</h3>
            {
              loadingThreadCreateStatistic ? (
                <div className="mt-4 flex items-center justify-center">
                  <Bars height={80} width={80} color={"#FACC15"} />
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <div className="w-[64rem] lg:w-full"> 
                    <ThreadCreateStatistics data={threadCreateStatistic as any} />
                  </div>
                </div>
              )
            }
          </div>        
        </div>
      </main>
      <footer className="flex h-16 w-full items-center justify-center border-t mt-6">
        <a
          className="flex items-center justify-center gap-2"
          href="https://github.com/supercrafter100"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Supercrafter100
        </a>
      </footer>
    </div>
  )
}

export default Home
