import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
        <p className="text-sm">© {new Date().getFullYear()} SocialFlow Inc. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="hover:text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-1 py-1 transition-colors">Twitter</a>
          <a href="#" className="hover:text-slate-2 00 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-1 py-1 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-1 py-1 transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
