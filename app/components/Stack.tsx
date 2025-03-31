interface StackProps {
  skills: string[];
  mainColor: string;
  textColor: string;
}

const Stack: React.FunctionComponent<StackProps> = ({
  skills,
  textColor,
  mainColor,
}) => {
  return (
    <div
      style={{ backgroundColor: mainColor, borderColor: textColor }}
      className="border-4 border-solid w-full flex-col items-center justify-center p-[12px] my-[20px] rounded-[20px]"
    >
      <h3
        style={{ color: textColor }}
        className="mb-[12px] text-2xl font-bold text-center"
      >
        MA STACK
      </h3>
      <div className="flex gap-[25px] mt-[4px] font-bold text-base justify-evenly flex-wrap">
        {skills.map((skill, index) => (
          <p key={index}>{skill}</p>
        ))}
      </div>
    </div>
  );
};

export default Stack;
