/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,

} from 'react-native';

class Timer extends Component {

    constructor() {
        super();

        this.state = {
            content: '',
            message: '',
            count: 0
        };

        this.xtCreateInterval = this.xtCreateInterval.bind(this);
        this.xtClearInterval = this.xtClearInterval.bind(this);
    }

    componentDidMount() {
        this.timer1 = setTimeout(
            () => {
                this.setState({
                    content: 'One',
                });
            },
            500
        );

        this.timer2 = setTimeout(
            () => {
                this.setState({
                    message: 'Two',
                });
            },
            1000
        );
    }

    componentWillUnmount() {
        this.timer1 && clearTimeout(this.timer1);
        this.timer2 && clearTimeout(this.timer2);
    }

    xtCreateInterval() {
        console.log("xtCreateInterval");
        this.interval = setInterval(
            () => {
                this.setState({
                    count: this.state.count + 1,
                });
            },
            500
        );
    }

    xtClearInterval() {
        console.log("xtClearInterval");
        this.interval && clearInterval(this.interval);
        this.setState({
            count: 0,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    定时器实例
                </Text>
                <Text style={styles.instructions}>
                    {this.state.content}
                </Text>
                <Text style={styles.instructions}>
                    {this.state.message}
                </Text>
                <View style={styles.timer}>
                    <Text style={[styles.instructions, {marginRight: 30}]} onPress={this.xtCreateInterval}>
                        启动Interval定时器
                    </Text>
                    <Text style={styles.instructions} onPress={this.xtClearInterval}>
                        清除Interval定时器
                    </Text>
                </View>
                <Text style={styles.instructions}>
                    {this.state.count}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  timer: {
      flexDirection: 'row',
      marginTop: 20,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
  }
});

AppRegistry.registerComponent('Timer', () => Timer);
