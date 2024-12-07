import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070"
          alt="Blog Hero"
          fill
          className="object-cover blur-[10px]"
          priority
        />
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-500 mb-6 drop-shadow-lg">
          Advanced Text Editor Blogs
        </h1>
        <p className="text-xl text-gray-100 max-w-2xl mx-auto">
          Exploring the latest in web development, programming, and technology
        </p>
      </div>
    </section>
  );
}
