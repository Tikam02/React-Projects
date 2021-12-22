import React from "react";
import { Component } from "react";



function WithListLoading(Component) {
    return function WithListLoading({isLoading, ...props}){
        if(!isLoading) return <Component {...props}/>;
        return (
            <p style={{textAlign: 'center', fontSize:'30px'}}>
                Hold on, Fetching data may take some time :)
            </p>
        );
    };
}

export default WithListLoading