import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import share from "../images/share.jpg";
const Home = () => {
    return <Layout title="Home / AudioNotes">
        <div class="text-gray-700 bg-white">
  
  
  <div class="py-20 hero">
    <div class="container mx-auto px-6">
      <div class="text-4xl font-bold mb-2 text-white">
        Learn from Video and Audio with Audio Notes
      </div>
      <div class="text-2xl mb-8 text-gray-200">
        A software that lets you convert video to audio and create notes on specific timestamps
      </div>
      <button class="transform hover:scale-110 transition duration-300 ease-in-out bg-white font-bold rounded-full py-6 px-8 shadow-lg uppercase tracking-wider">
        Get Started
      </button>
    </div>
  </div>
  <section class="container mx-auto px-6 py-10">
    <h2 class="text-4xl font-bold text-center text-gray-800 mb-0">
      Features
    </h2>
    <div class="flex items-center flex-wrap mb-10">
      <div class="w-full md:w-1/2 px-4">
        <h4 class="text-3xl text-gray-800 font-bold mb-3">
         Upload Video or add Video Link
        </h4>
        <p class="text-gray-600 mb-8">
          Upload a video and convert it into audio. You can Play, Pause and Rewind audio. 
        </p>
      </div>
      <div class="w-full md:w-1/2 px-4">
        <img src="https://cdn.dribbble.com/users/2487395/screenshots/6311129/responsivedesign_2x.png" alt="responsive" />
      </div>
    </div>
    <div class="flex items-center flex-wrap mb-20">
      <div class="w-full md:w-1/2 px-4">
        <img src="https://icons8.com/wp-content/uploads/2020/02/tips-on-mobile-UI-design.png" alt="component-friendly" />
      </div>
      <div class="w-full md:w-1/2 px-4">
        <h4 class="text-3xl text-gray-800 font-bold mb-3">
          Add Timestamps with comments/tags/notes
        </h4>
        <p class="text-gray-600 mb-8">
          You cannot only add timestamps but also View/Edit/Delete them with comments/notes/tags.  
        </p>
      </div>
    </div>
    <div class="flex items-center flex-wrap mb-20">
      <div class="w-full md:w-1/2 px-4">
        <h4 class="text-3xl text-gray-800 font-bold mb-3">
          Download and Share Audio with Timestamp
        </h4>
        <p class="text-gray-600 mb-8">
          You can download audio and share audio with timestamps and integrated notes/comments.
        </p>
      </div>
      <div class="w-full md:w-1/2 px-4">
        <img src="https://res.cloudinary.com/dvaflq2yz/image/upload/v1672561105/assets%20IIT%20guwahati/share_wstdzx.jpg" alt="customizable" />
      </div>
    </div>
  </section>
  <section class="bg-gray-100">
    <div class="container mx-auto px-6 py-20">
      <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
        Testimonials
      </h2>
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/4 px-2 mb-4">
          <div class="bg-white rounded shadow py-2">
            <p class="text-gray-800 text-base px-6 mb-5">
            The learning process can be greatly boosted as there is a feature to record timestamps and save notes and comments relevant to that section. Learning process can be highly simplified as accessing notes can be quite easy.
            </p>
            <p class="text-gray-500 text-xs md:text-sm px-6">
              Hrishikesh Kumbhar
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/4 px-2 mb-4">
          <div class="bg-white rounded shadow py-2">
            <p class="text-gray-800 text-base px-6 mb-5">
            Several times, we tend to spend extra time watching a video as quality of the video may not be desirable depending on the speed or network availability which can be significantly reduced by listening to an audio, 
            </p>
            <p class="text-gray-500 text-xs md:text-sm px-6">
              Sarvesh Patil
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/4 px-2 mb-4">
          <div class="bg-white rounded shadow py-2">
            <p class="text-gray-800 text-base px-6 mb-5">
            We can extract text from the audio which proves very useful in many cases as text is more widely used in daily tasks.<br/> 
            Also, we can identify speakers in the audio and add their information in the annotations.
            </p>
            <p class="text-gray-500 text-xs md:text-sm px-6">
              Shreyansh Singh
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/4 px-2 mb-4">
          <div class="bg-white rounded shadow py-2">
            <p class="text-gray-800 text-base px-6 mb-5">
            Now-a-days, storage is of utmost importance, thus by using this web application we are saving space required to store a video by converting it into a simple audio which will contain equally valuable information .  
            </p>
            <p class="text-gray-500 text-xs md:text-sm px-6">
              Atharva Bhoite
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="call-to-action">
    <div class="container mx-auto px-6 text-center py-10">
      <h2 class="mb-6 text-4xl font-bold text-center text-white">
        Take a leap!
      </h2>
      <h3 class="my-4 text-2xl text-white">
        Experiece the next generation of learning!
      </h3>
      <button class="transform hover:scale-110 transition duration-300 ease-in-out bg-white font-bold rounded-full mt-6 py-6 px-8 shadow-lg uppercase tracking-wider">
        Get Started
      </button>
    </div>  
  </section>
  
  <footer class="bg-gray-100">
    <div class="container mx-auto px-6 pt-10 pb-6">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/4 text-center md:text-left">
          <h5 class="uppercase mb-6 font-bold">Links</h5>
          <ul class="mb-4">
            <li class="mt-2">
              <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">FAQ</a>
            </li>
            <li class="mt-2">
              <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Help</a>
            </li>
            <li class="mt-2">
              <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Support</a>
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/4 text-center md:text-left">
          <h5 class="uppercase mb-6 font-bold">Legal</h5>
          <ul class="mb-4">
            <li class="mt-2">
              <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Terms</a>
            </li>
            <li class="mt-2">
              <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Privacy</a>
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/4 text-center md:text-left">
          <h5 class="uppercase mb-6 font-bold">Social</h5>
          <ul class="mb-4">
            <li class="mt-2">
              <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Facebook</a>
            </li>
            <li class="mt-2">
              <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Linkedin</a>
            </li>
            <li class="mt-2">
              <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Twitter</a>
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/4 text-center md:text-left">
          <h5 class="uppercase mb-6 font-bold">Company</h5>
          <ul class="mb-4">
            <li class="mt-2">
              <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Official Blog</a>
            </li>
            <li class="mt-2">
              <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">About Us</a>
            </li>
            <li class="mt-2">
              <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</div>

    </Layout>;
};

export default Home;
