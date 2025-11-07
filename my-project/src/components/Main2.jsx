export function Main2() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Main Section */}
      <div className="relative flex flex-col items-center text-center">
        {/* Main Image */}
        <img
          src="/images/E1.png"
          alt="Top Left"
          className="absolute top-12 left-48 sm:top-0 sm:left-0 w-24 h-24 md:w-32 md:h-32 rounded-lg "
        />
        <img
          src="/images/i1.png"
          alt="Main Community"
          className="w-40 h-40 md:w-56 md:h-56 rounded-fullz-10"
        />
        <img
          src="/images/E2.png"
          alt="Top Right"
          className="absolute top-24 right-0 w-24 h-24 md:w-32 md:h-32 rounded-lg "
        />
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#C24914] mt-6">
          Start growing with
          <br />
          our community
        </h1>

        {/* Description */}
        <p className="text-gray-700 mt-4 max-w-md">
          Community: Start learning from your experience and grow together.
        </p>

        {/* Call to Action Button */}
        <button className="mt-6 bg-[#C24914] text-white px-6 py-3 rounded-md shadow hover:bg-[#a63a0b] transition">
          Join Community
        </button>

        {/* Relative Images */}
        <div className="relative mt-12 w-full h-64 md:h-80">
          {/* Top Left Image */}
        
        <img                                                     
            src="/images/E3.png"
            alt="Bottom Left"
            className="absolute bottom-48 left-24 w-24 h-24 md:w-32 md:h-32 rounded-lg "
          />

  
          <img
            src="/images/E4.png"
            alt="Bottom Right"
            className="absolute bottom-36 right-48 w-24 h-24 md:w-32 md:h-32 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}