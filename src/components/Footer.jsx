export default function Footer() {
  const footerLinks = [
    {
      name: "Product",
      children: [
        "Overview",
        "Features",
        "Solutions",
        "Tutorials",
        "Pricing",
        "Releasing",
      ],
    },

    {
      name: "Company",
      children: [
        "About Us",
        "Careers",
        "Press",
        "News",
        "Medical Kit",
        "Contact",
      ],
    },
    {
      name: "Resources",
      children: ["Blog", "Careers", "Press", "News", "Medical Kit", "Contact"],
    },
    {
      name: "Use Cases",
      children: [
        "Startups",
        "Enterprises",
        "Government",
        "Sass",
        "Market Places",
        "Ecommerce",
      ],
    },
    {
      name: "Social",
      children: [
        "Twitter",
        "LinkedIn",
        "Facebook",
        "Github",
        "AngelList",
        "Dribble",
      ],
    },
    {
      name: "Legal",
      children: [
        "Terms",
        "Privacy",
        "Cookies",
        "Licenses",
        "Settings",
        "Contact",
      ],
    },
  ];
  return (
    <footer classnName="text-center lg:text-left grid place-content-center">
      <div className="container p-6 mt-14 ">
        <div className="grid md:grid-cols-4 lg:grid-cols-6">
          {footerLinks.map((item) => {
            return (
              <>
                <div className="mb-6" key={item.name}>
                  <h5 className="mb-2.5 font-bold uppercase text-slate-900 ">
                    {item.name}
                  </h5>

                  <ul className="mb-0 list-none">
                    {item.children.map((child) => {
                      return (
                        <li className="text-slate-900 cursor-pointer" key={child.name}>
                          {child}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <hr className="w-full"/>

      <div className="py-8 px-12  flex flex-row items-center justify-between text-slate-900 shadow-md">
        <span className="lg:text-2xl text-base font-medium">Untitled UI</span>

        <span className="">© 2023 Untitled UI. All Rights Reserved</span>
      </div>
    </footer>
  );
}
