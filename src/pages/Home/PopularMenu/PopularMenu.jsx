import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle,";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {

  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularMenu = data.filter((item) => item.category === "popular");
        setMenu(popularMenu);
      }  );
  }, []);

  return (
    <section>
      <SectionTitle
        headding="---Check it out---"
        subheading="FROM OUR MENU"
      ></SectionTitle>
      <div className="container mx-auto flex justify-between flex-wrap">
            {
              menu.map((item) => (
                <MenuItem key={item._id} item={item}></MenuItem>
              ))
            }
      </div>
      <div className="text-center">
            <button className="btn btn-outline">View Full Menu</button>
      </div>
    </section>
  );
};

export default PopularMenu;
