import { mount } from "@vue/test-utils";
import ContactDetails from "@/components/Contact/ContactDetails.vue";

const info = () => {
  return {
    infoId: 1,
    icon: "bi bi-telephone",
    info: "09123456789",
  };
};

const factory = () => {
  return mount(ContactDetails as any, {
    propsData: {
      info: info(),
    }
  });
};

describe("Contact Details", () => {
  it("renders successfully", () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBe(true);
  });

	it("receives props successfully", () => {
    const wrapper = factory();
    expect(wrapper.props('info')).toStrictEqual(info());
  });

  it("renders icon successfully", () => {
    const wrapper = factory();
    expect(wrapper.find('.bi-telephone').exists()).toBe(true);
  });

  it("renders answer item successfully", () => {
    const wrapper = factory();
    expect(wrapper.html().includes("09123456789")).toBe(true);
  });
});