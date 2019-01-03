import {Image} from 'react-native';
import React, {Component} from 'react';

let pic = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
};

export default class First extends Component {


    render() {
        return (
            <Image source={pic} style={{width: 500, height: 400}}/>
        )
    }
}
