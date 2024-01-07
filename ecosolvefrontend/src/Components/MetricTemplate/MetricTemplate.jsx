import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';
import "./styles.css";
import CardTemplate from "./CardTemplate";


const metricTemplate= () => {
    return <>
    <div className="metric-header"><p className="metric-header-text">Idea Analysis</p>
    <div className="metric-spacer"></div>
    <div className="metric-header-dropdown"><SplitButton
            key={"Secondary"}
            id={`dropdown-split-variants-${"Secondary"}`}
            variant={"Secondary".toLowerCase()}
            title={"Secondary"}
            className="metric-header-dropdownbox"
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
              Active Item
            </Dropdown.Item>
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </SplitButton></div>
    </div>
    <div className="metric-content">
        <p className="metric-content-summary">Idea Summary And Review</p>
        <p className="metric-content-summary-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh tellus molestie nunc non blandit massa enim nec dui. Massa placerat duis ultricies lacus sed. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Neque sodales ut etiam sit amet nisl. Massa sapien faucibus et molestie. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Leo integer malesuada nunc vel risus commodo viverra maecenas. Adipiscing tristique risus nec feugiat in fermentum posuere urna nec. Ullamcorper morbi tincidunt ornare massa eget egestas. Aliquam sem et tortor consequat id porta nibh venenatis. Orci phasellus egestas tellus rutrum. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales.
        <br /><br />
Nunc mattis enim ut tellus elementum sagittis vitae. Elementum tempus egestas sed sed risus pretium. Habitasse platea dictumst quisque sagittis purus. Mattis aliquam faucibus purus in massa tempor nec feugiat. Feugiat in fermentum posuere urna nec tincidunt praesent. Leo duis ut diam quam. Aliquam sem fringilla ut morbi. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Pellentesque nec nam aliquam sem. Neque viverra justo nec ultrices dui sapien eget mi proin.</p>
<p className="metric-content-summary">Technical Breakdown</p>
    <div className="breakdown-table"><CardTemplate /> 
    <CardTemplate />
    <CardTemplate />
    <CardTemplate />
    </div>
    </div>
    </>
};

export default metricTemplate;