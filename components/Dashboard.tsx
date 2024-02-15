export default function Dashboard() {
  return (
    <section>
      <div className="md:h-full w-full p-4">
        <div
          className="bg-cover mt-16 shadow-xl w-full bg-no-repeat rounded-xl bg-center bg-homeimage"
          style={{
            backgroundImage: "/dashboard.jpg",
            height: "500px",
          }}
        >
          <div className="p-10 m-10">
            <div className="py-5 bg-opacity-0 rounded-2xl">
              <div className="flex items-center mt-20">
                <p className="text-3xl text-bold text-center text-white">
                  WE ARE READY TO GIVE YOU THE ENTERTAINMENT YOU DESERVE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
