import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

function readInitialTheme() {
  return (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    const dark = readInitialTheme();
    document.documentElement.classList.toggle('dark', dark);
    return dark;
  });

  const toggleTheme = () => {
    setIsDark((current) => {
      const next = !current;
      document.documentElement.classList.toggle('dark', next);
      localStorage.theme = next ? 'dark' : 'light';
      return next;
    });
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-2 rounded-full glass flex items-center justify-center transition-colors hover:bg-black/5 dark:hover:bg-white/10"
      aria-label="Toggle Theme"
    >
      {isDark ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-indigo-600" />}
    </motion.button>
  );
}
