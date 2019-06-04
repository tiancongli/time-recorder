import React from 'react';
import { StackedAreaChart, YAxis, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { View } from 'react-native';

import { CATEGORY, CATEGORY_RGB } from "../constant";

export default class AreaPic extends React.PureComponent {

    render() {
        const data = this.props.data;
        const keys   = Object.keys(CATEGORY);
        const colors = keys.map( category => {
          let [r, g, b] = CATEGORY_RGB[category];
          return `rgb(${r}, ${g}, ${b}, 0.8)`;
        });

        return (
            <View style={ { flexDirection: 'row', height: 200 } }>
                <StackedAreaChart
                    style={ { flex: 1 } }
                    contentInset={ { top: 10, bottom: 10 } }
                    data={ data }
                    keys={ keys }
                    colors={ colors }
                    curve={ shape.curveNatural }
                >
                    <Grid/>
                </StackedAreaChart>
                <YAxis
                    style={ { position: 'absolute', top: 0, bottom: 0 }}
                    data={ StackedAreaChart.extractDataPoints(data, keys) }
                    contentInset={ { top: 10, bottom: 10 } }
                    svg={ {
                        fontSize: 8,
                        fill: 'white',
                        stroke: 'black',
                        strokeWidth: 0.1,
                        alignmentBaseline: 'baseline',
                        baselineShift: '3',
                    } }
                />
            </View>
        )
    }
}
