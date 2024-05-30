import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-full text-white">
      <div className="flex flex-col justify-center items-center min-h-screen w-full bg-gradient-to-b from-[#3E6957] to-[#191919] p-4">
        <p className="text-4xl lg:text-[70px] leading-tight font-display text-center">
          VALIDATE <br /> SECURE <br /> EARN
        </p>
      </div>
      <div className="w-full flex flex-col items-center px-80 py-24">
        <p className="text-[49px]">GNO is Your Key To Staking</p>
        <div className="w-full flex justify-between mt-8 text-[25px]">
          <div className="flex flex-col">
            <p>Total Staked GNO</p>
          </div>
          <div className="flex flex-col">
            <p>Current APY</p>
          </div>
          <div className="flex flex-col">
            <p>Active Validators</p>
          </div>
        </div>
        <p className="text-[49px] mt-24">Choose Your Plan</p>
        <div className="w-full flex justify-between mt-8 text-[25px]">
          <div className="flex flex-col">
            <p>Beginner</p>
            <p className="text-base">If you do not have the resources to build your own machine or can't afford a machine</p>
          </div>
          <div className="flex flex-col">
            <p>Intermediate</p>
            <p className="text-base">If you are a hobbyist, can afford a machine but wouldn't mind some GUI</p>
          </div>
          <div className="flex flex-col">
            <p>Advanced</p>
            <p className="text-base">You are a computer guru, are familiar with interacting with the terminal</p>
          </div>
        </div>
      </div>
    </main>
  );
}
