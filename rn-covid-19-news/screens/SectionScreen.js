import React from "react";
import styled from "styled-components";
import { TouchableOpacity, StatusBar, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import WebView from "react-native-webview";

class SectionScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {
    StatusBar.setBarStyle("light-content", true);
  }

  componentWillUnmount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  render() {
    const { navigation } = this.props;
    const section = navigation.getParam("section");

    return (
      <ScrollView>
        <Container>
          <StatusBar hidden />
          <Cover>
            <Image source={section.image} />
            <Wrapper>
              <Logo source={section.logo} />
              <Subtitle>{section.subtitle}</Subtitle>
            </Wrapper>
            <Title>{section.title}</Title>
            <Caption>{section.caption}</Caption>
          </Cover>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}
            style={{ position: "absolute", top: 20, right: 20 }}
          >
            <CloseView>
              <Ionicons
                name="ios-close"
                size={36}
                color="#333"
                style={{ marginTop: -2 }}
              />
            </CloseView>
          </TouchableOpacity>
          <Content>
            <WebView
              source={{ html: section.content + htmlStyles }}
              scalesPageToFit={false}
              scrollEnabled={false}
              ref="webview"
              onNavigationStateChange={(event) => {
                console.log(event);

                if (event.url != "about:blank") {
                  this.refs.webview.stopLoading();
                  Linking.openURL(event.url);
                }
              }}
            />
          </Content>
        </Container>
      </ScrollView>
    );
  }
}

export default SectionScreen;

const htmlContent = `
      <h2>This is a title</h2>
      <p>This <strong>is</strong> a <a href="demo.demo">link</a></p>
      <img src="demo.demo.jpg" />
    `;

const htmlStyles = `
    <style>
    
    * {
      font-family: -apple-system, Roboto;
      margin: 0;
      padding: 0;
      font-size: 50px;
      font-weight: normal;
      color: #3c4560;
      line-height: 74px;
    }

    h1 {
      font-size: 50px;
      text-transform: uppercase;
      color: #333;
      margin-top: 0px;
      font-weight: bold;
    }

    h2 {
      font-size: 50px;
      text-transform: uppercase;
      color: #333;
      font-weight: 600;
      margin-top: 0px;
    }

    strong {
      font-weight: 700;
    }

    img {
      width: 100%;
      border-radius: 10px;
      margin-top: 20px;
    }

    pre {
      padding: 20px;
      background: #212C4F;
      overflow: hidden;
      word-wrap: break-word;
      border-radius: 10px;
      margin-top: 20px;
    }
    
    code {
      color: white;
    }
    </style>
    `;

const Content = styled.View`
  height: 2000px;
  padding: 20px;
  background-color: #fff;
`;

const Container = styled.View`
  flex: 1;
`;

const Cover = styled.View`
  height: 375px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
  width: 170px;
  position: absolute;
  top: 78px;
  left: 20px;
`;

const Caption = styled.Text`
  color: white;
  font-size: 17px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 300px;
`;

const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.View`
  flex-direction: row;
  position: absolute;
  top: 40px;
  left: 20px;
  align-items: center;
`;

const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 5px;
  text-transform: uppercase;
`;
