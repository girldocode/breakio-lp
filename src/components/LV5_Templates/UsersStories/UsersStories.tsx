import { SectionTitle } from "@/components/LV2_Molecules";
import { UserCarousal } from "@/components/LV4_Organisms";

const UsersStories = () => {
  return (
    <div className="pt-12 px-4 space-y-8 lg:py-20 lg:px-20 ">
      <SectionTitle
        title="Stories from our users"
        desc="Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin."
      />
      <UserCarousal />
    </div>
  );
};

export default UsersStories;
