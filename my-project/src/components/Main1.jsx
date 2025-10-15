export function Main1() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 flex flex-col gap-12">
      {/* First Row: Image left, text right */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 flex justify-center">
          <img src="/images/V2.png" alt="" className="max-w-xs md:max-w-md w-full h-auto rounded-lg shadow" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h1 className="text-2xl md:text-4xl font-bold text-black mb-4">
            Welcome to the <br />
            online centers
          </h1>
          <p className="text-gray-700 mb-2">Start learning from your experience</p>
          <p className="text-gray-700 mb-2">Enhance your skills with us now</p>
          <p className="text-gray-700 mb-2">Do your favorite course</p>
        </div>
      </div>
      {/* Second Row: Text left, image right */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 flex flex-col items-start order-2 md:order-1">
          <h1 className="text-2xl md:text-4xl font-bold text-black mb-4">
            Start learning by <br />
            creating free account <br />
            and get register
          </h1>
        </div>
        <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
          <img src="/images/V3.png" alt="" className="max-w-xs md:max-w-md w-full h-auto rounded-lg shadow" />
        </div>
      </div>
    </section>
  );
}