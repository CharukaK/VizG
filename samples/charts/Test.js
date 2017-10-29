import React, { Component } from 'react';

import VizG from '../../src/VizG.jsx';
import InlineCharts from '../../src/components/InlineChart.jsx';
import ReactTable from 'react-table';
import TableTest from '../../src/components/ReactTableTest.jsx';
import 'react-table/react-table.css';
import './css/testTablePadding.css';
// import Map from '../components/MapComponents/App';

class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                [0, 10, 1, 'Piston']
            ],
            timer: 1
        };
    }


    componentDidMount() {
        // setInterval(() => {
        //     this.setState({
        //         data: [[Math.round(Math.random() * 100), Math.round(Math.random() * 100), 1, 'Piston'], [Math.round(Math.random() * 100), Math.round(Math.random() * 100), 1, 'rotary']],
        //         timer: this.state.timer + 1
        //     });
        // }, 1000);



    }

    mapConfig = {
        key: 'rpm',
        charts: [{
            type: 'table',
            y: 'torque',
            color: '*',
            columns: ['EngineType', 'torque', 'rpm'],
            columnTitles: ['Engine Type', 'Engine Torque', 'Engine RPM'],
        }
        ],
        maxLength: 7,
        width: 400,
        height: 200,
        colorBasedStyle:true

    };


    sparkLineConfig = {
        x: 'rpm',
        charts: [{ type: 'line', y: 'torque', fill: '#0fd8e2' }],
        maxLength: 30,
        width: 800,
        height: 400,
        brush: true
        // animation: true
    };

    metadataWithTime = {
        'names': ['rpm', 'torque', 'horsepower', 'EngineType'],
        'types': ['time', 'linear', 'ordinal', 'ordinal']
    };

    dataWithT = [
        [new Date('2017-10-21 00:00:00'), 12, 12, 'piston'],
        [new Date('2017-10-22 00:00:00'), 24, 12, 'piston'],
        [new Date('2017-10-23 00:00:00'), 16, 12, 'piston']
    ];
    metadata = {
        'names': ['rpm', 'torque', 'horsepower', 'EngineType'],
        'types': ['linear', 'linear', 'ordinal', 'ordinal']
    };

    staticDataSet = [
        [10, 11, 12, 13],
        [11, 15, 12, 13],
        [12, 14, 12, 13],
        [13, 24, 12, 13],
        [14, -6, 12, 13],
        [15, 11, 12, 13],
        [16, 15, 12, 13],
        [17, 14, 12, 13],
        [18, 24, 12, 13],
        [19, 6, 12, 13],
        [20, 11, 12, 13],
        [21, 15, 12, 13],
        [22, 14, 12, 13],
        [23, 24, 12, 13],
        [24, 6, 12, 13],
    ];

    tableDataSet = [
        {
            name: 'Tanner Linsley',
            age: 26,
            friend: {
                name: 'Jason Maurer',
                age: 23,
            }
        }, {
            name: 'Charuka Karunanayake',
            age: 22,
            friend: {
                name: 'Don\'t have any',
                age: 'blah',
            }
        }, {
            name: 'Kaveen Karunanayake',
            age: 21,
            friend: {
                name: 'Don\'t have any',
                age: 'blah',
            }
        }
    ];


    columns = [{
        Header: 'Name',
        accessor: 'name' // String-based value accessors!
    }, {
        Header: 'Age',
        accessor: 'age',
        Cell: props => (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#dadada',
                    margin:0,
                    textAlign:'center'
                }}
            >
                <span>{props.value}</span>
            </div>) // Custom cell components!
    }, {
        id: 'friendName', // Required because our accessor is not a string
        Header: 'Friend Name',
        accessor: d => d.friend.name // Custom value accessors!
    }, {
        Header: props => <span>Friend Age</span>, // Custom header components!
        accessor: 'friend.age'
    }];



    render() {
        // console.log("AAAA"+this.state.data)
        return (
            <div>

                {/* <VizG config={this.sparkLineConfig} metadata={this.metadata} data={this.staticDataSet} onClick={(data)=>{
                    console.log(data);
                }} /> */}
                {/* <VizG config={this.sparkLineConfig} metadata={this.metadata} data={this.state.staticDataSet} /> */}

                <TableTest config={this.mapConfig} metadata={this.metadata} data={this.staticDataSet}/>

                {/* <ReactTable
                    data={this.tableDataSet}
                    columns={this.columns}
                    showPagination={false}
                    minRows={7}
                /> */}

            </div>
        );
    }
}

export default Test;