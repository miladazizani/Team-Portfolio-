import ImageCard from "../components/ImageCard";

const Team = () => {
  return (
    <main id="team" className="flex flex-col items-center px-6 py-16 bg-gray-50">
      

      <section className="text-center max-w-3xl mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          The Minds Behind the Code
        </h1>
        <p className="text-lg md:text-xl font-light text-gray-700">
          We design, we code, and we turn ideas into smooth, interactive user experiences.
        </p>
      </section>


      <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <ImageCard
          name="Mild Azizani"
          job="MA / AI Learning"
          src="/images/milad.jpg"
        />
        <ImageCard
          name="Amin Rasooli"
          job="Designer & Mobile Developer"
          src="/images/amin.jpg"
        />
        <ImageCard
          name="Mojib Movahed"
          job="Technical Artist & Marketer"
          src="/images/mojib.jpg"
        />
        <ImageCard
          name="Nawid Talaye"
          job="DevOps & Tester"
          src="/images/nawid.jpg"
        />
      </section>
      
    </main>
  );
};

export default Team;
