import React, { PureComponent } from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { ThreadCreateStatistic } from '../types'


export default class extends PureComponent<{ data: ThreadCreateStatistic[]}> {
    render() {
        console.log(this.props.data.map(data => data.amount).sort((a, b) => a - b))
        return (
            <ResponsiveContainer width={"95%"} height={300}>
                <LineChart
                    width={500}
                    height={300}
                    data={this.props.data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={"dateString"} />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Line type="monotone" dataKey="amount" stroke="#8884D8" />
                </LineChart>
            </ResponsiveContainer>
          )
    }
}

 