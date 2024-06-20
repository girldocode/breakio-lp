import { Accordion, SectionTitle } from "@/components/LV2_Molecules";

const FAQs = () => {
  return (
    <div className=" bg-gray-100 px-4 md:px-20 py-10 md:py-20">
      <SectionTitle
        title="Frequently asked questions"
        desc="Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin."
      />
      <Accordion />
    </div>
  );
};

export default FAQs;
