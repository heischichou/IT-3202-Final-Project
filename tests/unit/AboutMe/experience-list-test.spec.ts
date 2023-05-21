import { mount } from "@vue/test-utils";
import ExperienceList from "@/components/AboutMe/ExperienceList.vue";

const title = "Web Developer";
const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.";
const organization = "Xlr8 Ventures Inc";
const year = "PRESENT";

const item = () => {
  return {
    experienceId: 1,
    title: title,
    description: description,
    organization: organization,
    roles: [
      "AWS Infrastructure",
      "AWS Lambda System",
      "Central Event Manager for Postnord",
      "Create Unit Tests",
      "Retro Planning",
      "Systems Development",
    ],
    year: year,
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

  it("renders title successfully", () => {
    const wrapper = factory();
    expect(wrapper.html().includes(title)).toBe(true);
  });

  it("renders organization position successfully", () => {
    const wrapper = factory();
    expect(wrapper.html().includes(description)).toBe(true);
    expect(wrapper.html().includes(year)).toBe(true);
  });

  it("renders description successfully", () => {
    const wrapper = factory();
    expect(wrapper.html().includes(organization)).toBe(true);
  });

  it("renders the roles successfully", () => {
    const wrapper = factory();
    const roles_wrapper = wrapper.find('.roles');
    expect(roles_wrapper.findAll('.rounded-pill').length).toBe(item().roles.length);
  });
});
