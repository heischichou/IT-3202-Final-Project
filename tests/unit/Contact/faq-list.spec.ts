import { mount } from "@vue/test-utils";
import FAQList from "@/components/Contact/FAQList.vue";

const faq = () => {
  return {
    faqId: 1,
    question: "What are you best at?",
    answer: "Java.",
  };
};

const factory = () => {
  return mount(FAQList as any, {
    propsData: {
      faq: faq(),
    }
  });
};

describe("FAQ List", () => {
	it("receives props successfully", () => {
    const wrapper = factory();
    expect(wrapper.props('faq')).toStrictEqual(faq());
  });

  it("renders question item successfully", () => {
    const wrapper = factory();
    expect(wrapper.find('.question').text()).toBe("What are you best at?");
  });

  it("renders answer item successfully", () => {
    const wrapper = factory();
    expect(wrapper.find('.answer').text()).toBe("Java.");
  });
});