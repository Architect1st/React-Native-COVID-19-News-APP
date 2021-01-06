import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

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

class Avatar extends React.Component {
  state = {
    photo: "https://i.loli.net/2020/03/17/JCMpgT8Z7c95EAr.jpg",
  };

  componentDidMount() {
    fetch("https://uifaces.co/api?limit=1&random", {
      headers: new Headers({
        "X-API-KEY": "04cd12bb01e87e690d20f5b48c7df6",
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);

        this.setState({
          photo: response[0].photo,
        });

        this.props.updateName(response[0].name);
      });
  }

  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;
