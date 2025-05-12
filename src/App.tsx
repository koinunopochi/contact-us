import type { Component } from 'solid-js';
import { FiMail } from 'solid-icons/fi';

const App: Component = () => {
  return (
    <div class="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 flex items-center justify-center p-4"> {/* p-4 を追加 */}
      <div class="max-w-2xl w-full mx-auto bg-white rounded-lg shadow-md p-8 text-center"> {/* w-full を追加 */}
        <h1 class="text-3xl font-bold text-gray-900 mb-4">お問い合わせ</h1>
        <p class="text-lg text-gray-600 mb-6">
          お問い合わせは以下のメールアドレスまでお願いいたします。
        </p>

        <a
          href="mailto:contact.us@lynxes.org"
          class="inline-flex items-center text-xl text-indigo-600 hover:text-indigo-800 font-medium group"
        >
          <FiMail class="w-6 h-6 mr-2 transition-transform duration-200 ease-in-out group-hover:scale-110" />
          <span>contact.us@lynxes.org</span>
        </a>
      </div>
    </div>
  );
};

export default App;
