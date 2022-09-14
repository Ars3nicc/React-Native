/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Image, Text, Button} from 'react-native';
const App = () => {
  return (
    <View style={styles.bg}>
      <View style={styles.flex}>
        <View style={styles.titleRow}>
          <Image style={styles.wallet} source={require('./img/wallet.png')} />
          <View style={styles.titleColumn}>
            <Text style={styles.title}>E-BULSA</Text>
            <Text style={styles.name}>Welcome Franz</Text>
          </View>
        </View>

        <View style={styles.paddingtop}></View>

        <View style={styles.balanceView}>
          <Text style={styles.center}>Available Balance</Text>
          <Text style={styles.amount}>Php 100,000,000.00</Text>
          <View style={{paddingTop: 10}}></View>
          <Text style={styles.check}>Check It</Text>
        </View>

        <View style={{paddingTop: 40}}></View>
        <Text style={styles.avail}>Available Transaction</Text>
        <View style={{paddingBottom: 20}}></View>
        <View>
          <View style={styles.row}>
            <Image
              style={styles.wallet}
              source={require('./img/money-transfer.png')}
            />
            <View style={styles.optionHolder}>
              <Text style={styles.optionTitle}>Transfer Money</Text>
              <Text style={styles.optionDescription}>
                Send money to any bank account
              </Text>
            </View>
          </View>
          <View style={{paddingBottom: 20}}></View>
          <View style={styles.row}>
            <Image style={styles.wallet} source={require('./img/pay.png')} />
            <View style={styles.optionHolder}>
              <Text style={styles.optionTitle}>Pay Bills</Text>
              <Text style={styles.optionDescription}>
                Pay your bills online
              </Text>
            </View>
          </View>
          <View style={{paddingBottom: 20}}></View>
          <View style={styles.row}>
            <Image style={styles.wallet} source={require('./img/user.png')} />
            <View style={styles.optionHolder}>
              <Text style={styles.optionTitle}>Account Info</Text>
              <Text style={styles.optionDescription}>
                View Transaction History
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#2F2E41',
    padding: 10,
    flex: 1,
  },
  wallet: {
    height: 60,
    width: 60,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    color: '#FFFFFF',
  },
  name: {
    fontSize: 20,
    color: '#07D2EE',
  },
  paddingtop: {
    paddingTop: 20,
  },
  balanceView: {
    borderRadius: 5,
    backgroundColor: '#EE5007',
    padding: 20,
    borderBottomWidth: 20,
    borderBottomColor: '#07D2EE',
  },
  check: {
    textAlign: 'center',
    backgroundColor: '#329DA0',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
    padding: 5,
  },
  center: {
    textAlign: 'center',
    fontSize: 25,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  amount: {
    textAlign: 'center',
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#EE5007',
    width: 350,
    borderRadius: 10,
    borderLeftWidth: 15,
    borderLeftColor: '#FFFFFF',
    padding: 20,
  },
  avail: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 30,
  },
  optionHolder: {
    padding: 10,
    paddingLeft: 30,
    color: '#FFFFFF',
  },
  optionTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFFFFF',
  },
  optionDescription: {
    color: '#fcfc',
  },
  titleRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleColumn: {
    flexDirection: 'column',
    paddingLeft: 20,
  },
});

export default App;
