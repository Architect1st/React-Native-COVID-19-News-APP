import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import NewsCard from "./NewsCard";

function mapStateToProps(state) {
  return {
    name: state.name,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateName: (name) =>
      dispatch({
        type: "UPDATE_NAME",
        name: name,
      }),
  };
}

class News extends React.Component {
  state = {
    title1,
  };

  componentDidMount() {
    fetch("https://lab.isaaclin.cn/nCoV/api/news?page=1&num=10")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);

        this.setState({
          title1: response.results[0].title,
        });
      });
  }

  render() {
    return (
      <Container>
        {/* {NewsDetails.map((NewsDetail, index) => ( */}
        <NewsCard title={this.state.index.title1} />
        {/* ))} */}
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);

const Text = styled.Text``;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
