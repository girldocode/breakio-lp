import { BButton, BInput } from "@/components/LV1_Atoms";

const BForm = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <BInput />
      <div className="hidden lg:block">
        <BButton size="lg" weight="bold" color="white">
          Start Now
        </BButton>
      </div>
      <div className=" lg:hidden ">
        <BButton size="sm" weight="bold" color="white">
          Start Now
        </BButton>
      </div>
    </div>
  );
};

export default BForm;
