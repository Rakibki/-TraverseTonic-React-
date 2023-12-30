import newPaper from "../../assets/image/newPaper.png";

const Newspapaer = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <img src={newPaper} alt="" />
      </div>
      <div>
        <p>Lorem ipsum dolor</p>
        <h2 className="text-2xl">
          FINDING THE PERFECT TRAILS TO HIKE IS EASY WITH NEWSLETTER
        </h2>
        <p>
          Lorem ipsum dolor FINDING THE PERFECT TRAILS TO HIKE IS EASY WITH
          NEWSLETTER Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiu tempor incididu nt ut labore et dolore minim veniam, quis
          nostrud nus
        </p>

        <div className="grid grid-cols-3">
            <input type="text" name="name" placeholder="Name" id="" />
            <input type="email" name="email" placeholder="E-mail" id="" />
            <button className="uppercase font-semibold">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Newspapaer;
