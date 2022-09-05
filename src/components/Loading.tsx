import { SpinnerGap } from "phosphor-react";

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center fixed min-h-screen h-full w-full bg-black bg-opacity-80">
      <SpinnerGap size={70} className="animate-spin" />
    </div>
  );
};

export default Loading;
