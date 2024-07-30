import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "../DefaultPage/HomeHeader";
import HomeFooter from "../DefaultPage/HomeFooter";
import RepurchaseOrderBody from "./RepurchaseOrderBody";

class RepurchaseOrder extends Component {
    componentDidMount() {}

    render() {
        return (
            <>
                <HomeHeader />
                <RepurchaseOrderBody />
                <HomeFooter />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RepurchaseOrder);
