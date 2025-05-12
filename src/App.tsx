import type { Component } from 'solid-js';
import { FiMail, FiTwitter, FiGithub } from 'solid-icons/fi';
import { SiQiita } from 'solid-icons/si';

const App: Component = () => {
  const email = "contact.us@lynxes.org";
  const twitterUrl = "https://twitter.com/koinunopochi";
  const githubUrl = "https://github.com/koinunopochi";
  const qiitaUrl = "https://qiita.com/koinunopochi";

  return (
    <div class="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 flex items-center justify-center p-4 overflow-hidden"> {/* overflow-hidden を追加 */}
      {/* カード部分にアニメーションクラスを追加 */}
      <div class="max-w-2xl w-full mx-auto bg-white rounded-lg shadow-xl p-8 sm:p-10 text-center animate-gentle-fade-in-up">

        <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Contact Us</h1>
        <p class="text-md text-gray-500 mb-4">
          koinunopochi - Web Developer & Tech Enthusiast.
        </p>
        <p class="text-lg text-gray-600 mb-6">
          Get in touch or find us on social media:
        </p>
        <hr class="my-6 border-gray-200" />

        <div class="flex justify-center items-center space-x-4 sm:space-x-5">

          {/* アイコンの<a>タグに hover:-translate-y-0.5 を追加 */}
          <a
            href={`mailto:${email}`}
            aria-label="Email"
            class="p-3 rounded-full text-gray-500 bg-gray-100 hover:bg-indigo-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-0.5"
          >
            <FiMail size={24} class="block"/>
          </a>

          <a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            class="p-3 rounded-full text-gray-500 bg-gray-100 hover:bg-sky-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-0.5"
          >
            <FiTwitter size={24} class="block"/>
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            class="p-3 rounded-full text-gray-500 bg-gray-100 hover:bg-gray-800 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-0.5"
          >
            <FiGithub size={24} class="block"/>
          </a>

          <a
            href={qiitaUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Qiita"
            class="p-3 rounded-full text-gray-500 bg-gray-100 hover:bg-lime-600 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-0.5"
          >
            <SiQiita size={24} class="block"/>
          </a>

        </div>
      </div>
    </div>
  );
};

export default App;
