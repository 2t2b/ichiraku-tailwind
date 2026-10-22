function Home() {
  const testimonials = [
    {
      message: "The best restaurant ever!",
      name: "Groudon",
    },
    {
      message: "The beast restaurant",
      name: "Kyogre",
    },
    {
      message: "The best restaurant ever and ever forever!",
      name: "Rayquaza",
    },
    {
      message: "The best ambiance in the world!",
      name: "The amazing spiderman",
    },
    {
      message: "nindota oy!",
      name: "naruto",
    },
    {
      message: "oy nindota 2!",
      name: "Charizard",
    },
  ];
  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-24 text-white text-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed scale-105 blur-[5px]"
          style={{ backgroundImage: "url('/img/banner45.png')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 w-[90%] max-w-[1200px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#7fff00]">
            Welcome to Ichiraku
          </h1>
          <p className="text-lg md:text-xl text-[#7fff00]">
            experience the best cuisine in the city. Enjoy our signature dishes
            and cozy ambiance
          </p>
        </div>
      </section>
      <section className="py-12 bg-gray-50">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold text-center text-red-900 mb-8">
            Testimonials
          </h2>
          <div className="space-y-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white p-4 border-l-4 border-[#7fff00] shadow-sm"
              >
                <p className="italic">"{testimonial.message}"</p>
                <span className="block mt-2 font-bold text-right text-gray-600">
                  - {testimonial.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
