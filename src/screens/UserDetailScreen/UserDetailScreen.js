import React, { Component } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { logout } from "./../../actions/user/authentication";
import { connect } from "react-redux";

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#fff",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10
    },
    buttonText: {
        color: "#000"
    },
    cameraView: {
        alignItems: "center",
        flex: 1,
        justifyContent: "flex-end"
    },
    container: {
        flex: 1
    }
});

class UserDetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagePath: undefined,
            name: undefined,
            score: 0,
            showModal: false,
            timestamp: 0
        };
    }
    logout = () => {
      this.props.logout
    }

    render() {
      const {userName} = this.props;
        return (
            <View style={styles.container}>
              <Text>{userName}</Text>

              <TouchableOpacity
                  onPress={this.props.logout}

              >
                  <Text>Logout</Text>
              </TouchableOpacity>
            </View>
        );
    }
  }

    function mapStateToProps(state) {
        return {
          user: state.user
        };
    }

    export default connect(mapStateToProps, {
        logout,
    })(UserDetailScreen);
