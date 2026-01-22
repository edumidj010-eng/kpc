
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

// Netlify/브라우저 환경에서 process.env 참조 에러 방지
if (typeof (window as any).process === 'undefined') {
  (window as any).process = { env: {} };
}

const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Rendering Error:", error);
    rootElement.innerHTML = `<div style="padding: 20px; color: red;">애플리케이션을 로드하는 중 오류가 발생했습니다. 콘솔을 확인해주세요.</div>`;
  }
} else {
  console.error("Could not find root element to mount to");
}
