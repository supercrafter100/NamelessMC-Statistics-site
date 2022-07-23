import React, { PureComponent } from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { AutoResponseStatistic } from '../types'


export default class extends PureComponent<{ data: AutoResponseStatistic[]}> {
    render() {
        return (
            <ResponsiveContainer width={"95%"} height={300}>
                    <BarChart
                        data={this.props.data.sort((a, b) => b.requested - a.requested)}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                        width={500}
                        height={300}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={"title"} interval="preserveStartEnd" tickFormatter={(value, idx) => value.length > 10 ? value.slice(0, 10) + "..." : value} />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey={"requested"} fill="#8884D8" />
                    </BarChart>
            </ResponsiveContainer>
          )
    }
}

