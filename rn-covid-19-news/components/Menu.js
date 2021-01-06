import React from "react";
import styled from "styled-components";
import { ScrollView, Animated, TouchableOpacity, Dimensions } from "react-native";
import { XIcon } from "./Icon";
import MenuItem from "./Menuitem";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return {
    closeMenu: () =>
      dispatch({
        type: "CLOSE_MENU",
      }),
  };
}

const screenHeight = Dimensions.get("window").height;

class Menu extends React.Component {
  state = {
    top: new Animated.Value(screenHeight),
  };
  //Set up animated state

  componentDidMount() {
    this.toggleMenu();
  }

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action == "openMenu") {
      Animated.spring(this.state.top, {
        toValue: 54,
        //Animation End with value set to 0
      }).start();
    }

    if (this.props.action == "closeMenu") {
      Animated.spring(this.state.top, {
        toValue: screenHeight,
      }).start();
    }
  };

  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <Cover>
          <Image source={require("../assets/background2.jpg")} />
          <Title>关于</Title>
          <Subtitle>A Project By the One and Only Dylan.</Subtitle>
        </Cover>
        <TouchableOpacity
          onPress={this.props.closeMenu}
          style={{
            position: "absolute",
            top: 120,
            left: "50%",
            marginLeft: -22,
            zIndex: 1,
          }}
        >
          <CloseView>
            <XIcon style={{ width: 44, height: 44, color: "#546bfb" }} />
          </CloseView>
        </TouchableOpacity>
        <ScrollView>
        <Content>
          {items.map((item, index) => (
            <MenuItem
              key={index}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </Content>
        </ScrollView>
      </AnimatedContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
  margin-top: 10px;
`;

const Subtitle = styled.Text`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
`;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
  border-radius: 10px;
  overflow: hidden;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 142px;
  background: black;
  justify-content: center;
  align-items: center;
`;

const Content = styled.View`
  height: ${screenHeight};
  background: #f0f3f5;
  padding: 50px;
`;

const items = [
  {
    icon: "ios-attach",
    title: "数据来源",
    text: "疫情数据来自丁香园。",
  },
  {
    icon: "ios-help-circle-outline",
    title: "文章来源",
    text:
      "文章主要摘自公认的实体，如以健康为中心的非政府组织，及医疗或教育机构。",
  },
  {
    icon: "ios-medical",
    title: "医疗信息",
    text:
      "请不要以本软件所展示的信息作为判断疫情形势的依据，或者用于任何医疗用途。",
  },
  {
    icon: "ios-alert",
    title: "版权",
    text: "本项目按照 MIT License 开源。",
  },
  {
    icon: "ios-contact",
    title: "作者",
    text: "Dylan Xu",
  },
];
