import { SectionTitle } from "@/components/LV2_Molecules";
import { BCard } from "@/components/shared & common";
import { cn } from "@/utils";

const BFavoriteTools = () => {
  const services = [
    {
      title: "Erat sit",
      description:
        "Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis.",
      image: "/mail-fast.png",
    },
    {
      title: "Eget sit",
      description:
        "Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus auctor habitant duis dictum.",
      image: "/mail-fast.png",
    },
    {
      title: "Et pellentesque",
      description:
        "Mi vitae, massa eu molestie massa euismod volutpat condimentum. Blandit molestie ullamcorper hendrerit purus lorem vulputate.",
      image: "/mail-fast.png",
    },
    {
      title: "Amet egestas",
      description:
        "Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet, felis. ",
      image: "/mail-fast.png",
    },
    {
      title: "Amet egestas",
      description:
        "Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet, felis. ",
      image: "/mail-fast.png",
    },
    {
      title: "Amet egestas",
      description:
        "Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet, felis. ",
      image: "/mail-fast.png",
    },
    {
      title: "Amet egestas",
      description:
        "Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet, felis. ",
      image: "/mail-fast.png",
    },
    {
      title: "Amet egestas",
      description:
        "Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet, felis. ",
      image: "/mail-fast.png",
    },
    {
      title: "Amet egestas",
      description:
        "Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet, felis. ",
      image: "/mail-fast.png",
    },
  ];

  const containerClasses = cn(
    "grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16"
  );
  const itemClasses = cn("flex flex-col items-center text-center ");

  return (
    <section className="  ">
      <div className=" px-4 py-12 md:p-20 flex flex-col gap-y-20">
        <SectionTitle
          title="Your favourite tools"
          desc="In risus nec molestie at in pulvinar tellus. At integer id condimentum gravida nisi nisl. Sem vitae porttitor arcu congue sem erat et sit faucibus. Sollicitudin elit gravida tellus mattis porttitor."
        />
        <div className={containerClasses}>
          {services.map((service, index) => (
            <div key={index} className={itemClasses}>
              <BCard
                image={service.image}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BFavoriteTools;
