/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// https://github.com/getsentry/examples/blob/4ce1e6fd44586ce3a173bc0d8ff110c7fbc57951/react-native/AwesomeProject/App.js
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';

import * as Sentry from "@sentry/react-native";

Sentry.init({
  dsn: "https://c933464e114d4948bdb218dafa94b771@sentry.io/1857684"
});

// Sentry.setTag("myTag", "tag-value");
// Sentry.setExtra("myExtra", "extra-value");
// Sentry.addBreadcrumb({ message: "test" });

// Sentry.captureMessage("Hello Sentry!");

const jj = () => {
  try { 
    aFunctionThatMightFail();
  } catch (err) { 
    Sentry.captureException(err);
  }
}

const jj2 = () => {
  Sentry.captureMessage("Hello Sentry!");
}

const jj3 = () => {
  Sentry.nativeCrash();
}

const jj4 = () => {
  throw new Error("My first Sentry error!");
}

export default App = () => {
  React.useEffect(()=>{
    
    

  },[])

  
  return (
  <View>
    <Text>
    kk
    </Text>

    <Button onPress={jj} title='jj'>
    </Button>

    <Button onPress={jj2} title='jj2'>
      <Text>
        jj2
      </Text>
    </Button>

    <Button onPress={jj3} title='jj3'>
      <Text>
        jj3
      </Text>
    </Button>

    <Button onPress={jj4} title='jj4'>
      <Text>
        jj4
      </Text>
    </Button>
    </View>
  )
}