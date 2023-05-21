import { mount } from "@vue/test-utils";
import ProjectComponent from "@/components/Projects/ProjectComponent.vue";

const projectItem = () => {
    return {
        projectID: 5,
        projectName: "Project 5",
        projectImage:
          "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvamVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
        projectDesc: "Project 2 sample description...",
        projectTags: ["HTML", "React", "Bootstrap"],
        projectType: "Personal",
    };
  };

const factory = () => {
    return mount(ProjectComponent as any, {
      propsData: {
        projectColor: "periwinkle-1",
        projectItem: projectItem(),
      },
      data() {
        return {
          showModal: false,
        };
      },
    });
  };

    
  describe("Project Component", () => {
    it("renders the exact projectColor value", () => {
        const wrapper = factory();
        expect(wrapper.props().projectColor).toBe("periwinkle-1");
    });

    it("renders the exact projectItem value", () => {
        const wrapper = factory();
        expect(wrapper.props().projectItem).toStrictEqual(projectItem());
    });

    it("projectColor prop is not null", () => {
        const wrapper = factory();
        expect(wrapper.props().projectColor).not.toBeNull();
    });

    it("projectItem prop is not null", () => {
        const wrapper = factory();
        expect(wrapper.props().projectItem).not.toBeNull();
    });

    it("intial showModal value is false", () => {
        const wrapper = factory();
        expect(wrapper.vm.showModal).toBe(false);
    });

    it("showModal value is not null", () => {
        const wrapper = factory();
        expect(wrapper.vm.showModal).not.toBeNull();
    });

  });