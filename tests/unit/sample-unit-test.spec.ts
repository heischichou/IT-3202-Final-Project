import { shallowMount } from "@vue/test-utils";
import UnitTest from "@/components/UnitTest.vue";

const factory = (values = {}) => {
  return shallowMount(UnitTest, {
    data() {
      return {
        ...values,
      };
    },
  });
};

describe("Unit Test", () => {
  it("renders a welcome message", () => {
    const wrapper = factory();
    expect(wrapper.find(".message").text()).toEqual("Unit Test with Jest");
  });

  it("renders an error when username is less than 7 characters", () => {
    const wrapper = factory({ username: "" });

    expect(wrapper.find(".error").exists()).toBeTruthy();
  });

  it("renders an error when username is whitespace", () => {
    const wrapper = factory({ username: " ".repeat(7) });

    expect(wrapper.find(".error").exists()).toBeTruthy();
  });

  it("does not render an error when username is 7 characters or more", () => {
    const wrapper = factory({ username: "Rodney Pantonial" });

    expect(wrapper.find(".error").exists()).toBeFalsy();
  });
});
