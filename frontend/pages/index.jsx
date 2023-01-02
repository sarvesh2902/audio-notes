import Layout from "../components/Layout";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  return (
    <Layout title="Home / AudioNotes">
      <div className="text-gray-700 bg-white">
        <div className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-4xl font-bold mb-2 text-black">
              Learn from Video and Audio with Audio Notes
            </div>
            <div className="text-2xl mb-8 text-gray-800">
              A software that lets you convert video to audio and create notes
              on specific timestamps
            </div>
            <button
              onClick={() => {
                router.push("/login");
              }}
              className="transform hover:scale-110 transition duration-300 ease-in-out bg-primary-200 font-bold rounded-full py-6 px-8 shadow-lg uppercase tracking-wider text-white"
            >
              Get Started
            </button>
          </div>
        </div>
        <section className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
            Our Services
          </h2>
          <div className="flex items-center flex-wrap mb-10">
            <div className="w-full md:w-1/2 px-4">
              <h4 className="text-3xl text-gray-800 font-bold mb-3">
                Upload Video or add Video Link
              </h4>
              <p className="text-gray-600 text-xl">
                Upload a video and convert it into audio. You can Play, Pause
                and Rewind audio.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <img
                src="https://cdn.dribbble.com/users/2487395/screenshots/6311129/responsivedesign_2x.png"
                alt="responsive"
              />
            </div>
          </div>
          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2 px-4">
              <img
                src="https://icons8.com/wp-content/uploads/2020/02/tips-on-mobile-UI-design.png"
                alt="component-friendly"
              />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <h4 className="text-3xl text-gray-800 font-bold mb-3">
                Add Timestamps with comments/tags/notes
              </h4>
              <p className="text-gray-600 text-xl">
                You cannot only add timestamps but also View/Edit/Delete them
                with comments/notes/tags.
              </p>
            </div>
          </div>
          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2 px-4">
              <h4 className="text-3xl text-gray-800 font-bold mb-3">
                Download and Share Audio with Timestamp
              </h4>
              <p className="text-gray-600 text-xl">
                You can download audio and share audio with timestamps and
                integrated notes/comments.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <img
                src="https://res.cloudinary.com/dvaflq2yz/image/upload/v1672561105/assets%20IIT%20guwahati/share_wstdzx.jpg"
                alt="customizable"
              />
            </div>
          </div>
        </section>
        {/* <section className="bg-gray-100">
                    <div className="container mx-auto px-6 py-20">
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                            Testimonials
                        </h2>
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/4 px-2 mb-4">
                                <div className="bg-white rounded shadow py-2">
                                    <p className="text-gray-800 text-base px-6 mb-5">
                                        The learning process can be greatly
                                        boosted as there is a feature to record
                                        timestamps and save notes and comments
                                        relevant to that section. Learning
                                        process can be highly simplified as
                                        accessing notes can be quite easy.
                                    </p>
                                    <p className="text-gray-500 text-xs md:text-sm px-6">
                                        Hrishikesh Kumbhar
                                    </p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/4 px-2 mb-4">
                                <div className="bg-white rounded shadow py-2">
                                    <p className="text-gray-800 text-base px-6 mb-5">
                                        Several times, we tend to spend extra
                                        time watching a video as quality of the
                                        video may not be desirable depending on
                                        the speed or network availability which
                                        can be significantly reduced by
                                        listening to an audio,
                                    </p>
                                    <p className="text-gray-500 text-xs md:text-sm px-6">
                                        Sarvesh Patil
                                    </p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/4 px-2 mb-4">
                                <div className="bg-white rounded shadow py-2">
                                    <p className="text-gray-800 text-base px-6 mb-5">
                                        We can extract text from the audio which
                                        proves very useful in many cases as text
                                        is more widely used in daily tasks.
                                        <br />
                                        Also, we can identify speakers in the
                                        audio and add their information in the
                                        annotations.
                                    </p>
                                    <p className="text-gray-500 text-xs md:text-sm px-6">
                                        Shreyansh Singh
                                    </p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/4 px-2 mb-4">
                                <div className="bg-white rounded shadow py-2">
                                    <p className="text-gray-800 text-base px-6 mb-5">
                                        Now-a-days, storage is of utmost
                                        importance, thus by using this web
                                        application we are saving space required
                                        to store a video by converting it into a
                                        simple audio which will contain equally
                                        valuable information .
                                    </p>
                                    <p className="text-gray-500 text-xs md:text-sm px-6">
                                        Atharva Bhoite
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
        <section className="bg-white">
          <div className="container mx-auto px-6 text-center py-10">
            <h2 className="mb-6 text-4xl font-bold text-center text-black">
              Take a leap!
            </h2>
            <h3 className="my-4 text-2xl text-gray-800">
              Experiece the next generation of learning!
            </h3>
            <button
              onClick={() => {
                router.push("/login");
              }}
              className="transform hover:scale-110 transition duration-300 ease-in-out bg-primary-200 text-white font-bold rounded-full mt-6 py-6 px-8 shadow-lg uppercase tracking-wider"
            >
              Get Started
            </button>
          </div>
        </section>

        {/* <footer className="bg-gray-100">
                    <div className="container mx-auto px-6 pt-10 pb-6">
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/4 text-center md:text-left">
                                <h5 className="uppercase mb-6 font-bold">Links</h5>
                                <ul className="mb-4">
                                    <li className="mt-2">
                                        <a
                                            href="#"
                                            className="hover:underline text-gray-600 hover:text-orange-500"
                                        >
                                            FAQ
                                        </a>
                                    </li>
                                    <li className="mt-2">
                                        <a
                                            href="#"
                                            className="hover:underline text-gray-600 hover:text-orange-500"
                                        >
                                            Help
                                        </a>
                                    </li>
                                    <li className="mt-2">
                                        <a
                                            href="#"
                                            className="hover:underline text-gray-600 hover:text-orange-500"
                                        >
                                            Support
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/4 text-center md:text-left">
                                <h5 className="uppercase mb-6 font-bold">Legal</h5>
                                <ul className="mb-4">
                                    <li className="mt-2">
                                        <a
                                            href="#"
                                            className="hover:underline text-gray-600 hover:text-orange-500"
                                        >
                                            Terms
                                        </a>
                                    </li>
                                    <li className="mt-2">
                                        <a
                                            href="#"
                                            className="hover:underline text-gray-600 hover:text-orange-500"
                                        >
                                            Privacy
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/4 text-center md:text-left">
                                <h5 className="uppercase mb-6 font-bold">Social</h5>
                                <ul className="mb-4">
                                    <li className="mt-2">
                                        <a
                                            href="#"
                                            className="hover:underline text-gray-600 hover:text-orange-500"
                                        >
                                            Facebook
                                        </a>
                                    </li>
                                    <li className="mt-2">
                                        <a
                                            href="#"
                                            className="hover:underline text-gray-600 hover:text-orange-500"
                                        >
                                            Linkedin
                                        </a>
                                    </li>
                                    <li className="mt-2">
                                        <a
                                            href="#"
                                            className="hover:underline text-gray-600 hover:text-orange-500"
                                        >
                                            Twitter
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/4 text-center md:text-left">
                                <h5 className="uppercase mb-6 font-bold">
                                    Company
                                </h5>
                                <ul className="mb-4">
                                    <li className="mt-2">
                                        <a
                                            href="#"
                                            className="hover:underline text-gray-600 hover:text-orange-500"
                                        >
                                            Official Blog
                                        </a>
                                    </li>
                                    <li className="mt-2">
                                        <a
                                            href="#"
                                            className="hover:underline text-gray-600 hover:text-orange-500"
                                        >
                                            About Us
                                        </a>
                                    </li>
                                    <li className="mt-2">
                                        <a
                                            href="#"
                                            className="hover:underline text-gray-600 hover:text-orange-500"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer> */}
      </div>
    </Layout>
  );
};

export default Home;
