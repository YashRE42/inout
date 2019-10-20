import React from 'react';
import { StyleSheet, Dimensions, ScrollView,Linking, Platform } from 'react-native';
import { Block, theme, Text } from 'galio-framework';
import Button from '../components/Button'
import Pulse from '../components/pulse'
import { Icon } from 'galio-framework';

import { Card } from '../components';
import call from 'react-native-phone-call';

import Gcard from '../components/graphcard'
import MapCard from '../components/mapcard'
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');

class Home extends React.Component {
  
  renderArticles = () => {
    
    return (
      <ScrollView
        // showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
          <MapCard  full />
          <Card  full/>
          <Gcard  full  />
          {/* <Block flex row>
            <Card item={articles[0]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles[0]} />
          </Block> */}
          {/* <Card item={articles[0]} full />
          <Card item={articles[0]} full /> */}
          <Pulse></Pulse>
          <Button
          color = {"error"}
          radius ={3}
          gradient={true}
          onPress ={ this.onEmergency}
          >CALL FOR HELP</Button>

          
        </Block>
      </ScrollView>
    )
  }
  
  onEmergency ()  {
    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${911}';
    }
    else {
      phoneNumber = 'telprompt:${911}';
    }
    Linking.openURL(phoneNumber);

  }
  
  render() {
    
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Home;
