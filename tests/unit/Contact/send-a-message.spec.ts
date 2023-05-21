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

  it("has a Subject input field", () => {
    const wrapper = factory();
    expect(wrapper.find("#floatingInput").exists()).toBeTruthy();
  });

  it("has a Message text area", () => {
    const wrapper = factory();
    expect(wrapper.find("#floatingDetails").exists()).toBeTruthy();
  });
});
