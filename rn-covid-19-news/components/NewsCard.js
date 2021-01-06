import React from "react";
import styled from "styled-components";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const NewsCard = (props) => (
  <Container>
    <Content>
      <Title>{props.title}</Title>
      <Summary>123123</Summary>
      <InfoSource></InfoSource>
    </Content>
  </Container>
);

export default NewsCard;

const Container = styled.View`
  flex: 1;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Content = styled.View`
  color: white;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  width: 100px;
  height: 75px;
  justify-content: flex-end;
  height: 75px;
`;

const Title = styled.Text`
  position: absolute;
  top: 20px;
  left: 60px;
  font-size: 16px;
  color: #333;
  font-weight: 500;
  max-width: 260px;
`;

const Summary = styled.Text`
  position: absolute;
  left: 60px;
  top: 38px;
  font-size: 30px;
  color: #333333;
  font-weight: 600;
`;

const InfoSource = styled.Text`
  position: absolute;
  left: 60px;
  top: 38px;
  font-size: 30px;
  color: #333333;
  font-weight: 600;
`;
