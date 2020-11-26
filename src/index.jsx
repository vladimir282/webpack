import { Post } from "@models/post";
import "./styles/styles.css";
import "./styles/less.less"
import "./styles/scss.scss"
import json from "./assets/json.json";
import xml from "./assets/data.xml";
import csv from "./assets/data.csv";
import * as $ from "jquery";
import WebpackLogo from "./assets/webpack-logo";
import "./babel"

import React from "react";
import { render } from 'react-dom'

const post = new Post("Webpack post title", WebpackLogo);

// console.log("Post to string", post.toString());
// console.log(json)
// console.log(xml)


// console.log(csv)

// $("pre").addClass("code").html(post.toString());


const App = () => (
    <div className="container">
        <h1>Webpack Course</h1>
        <hr/>
        <div className="logo"/>
        <hr/>
        {/*<pre/>*/}
        {/*<hr/>*/}
        <div className="box">
            <h2>Less</h2>
        </div>

        <div className="card">
            <h2>SCSS</h2>
        </div>
    </div>
)

render(<App/>, document.getElementById("app"))
