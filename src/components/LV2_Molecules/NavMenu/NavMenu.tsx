import { cn } from "@/utils";

const NavMenu = () => {
  const navLinks = [
    { name: "Explore", href: "/" },
    { name: "Solutions", href: "/" },
    { name: "About", href: "/" },
    { name: "Blog", href: "/" },
    { name: "Log In", href: "/" },
  ];

  const generalStyling = "flex gap-x-6 text-base font-medium text-gray-900";

  const classes = cn(generalStyling);

  return (
    <div className={classes}>
      {navLinks.map((item, index) => (
        <a href={item.href} key={index}>
          <p key={index}>{item.name}</p>
        </a>
      ))}
    </div>
  );
};

export default NavMenu;
