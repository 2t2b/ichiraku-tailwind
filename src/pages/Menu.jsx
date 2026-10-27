const menuSections = [
  {
    title: "Appetizers",
    items: [
      {
        name: "Lumpia",
        price: "150",
        image: "/img/lumpia.png",
        description:
          "Fried spring rolls with vegetables or sometimes meat or shrimp.",
      },
      {
        name: "Gyoza",
        price: "250",
        image: "/img/gyoza.png",
        description:
          "Crispy, pan-fried dumplings filled with pork and vegetables, served with a tasty dipping sauce.",
      },
      {
        name: "Kwek-Kwek",
        price: "750",
        image: "/img/kwek-kwek.png",
        description:
          "Boiled Ostrich eggs coated with a mixture of flour, water, and food coloring, then deep-fried.",
      },
    ],
  },
  {
    title: "Main Course",
    items: [
      {
        name: "Miso Tonkotsu Ramen",
        price: "5999",
        image: "img/misotonkotsu.png",
        description:
          " A rich tonkotsu and miso broth with chashu pork, a soft-boiled egg, and fresh veggies, topped with sesame oil and green onions.",
      },
      {
        name: "Shoyu Ramen",
        price: "2999",
        image: "img/shoyu.png",
        description:
          "A soy-based broth with tender noodles, chashu pork, a soft-boiled egg, and veggies, topped with green onions.",
      },
      {
        name: "Tonkotsu Ramen",
        price: "4999",
        image: "img/tonkotsu.png",
        description:
          "A rich, creamy pork broth with tender noodles, chashu pork, a soft-boiled egg, and green onions.",
      },
    ],
  },
  {
    title: "Desserts",
    items: [
      {
        name: "Leche Flan",
        price: "599",
        image: "img/lecheflan.png",
        description: "Creamy custard pudding topped with a caramel sauce.",
      },
      {
        name: "Doroyaki",
        price: "299",
        image: "img/doroyaki.png",
        description:
          "Fluffy pancakes filled with sweet red bean paste, offering a perfect balance of softness and sweetness.",
      },
      {
        name: "Mitarashi Dango",
        price: "999",
        image: "img/mitarashi.png",
        description:
          "Grilled rice dumplings glazed with a sweet soy sauce, creating a perfect blend of savory and sweet flavors.",
      },
    ],
  },
];

function Menu() {
  return (
    <>
      <section className="py-12">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <h1 className="mb-8 text-4xl font-bold text-center text-[#496039]">
            Our Menu
          </h1>
          {menuSections.map((section) => (
            <div key={section.title} className="mb-10">
              <h2 className="text-2xl font-bold text-[#496039] border-b-2 border-[#496039] pb-2 mb-5">
                {section.title}
              </h2>
              <ul className="list-none space-y-4">
                {section.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex flex-col md:flex-row bg-white p-4 rounded-lg shadow-md"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full md:w-[100px] h-[200px] md:h-[100px] object-cover rounded-md mb-4 md:mb-0 md:mr-4 flex-shrink-0"
                    />
                    <div className="flex-1 w-full">
                      <div className="flex justify-between gap-4">
                        <span className="font-bold">{item.name}</span>
                        <span className="font-semibold text-[#496039] whitespace-nowrap">
                          PHP {item.price}
                        </span>
                      </div>
                      <p className="mt-2 text-gray-700">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Menu;
