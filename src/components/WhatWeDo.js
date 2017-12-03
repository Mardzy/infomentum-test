import React from 'react';

const WhatWeDo = ()=> {
  return (
    <div id="what-we-do" className="row">
      <h1>WHAT WE DO</h1>
      <h5>Discover more about the Little Zebra foundation and how you can help us</h5>
      <div className="row">
        <div className="col-md-7">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet, magna sit amet suscipit laoreet, ante velit scelerisque massa, ac mattis ex magna et turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.<br/><br/>Aliquam efficitur tellus vitae erat laoreet sodales. Donec mollis, augue nec feugiat accumsan, ante dui aliquet ante, sit amet vestibulum ligula ex non mi. Nunc quis imperdiet leo, blandit maximus orci. Phasellus porttitor test eros magna, et viverra massa cursus ut. Cras nec est et urna ullamcorper volutpat et tristique augue. Nullam sit amet odio eget tortor rhoncus volutpat nec sed ipsum. Vivamus semper a ligula a sodales.<br/><br/>Morbi mi dui, luctus ac vestibulum in, dapibus id ante. Vivamus eu odio non mi finibus dapibus a a erat. Cras commodo pharetra sapien, non ultrices nisl egestas eu.</p>
          <div className="hidden-large">
            <button type="button" className="history">Our History</button>
            <button type="button" className="involved">Get Involved</button>
          </div>
        </div>
        <img className="col-md-5 hidden-medium" src="src/assets/leopard-image.png" alt="leopard"/>
      </div>
    </div>
  );
};

export default WhatWeDo;
