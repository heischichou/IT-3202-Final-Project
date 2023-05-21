import { mount } from '@vue/test-utils';
import ProjectTag from '@/components/Projects/ProjectTag.vue';

const factory = () => {
    return mount(ProjectTag as any, {
      propsData: {
        text: 'Java',
        tagColor: 'red',
      },
    });
  };

describe("Project Tag", () => {
  it("renders the exact text value", () => {
    const wrapper = factory();
    expect(wrapper.props().text).toBe('Java');
  });

  it("renders the exact tagColor value", () => {
    const wrapper = factory();
    expect(wrapper.props().tagColor).toBe('red');
  });

  it("text prop is not null", () => {
    const wrapper = factory();
    expect(wrapper.props().text).not.toBeNull();
  });

  it("tagColor prop is not null", () => {
    const wrapper = factory();
    expect(wrapper.props().tagColor).not.toBeNull();
  });

}); 
