import { mount } from "@vue/test-utils";
import ProjectModal from "@/components/Projects/ProjectModal.vue";

const details = () => {
    return {
        projectID: 7,
        projectName: "CEBU CCTV WEBSITE",
        projectImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE3p3yVs1M0pTseaNkTJxbfpgfiFDCgHO1ag&usqp=CAU",
        projectDesc:
          "Update of Cebu CCTV Website to its initial wordpress version.",
        projectTags: ["WordPress", "MySQL", "LAMP"],
        projectType: "Major",
    };
  };

const factory = () => {
    return mount(ProjectModal as any, {
      propsData: {
        isVisible: true,
        projectDetails: details(),
        modalColor: "periwinkle-1",
      },
      data() {
        return {
          active: true,
        };
      },
    });
  };

  describe("Project Modal", () => {
    it("renders the exact isVisible value", () => {
        const wrapper = factory();
        expect(wrapper.props().isVisible).toBe(true);
    });

    it("renders the exact modalColor value", () => {
        const wrapper = factory();
        expect(wrapper.props().modalColor).toBe("periwinkle-1");
    });

    it("recieves the projectDetails props successfully", () => {
        const wrapper = factory();
        expect(wrapper.props().projectDetails).toStrictEqual(details());
    });

    it("isVisible prop is not null", () => {
        const wrapper = factory();
        expect(wrapper.props().isVisible).not.toBeNull();
    });

    it("modalColor prop is not null", () => {
        const wrapper = factory();
        expect(wrapper.props().modalColor).not.toBeNull();
    });

    it("projectDetails prop is not null", () => {     
        const wrapper = factory();
        expect(wrapper.props().projectDetails).not.toBeNull();
    });

    it("active variable value is true", () => {
        const wrapper = factory();
        expect(wrapper.vm.active).toBe(true);
    });

  });

