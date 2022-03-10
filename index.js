/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Apps from './App';
import Home from './axios';
import demo from './demo';
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => demo);
