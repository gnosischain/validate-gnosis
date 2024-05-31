export default function Footer() {
  return (
    <div className="bg-[#191919] w-full h-[548px] flex flex-col justify-center items-center">
      <div className="w-5/6 lg:w-4/6">
        <p className="text-center text-xl lg:text-[31px]">
          The best way to gain experience is to be part of the community. Meet the Gnosis Chain validator community. By bringing together Gnosis Chain node operators with our core developers and developers from client teams, we share updates. Join our next event to be a part of the network.
        </p>
        <div className="w-full flex justify-center gap-x-4 text-sm lg:text-[20px] mt-12">
          <div className=" border rounded-lg p-2 lg:p-4 hover:bg-white/15">Events Page</div>
          <div className=" border rounded-lg p-2 lg:p-4 hover:bg-white/15">Discord</div>
          <div className=" border rounded-lg p-2 lg:p-4 hover:bg-white/15">Validator Newsletter</div>
          <div className=" border rounded-lg p-2 lg:p-4 hover:bg-white/15">Tools and useful resources</div>
        </div>
      </div>
    </div>
  );
}
