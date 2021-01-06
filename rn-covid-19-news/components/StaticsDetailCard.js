import React from "react";
import styled from "styled-components";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const StaticsDetailedCard = (props) => (
  <Container>
    <WrapperLeft>
      <Content>
        <Icon source={require("../assets/statics/totalConfirmed.png")} />
        <Caption>累计确诊</Caption>
        <Stats>{props.totalConfirmed}</Stats>
      </Content>
      <Content>
        <Icon source={require("../assets/statics/confirmed.png")} />
        <Caption>现存确诊</Caption>
        <Stats>{props.confirmed}</Stats>
      </Content>
      <Content>
        <Icon source={require("../assets/statics/death.png")} />
        <Caption>累计死亡</Caption>
        <Stats>{props.totalDeath}</Stats>
      </Content>
    </WrapperLeft>
    <WrapperRight>
      <Content>
        <Icon source={require("../assets/statics/suspect.png")} />
        <Caption>现存疑似</Caption>
        <Stats>{props.suspect}</Stats>
      </Content>
      <Content>
        <Icon source={require("../assets/statics/noSymptom.png")} />
        <Caption>现存无症状</Caption>
        <Stats>{props.noSymptom}</Stats>
      </Content>
      <Content>
        <Icon source={require("../assets/statics/cured.png")} />
        <Caption>累计治愈</Caption>
        <Stats>{props.cured}</Stats>
      </Content>
    </WrapperRight>
  </Container>
);

export default StaticsDetailedCard;

const Container = styled.View`
  margin: 20px;
  width: 100%;
  height: 250px;
  padding-left: 20px;
`;

const WrapperLeft = styled.View`
  width: 100px;
  height: 225px;
  margin-left: 20px;
  position: absolute;
  left: 0%;
  justify-content: center;
`;

const WrapperRight = styled.View`
  width: 100px;
  height: 225px;
  position: absolute;
  left: 50%;
  justify-content: center;
`;

const Content = styled.View`
  width: 100px;
  height: 75px;
  justify-content: flex-end;
  height: 75px;
`;

const Icon = styled.Image`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 16px;
`;

const Caption = styled.Text`
  position: absolute;
  top: 20px;
  left: 60px;
  font-size: 14px;
  color: #c7c7cc;
  font-weight: 500;
  max-width: 260px;
`;

const Stats = styled.Text`
  position: absolute;
  left: 60px;
  top: 38px;
  font-size: 20px;
  color: #333333;
  font-weight: 600;
`;
