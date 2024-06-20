const BInput = () => {
  return (
    <div className="flex items-center gap-x-4 gap-y-4 p-6 ">
      <input
        type="text"
        className=" w-full max-w-[476px]  h-[64px] rounded-[26px] border border-gray-300 px-[16px] md:pl-[24px] md:pr-[200px] py-[13px] mb-[8px]"
        placeholder="Enter text here"
      />
    </div>
  );
};

export default BInput;
