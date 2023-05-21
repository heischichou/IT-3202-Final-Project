import { shallowMount } from "@vue/test-utils";
import SendAMessage from "@/components/Contact/SendAMessage.vue";

const factory = () => {
  return shallowMount(SendAMessage, {});
};

describe("Send A Message", () => {
  it("renders successfully", () => {
    const wrapper = factory();
    expect(wrapper.find("#send-a-message-component").exists()).toBeTruthy();
  });

  it("form is addressed correctly", () => {
    const wrapper = factory();
    expect(wrapper.html().includes("mailto:help@pantonial.dev")).toBe(true);
  });

  it("has a Subject input field", () => {
    const wrapper = factory();
    expect(wrapper.find("#floatingInput").exists()).toBeTruthy();
    expect(wrapper.find("#floatingInput").attributes("name")).toBe("subject");
  });

  it("has a Message text area", () => {
    const wrapper = factory();
    expect(wrapper.find("#floatingDetails").exists()).toBeTruthy();
    expect(wrapper.find("#floatingDetails").attributes("name")).toBe("body");
  });
});
