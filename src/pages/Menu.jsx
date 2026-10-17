function Menu() {
  return (
    <section>
      <p className="justify-center text-center mt-16 text-[2em] font-bold text-[#496039]">
        Our Menu
      </p>
      <div className="mx-auto mt-10 w-[80%]">
        <h2 className="text-2xl font-bold text-[#496039] pb-4 border-b-[3px] border-[#496039]">
          Appetizers
        </h2>
        <div className="flex gap-4 bg-white p-4 rounded-md shadow-md mt-6">
          <img
            src="../public/img/lumpia.png"
            alt="lumpia"
            className="w-[120px] h-[120px] object-cover rounded-md shrink-0"
          />
          <div className="flex-1">
            <div className="flex justify-between">
              <p className="font-bold text-grey-800 text-[20px]">Lumpia</p>
              <p className="text-[#496039]">PHP 150</p>
            </div>
            <p className="tex-grey-800">
              Fried spring rolls with vegetables or sometimes meat or shrimp.
            </p>
          </div>
        </div>

        <div className="flex gap-4 bg-white p-4 rounded-md shadow-md mt-6">
          <img
            src="../public/img/gyoza.png"
            alt="gyoza"
            className="w-[120px] h-[120px] object-cover rounded-md shrink-0"
          />
          <div className="flex-1">
            <div className="flex justify-between">
              <p className="font-bold text-grey-800 text-[20px]">Gyoza</p>
              <p className="text-[#496039]">PHP 250</p>
            </div>
            <p className="tex-grey-800">
              Crispy, pan-fried dumplings filled with pork and vegetables, served with a tasty dipping sauce.
            </p>
          </div>
        </div>

        <div className="flex gap-4 bg-white p-4 rounded-md shadow-md mt-6">
          <img
            src="../public/img/kwek-kwek.png"
            alt="kwek-kwek"
            className="w-[120px] h-[120px] object-cover rounded-md shrink-0"
          />
          <div className="flex-1">
            <div className="flex justify-between">
              <p className="font-bold text-grey-800 text-[20px]">Kwek-Kwek</p>
              <p className="text-[#496039]">PHP 750</p>
            </div>
            <p className="tex-grey-800">
              Boiled Ostrich eggs coated with a mixture of flour, water, and food coloring, then deep-fried.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#496039] pb-4 border-b-[3px] border-[#496039] mt-10">
          Main Course
        </h2>        

        <div className="flex gap-4 bg-white p-4 rounded-md shadow-md mt-6">
          <img
            src="../public/img/misotonkotsu.png"
            alt="Miso Tonkotsu Ramen"
            className="w-[120px] h-[120px] object-cover rounded-md shrink-0"
          />
          <div className="flex-1">
            <div className="flex justify-between">
              <p className="font-bold text-grey-800 text-[20px]">Miso Tonkotsu Ramen</p>
              <p className="text-[#496039]">PHP 5,599</p>
            </div>
            <p className="tex-grey-800">
              A rich tonkotsu and miso broth with chashu pork, a soft-boiled egg, and fresh veggies, topped with sesame oil and green onions.
            </p>
          </div>
        </div>

        <div className="flex gap-4 bg-white p-4 rounded-md shadow-md mt-6">
          <img
            src="../public/img/shoyu.png"
            alt="Shotu ramen"
            className="w-[120px] h-[120px] object-cover rounded-md shrink-0"
          />
          <div className="flex-1">
            <div className="flex justify-between">
              <p className="font-bold text-grey-800 text-[20px]">Shoyu Ramen</p>
              <p className="text-[#496039]">PHP 2,799</p>
            </div>
            <p className="tex-grey-800">
              A soy-based broth with tender noodles, chashu pork, a soft-boiled egg, and veggies, topped with green onions.
            </p>
          </div>
        </div>

        <div className="flex gap-4 bg-white p-4 rounded-md shadow-md mt-6">
          <img
            src="../public/img/tonkotsu.png"
            alt="Tonkotsu Ramen"
            className="w-[120px] h-[120px] object-cover rounded-md shrink-0"
          />
          <div className="flex-1">
            <div className="flex justify-between">
              <p className="font-bold text-grey-800 text-[20px]">Tonkotsu Ramen</p>
              <p className="text-[#496039]">PHP 4,999</p>
            </div>
            <p className="tex-grey-800">
              A rich, creamy pork broth with tender noodles, chashu pork, a soft-boiled egg, and green onions.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#496039] pb-4 border-b-[3px] border-[#496039] mt-10">
          Desserts
        </h2>        

        <div className="flex gap-4 bg-white p-4 rounded-md shadow-md mt-6">
          <img
            src="../public/img/lecheflan.png"
            alt="Leche Flan"
            className="w-[120px] h-[120px] object-cover rounded-md shrink-0"
          />
          <div className="flex-1">
            <div className="flex justify-between">
              <p className="font-bold text-grey-800 text-[20px]">Leche Flan</p>
              <p className="text-[#496039]">PHP 589</p>
            </div>
            <p className="tex-grey-800">
              Creamy custard pudding topped with a caramel sauce.
            </p>
          </div>
        </div>

        <div className="flex gap-4 bg-white p-4 rounded-md shadow-md mt-6">
          <img
            src="../public/img/doroyaki.png"
            alt="Doroyaki"
            className="w-[120px] h-[120px] object-cover rounded-md shrink-0"
          />
          <div className="flex-1">
            <div className="flex justify-between">
              <p className="font-bold text-grey-800 text-[20px]">Dorayaki</p>
              <p className="text-[#496039]">PHP 299</p>
            </div>
            <p className="tex-grey-800">
              Fluffy pancakes filled with sweet red bean paste, offering a perfect balance of softness and sweetness.
            </p>
          </div>
        </div>

        <div className="flex gap-4 bg-white p-4 rounded-md shadow-md mt-6">
          <img
            src="../public/img/mitarashi.png"
            alt="Mitarashi Dango"
            className="w-[120px] h-[120px] object-cover rounded-md shrink-0"
          />
          <div className="flex-1">
            <div className="flex justify-between">
              <p className="font-bold text-grey-800 text-[20px]">Mitarashi Dango</p>
              <p className="text-[#496039]">PHP 359</p>
            </div>
            <p className="tex-grey-800">
              Grilled rice dumplings glazed with a sweet soy sauce, creating a perfect blend of savory and sweet flavors.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Menu;
