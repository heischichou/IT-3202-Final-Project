import { mount, shallowMount } from "@vue/test-utils";
import ExperienceList from "@/components/AboutMe/ExperienceList.vue";

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.";

const item = () => {
  return {
    experienceId: 1,
    title: "Web Developer",
    description: description,
    organization: "Xlr8 Ventures Inc",
    roles: [
      "AWS Infrastructure",
      "AWS Lambda System",
      "Central Event Manager for Postnord",
      "Create Unit Tests",
      "Retro Planning",
      "Systems Development",
    ],
    year: "PRESENT",
  };
};

const factory = (values = {}) => {
  return mount(ExperienceList as any, {
    propsData: {
      item: item(),
    },
    ...values
  });
};

describe("Experience List", () => {
  it("renders successfully", () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBe(true);
  });

  it("receives props successfully", () => {
    const wrapper = factory();
    expect(wrapper.props('item')).toStrictEqual(item());
  });

  it("renders a title successfully", () => {
    const wrapper = factory();
    expect(wrapper.props().text()).toEqual("Web Developer");
  });

  it("renders a description successfully", () => {
    const wrapper = factory();
    expect(wrapper.html().includes(description)).toBe(true);
  });

  it("renders the roles successfully", () => {
    const wrapper = factory();
    expect(wrapper.html().includes(description)).toBe(true);
  });
});
