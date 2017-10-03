import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LineChart from './Samples/LineChartsSamples';
import BarChart from './Samples/BarChartConfigSample';
import AreaChart from './Samples/AreaChartConfig';
import ScatterPlot from './Samples/ScatterPlotConfigSample';
import PieChart from './Samples/PieChartsConfigSample';
import Test from './Samples/Test.js';

import {
    BrowserRouter as Router,
    Route,Switch
} from 'react-router-dom';


ReactDOM.render(
<Router>
    <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/test" component={Test}/>
        <Route exact path="/line-charts" component={LineChart}/>
        <Route exact path="/bar-charts" component={BarChart}/>
        <Route exact path="/area-charts/" component={AreaChart}/>
        <Route exact path='/scatter-charts' component={ScatterPlot}/>
        <Route exact path='/pie-charts' component={PieChart}/>
    </Switch>
</Router>,document.getElementById('root'));
