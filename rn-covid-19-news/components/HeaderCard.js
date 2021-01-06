//HeaderCard.js
import React from "react";
import styled from "styled-components";

const HeaderCard = (props) => (
  <Container>
    <Cover>
      <Image source={props.image} />
      <Title>{props.title}</Title>
      <Caption>{props.caption}</Caption>
    </Cover>
  </Container>
);

export default HeaderCard;

const Container = styled.View`
  background: white;
  width: 335px;
  height: 205px;
  border-radius: 14px;
  margin: 10px 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  width: 100%;
  height: 205px;
  border-radius: 14px;
  overflow: hidden;
  justify-content: flex-end;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.Text`
  position: absolute;
  top: 30px;
  color: #333333;
  font-size: 22px;
  font-weight: bold;
  margin-left: 20px;
  width: 170px;
`;

const Caption = styled.Text`
  color: #999999;
  position: absolute;
  bottom: 30px;
  font-size: 14px;
  margin-left: 20px;
  width: 190px;
`;
