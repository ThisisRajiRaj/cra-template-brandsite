import React from "react";
import { Layout } from "../components/Layouts";
import meImage from "../assets/me.jpg";
export const About = () => (
  <>
    <Layout>
      <div>
        <br />
        <br />
      </div>
      <div>
        <img src={meImage} alt="examples" className="meImage"></img>
      </div>
      <div>
        <br />
        <br />
      </div>
      <div className="about">
        <p>
          
        Vivamus a ullamcorper neque. Cras congue sem sit amet purus porta, ac dignissim nulla gravida. Aliquam turpis nunc, viverra quis placerat id, dapibus tristique risus. Duis at faucibus magna, non dapibus ligula. Donec tristique in quam ac efficitur. Phasellus tempor lacus a arcu finibus, vel tempor tellus fringilla. Fusce ornare lectus ante, pretium hendrerit velit varius eu. Nulla facilisi. Maecenas mollis imperdiet dolor. In commodo nisl vitae leo lacinia, vel malesuada velit fringilla.
        </p>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio nibh, facilisis nec feugiat a, facilisis eget enim. Quisque purus urna, finibus vel turpis vitae, pellentesque porttitor felis. Morbi dictum urna vel hendrerit scelerisque. Maecenas nec interdum nunc. Donec sollicitudin vel orci in porta. Integer ac sagittis orci. Etiam aliquam dignissim eleifend. Etiam porta metus tellus, at porttitor nisl dapibus nec. Maecenas luctus congue odio eget rutrum
        </p>
      </div>
    </Layout>
  </>
);
export default About;
