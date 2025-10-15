export function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-12 gap-8">
      {/* Left: Text Content */}
      <div className="w-full md:w-1/2 flex flex-col items-start">
        <h1 className="text-3xl md:text-5xl font-bold text-[#C24914] mb-6">
          Start learning <br />
          with us now
        </h1>
        <p className="text-gray-700 text-lg mb-8">
          Explore a variety of courses and resources to boost your skills and knowledge.
          <br />
          Join our community of learners today!
        </p>
        <button className="py-2 px-6 bg-[#C24914] text-white rounded-md shadow hover:bg-[#a63a0b] font-semibold transition">
          Start learning
        </button>
      </div>
      {/* Right: Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img src="/images/V.png" alt="Learning" className="max-w-xs md:max-w-md w-full h-auto rounded-lg " />
      </div>
      
    </div>
  );
}