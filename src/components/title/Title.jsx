const Title = ({ subTitle, title, desc }) => {
  return (
    <div className="w-[50%] mb-10 mx-auto">
      <h1 className="text-2xl font-Satisfy text-[#3fd0d4] font-semibold text-center">
        {subTitle}
      </h1>
      <h1 className="text-5xl text-[#212121] mt-2 mb font-bold text-center">
        {title}
      </h1>
      <h1 className="text-lg text-[#505050] font-Poppins mt-2 text-center">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br /> Aenean
        commodo ligula eget dolor lorem ipsum.
      </h1>
    </div>
  );
};

export default Title;
