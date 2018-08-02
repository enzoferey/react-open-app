import React from "react";
import OpenApp from "../lib";

describe("<OpenApp />", () => {
  describe("when rendered", () => {
    it("should return an <a> tag wrapping children", () => {
      const children = (
        <div>
          <p>hello</p>
          <p>there</p>
        </div>
      );
      const component = shallow(<OpenApp>{children}</OpenApp>);

      expect(component.find("a").length).to.equal(1);
      expect(component.contains(children)).to.equal(true);
    });
    it("should pass down other props to the <a> tag", () => {
      const props = {
        other: "habak",
        another: 2,
      };
      const component = shallow(<OpenApp {...props}>hello</OpenApp>);

      expect(component.find("a").props().other).to.equal(props.other);
      expect(component.find("a").props().another).to.equal(props.another);
    });
  });
});
