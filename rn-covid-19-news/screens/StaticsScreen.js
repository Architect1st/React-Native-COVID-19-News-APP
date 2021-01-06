import React from "react";
import styled from "styled-components";
import HeaderCard from "../components/HeaderCard";
import { ScrollView, SafeAreaView } from "react-native";

import Statics from "../components/Statics";

class StaticsScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  render() {
    return (
      <Container>
        <SafeAreaView>
          <ScrollView>
            <TopMargin />
            {headerCards.map((headerCard, index) => (
              <HeaderCard
                key={index}
                image={headerCard.image}
                title={headerCard.title}
                caption={headerCard.caption}
              />
            ))}
            <Statics />
          </ScrollView>
        </SafeAreaView>
      </Container>
    );
  }
}

export default StaticsScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TopMargin = styled.Image`
  height: 50px;
`;

const headerCards = [
  {
    title: "实时统计数据",
    image: require("../assets/coronavirus/LargeGerm-Header.png"),
    caption: "数据来自腾讯新闻",
  },
];
