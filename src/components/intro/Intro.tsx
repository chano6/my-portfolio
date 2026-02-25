"use client";

import { useState } from "react";
import TypingEffect from "../common/TypingEffect";

const CODE_TEXT = `function Portfolio() {
  return "Welcome!"
}`;

export default function Intro() {
  const [isTypingDone, setIsTypingDone] = useState(false);

  const handleTypingComplete = () => {
    setIsTypingDone(true);
    setTimeout(() => console.log("Typing complete!"), 1500);
  };

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950">
      <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden max-w-lg w-full mx-4">
        {/* 에디터 상단 바 */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-800">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-4 text-gray-400 text-sm">portfolio.tsx</span>
        </div>

        {/* 코드 영역 */}
        <div className="p-6 h-40 flex items-center">
          <pre className="font-mono text-sm md:text-base">
            <code className="text-green-400">
              <TypingEffect
                text={CODE_TEXT}
                className="font-code"
                speed={50}
                onComplete={handleTypingComplete}
              />
            </code>
          </pre>
        </div>

        {/* 하단 안내 */}
        <div className="px-6 pb-6 text-center">
          {isTypingDone ? (
            <button
              onClick={() => console.log("Enter!")}
              className="text-gray-400 hover:text-white transition animate-pulse"
            >
              [Enter] 또는 3초 후 시작 ↵
            </button>
          ) : (
            <span className="text-gray-600 text-sm">타이핑 중...</span>
          )}
        </div>
      </div>
    </section>
  );
}
