import React, { Component } from 'react';
import {
  Navigator,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Arm from "./Scenes/Arm";
import Back from "./Scenes/Back";
import Foot from "./Scenes/Foot";
import Hand from "./Scenes/Hand";
import Head from "./Scenes/Head";
import Leg from "./Scenes/Leg.js";
import Settings from "./Scenes/Settings.js";
import Symptoms from "./Scenes/Symptoms.js";
import Torso from "./Scenes/Torso.js";
import WholeBody from "./Scenes/WholeBody.js";


const AppNavigationStack = StackNavigator({
  Home: { screen: WholeBody },
  Arm: { screen: Arm },
  Back: { screen: Back },
  Foot: { screen: Foot },
  Hand: { screen: Hand },
  Head: { screen: Head },
  Leg: { screen: Leg },
  Settings: { screen: Settings },
  Symptoms: { screen: Symptoms },
  Torso: { screen: Torso },
  WholeBody: { screen: WholeBody },
});

export default () => <AppNavigationStack />
