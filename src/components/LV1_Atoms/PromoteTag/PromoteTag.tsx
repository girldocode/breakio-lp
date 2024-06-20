import BText from "../BText/BText";

const PromoteTag = () => {
  return (
    <div>
      <button className="py-[4px] px-[8px] border rounded-[4px] bg-blue-gray-50 bg-blue-100">
        <BText as="span" size="sm" weight="normal" color="blue-800">
          Promoted
        </BText>
      </button>
    </div>
  );
};

export default PromoteTag;
