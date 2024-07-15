// @ts-nocheck

import Link from "next/link";

const FooterNavs = ({ item }) => {
  return (
    <nav>
      <h4 className="text-white text-lg font-medium mb-7">{item.subheading}</h4>
      <ul className="custom_md:space-y-5 space-y-2.5">
        {item.menuItems.map((item, index) => (
          <li className="" key={index}>
            <Link
              className="text-text_color text-lg font-medium"
              href={item.link}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterNavs;
