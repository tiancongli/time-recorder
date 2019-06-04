import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'
import { CATEGORY_COLOR, APP } from '../constant';

export default class Pie extends React.PureComponent {
  render() {
    const data = Object.entries(this.props.data)
      .filter(([_, amount]) => amount >= 0)
      .map(
        ([category, amount], index) => ({
          category,
          amount,
          key: index,
          svg: {
            fill: CATEGORY_COLOR[category]
          }
        })
      );
    const Labels = ({ slices, height, width }) => {
      return slices.map((slice, index) => {
        console.log(slice);
        const { labelCentroid, pieCentroid, data } = slice;
        return (
          <Text
            key={index}
            x={pieCentroid[ 0 ]}
            y={pieCentroid[ 1 ]}
            fill={'black'}
            textAnchor={'middle'}
            alignmentBaseline={'middle'}
            fontSize={20}
            // stroke={'black'}
            // strokeWidth={0.1}
          >
            {data.category}
          </Text>
        )
      })
    }

    return (
      <PieChart
        style={{ height: APP.WIDTH*0.6 }}
        valueAccessor={({ item }) => item.amount}
        data={data}
        spacing={0}
        outerRadius={'95%'}
      >
        <Labels/>
      </PieChart>
    )
  }
}
