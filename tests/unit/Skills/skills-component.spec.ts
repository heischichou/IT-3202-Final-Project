import { mount } from "@vue/test-utils";
import SkillsComponent from "@/components/SkillsList/SkillsComponent.vue";

const personalSkillsName = "Personal Skills";
const technicalSkillsName = "Technical Skills";

const personalSkills = () => {
  return {
    skillId: 1,
    skillName: personalSkillsName,
    skillList: [
      "Understand the business requirements",
      "Communicate client's needs to the team",
      "Determine the needed tasks to be done",
      "Follow up on each member's progress",
      "Create a team from prospective candidates",
      "Collaborate with team on blocking issues",
      "Basic skills in project management",
    ],
    imageUrl: "/img/photo-1576267423445-b2e0074d68a4.ceac34d1.png"
  };
};

const technicalSkills = () => {
  return {
    skillId: 2,
    skillName: technicalSkillsName,
    skillList: [
      "Inter-branch VPN Configuration",
      "Linux Server Administration",
      "NAS Server Deployment",
      "Reactive Programming",
      "Rack Mounted Server Deployment",
      "Cisco Networking",
      "PFSense Network Configuration",
      "Functional Programming",
      "GitFlow and Semantic Versioning",
      "Subversion",
    ],
    imageUrl: "/img/photo-1618477388954-7852f32655ec.png"
  };
};

const personalSkillsFactory = () => {
  return mount(SkillsComponent as any, {
    propsData: {
      item: personalSkills(),
      index: 1,
    },
  });
};

const technicalSkillsFactory = () => {
  return mount(SkillsComponent as any, {
    propsData: {
      item: technicalSkills(),
      index: 2,
    },
  });
};

describe("Technology List", () => {
  it("renders successfully", () => {
    const personalSkillsWrapper = personalSkillsFactory();
    const technicalSkillsWrapper = technicalSkillsFactory();
    expect(personalSkillsWrapper.exists()).toBe(true);
    expect(technicalSkillsWrapper.exists()).toBe(true);
  });

  it("receives props successfully", () => {
    const personalSkillsWrapper = personalSkillsFactory();
    const technicalSkillsWrapper = technicalSkillsFactory();
    expect(personalSkillsWrapper.props('item')).toStrictEqual(personalSkills());
    expect(technicalSkillsWrapper.props('item')).toStrictEqual(technicalSkills());
  });

  it("renders personal skills section successfully", () => {
    const wrapper = personalSkillsFactory();
    expect(wrapper.html().includes(personalSkillsName)).toBe(true);
    expect(wrapper.find(".skill-image").exists()).toBe(true);
    expect(wrapper.findAll('li').length).toBe(personalSkills().skillList.length);
  });

  it("renders technical skills section successfully", () => {
    const wrapper = technicalSkillsFactory();
    expect(wrapper.html().includes(technicalSkillsName)).toBe(true);
    expect(wrapper.find(".skill-image").exists()).toBe(true);
    expect(wrapper.findAll('li').length).toBe(technicalSkills().skillList.length);
  });
});