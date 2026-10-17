function Home() {
  const backgroundStyle = {
    backgroundImage: 'url("../public/img/banner45.png")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "150% auto",
    backgroundPosition: "center 2px",
  };

  return (
    <section>
      <div className="relative py-[5em] text-center text-[#7fff00] overflow-hidden min-h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0 blur-[5px] scale-[1.1] -z-10"
          style={backgroundStyle}
        />
        <div className="flex flex-col items-center justify-center px-4">
          <p className="text-5xl font-bold">Welcome to Ichiraku</p>
          <p className="text-2xl mt-10">
            Experience the best cuisine in the city. Enjoy our signature dishes
            and cozy ambiance
          </p>
        </div>
      </div>

      <div className="py-8">
        <h2 className="text-center text-2xl font-bold mb-8">Customer Testimonials</h2>

        <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6">
          <div className="bg-white border-l-[6px] border-[#84bd00] px-5 py-4 shadow-sm">
            <p className="italic text-black">"The best restaurant ever!"</p>
            <p className="mt-4 text-right font-bold text-black">
              - Groudon
            </p>
          </div>
          <div className="bg-white border-l-[6px] border-[#84bd00] px-5 py-4 shadow-sm">
            <p className="italic text-black">"The beast restaurant"</p>
            <p className="mt-4 text-right font-bold text-black">
              - Kyogre
            </p>
          </div>
           <div className="bg-white border-l-[6px] border-[#84bd00] px-5 py-4 shadow-sm">
            <p className="italic text-black">"The best restaurant ever and ever forever!"</p>
            <p className="mt-4 text-right font-bold text-black">
              - Rayquaza
            </p>
          </div>
           <div className="bg-white border-l-[6px] border-[#84bd00] px-5 py-4 shadow-sm">
            <p className="italic text-black">"The best ambiance in the world!"</p>
            <p className="mt-4 text-right font-bold text-black">
              - The amazing spiderman
            </p>
          </div>
          <div className="bg-white border-l-[6px] border-[#84bd00] px-5 py-4 shadow-sm">
            <p className="italic text-black">"nindota oy!"</p>
            <p className="mt-4 text-right font-bold text-black">
              - naruto
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
