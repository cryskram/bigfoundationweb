import Image from "next/image";

const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 rounded-full border-t-4 border-mGreen animate-spin"></div>
        <div className="absolute inset-2 flex items-center justify-center -2">
          <Image
            src="/logonotext.png"
            width={100}
            height={100}
            alt="loadericon"
          />
        </div>
      </div>
    </div>
  );
};

export default Spinner;
