import { mount } from "@vue/test-utils";
import ExperienceList from "@/components/AboutMe/ExpertiseList.vue";

const title = "Networking Training";
const description = "Studied protocols like RIP and VOIP. Implemented Subnetworking and Fire wall Techniques. Deployed the technology learned to the company network. Studied VPN and applied to inter-branch communication.";

const item = () => {
  return {
    expertiseId: 1,
    title: title,
    description: description,
    imageUrl: "/img/photo-1612045194743-877419047a35.png",
  };
};

const factory = (values = {}) => {
  return mount(ExperienceList as any, {
    propsData: {
      item: item(),
      ...values
    },
    ...values
  });
};

describe("Expertise List List", () => {
  it("renders successfully", () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBe(true);
  });

  it("receives props successfully", () => {
    const wrapper = factory();
    expect(wrapper.props('item')).toStrictEqual(item());
  });

  it("renders image successfully", () => {
    const wrapper = factory();
    expect(wrapper.find('.expertise-image').exists()).toBe(true);
  });

  it("renders title successfully", () => {
    const wrapper = factory();
    expect(wrapper.html().includes(title)).toBe(true);
  });

  it("renders description successfully", () => {
    const wrapper = factory();
    expect(wrapper.html().includes(description)).toBe(true);
  });
});
