import { mount } from "@vue/test-utils";
import TechnologyList from "@/components/SkillsList/TechnologyList.vue";

const scale = 3;
const name = "Java";

const item = () => {
  return {
    techSkillId: 1,
    name: name,
    scale: scale,
    type: "Language",
  };
};

const factory = () => {
  return mount(TechnologyList as any, {
    propsData: {
      item: item(),
    },
  });
};

describe("Technology List", () => {
  it("renders successfully", () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBe(true);
  });

  it("receives props successfully", () => {
    const wrapper = factory();
    expect(wrapper.props('item')).toStrictEqual(item());
  });

  it("renders mastery scales successfully", () => {
    const wrapper = factory();
    expect(wrapper.findAll('.tech-scales').length).toBe(scale);
  });

  it("renders language/framework name successfully", () => {
    const wrapper = factory();
    expect(wrapper.find('.tech-title').text().includes(name)).toBe(true);
  });
});