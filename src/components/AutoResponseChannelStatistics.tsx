import React, { PureComponent } from 'react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { AutoResponseChannelStatistic } from '../types'
import color from 'color';

const generateColours = (baseColor: string, numOfColors: number) => {
    const bc = color(baseColor);
    const baseHue = bc.hue();
    const res = [bc.hex()];
    const step = 240 / numOfColors;
    for (var i = 1; i < numOfColors; i++) {
      const nextColor = bc.rotate((baseHue + step * i) % 240);
      res[i] = nextColor.hex();
    }
    return res;
}

export default class extends PureComponent<{ data: AutoResponseChannelStatistic[]}> {
    render() {
        const colours = generateColours("#8A56E2", this.props.data.length);
        return (
            <ResponsiveContainer width={"95%"} height={300}>
                    <PieChart
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                        width={500}
                        height={300}
                    >
                        <Tooltip />
                        <Legend />
                        <Pie data={this.props.data} nameKey={"channelId"} dataKey={"requested"} fill="#8884D8">
                            {this.props.data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colours[index]} />
                            ))}
                        </Pie>
                    </PieChart>
            </ResponsiveContainer>
          )
    }
}

