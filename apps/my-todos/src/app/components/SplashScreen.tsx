import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuListTodo } from "react-icons/lu";

export const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [startFade, setStartFade] = useState(false);

  useEffect(() => {
    const showDelay = setTimeout(() => {
      setStartFade(true);
      const hideDelay = setTimeout(() => setShowSplash(false), 500);
      return () => clearTimeout(hideDelay);
    }, 1000);

    return () => clearTimeout(showDelay);
  }, []);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-green-600"
          initial={{ opacity: 1 }}
          animate={{ opacity: startFade ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-5xl font-bold text-white flex flex-row items-center justify-center">
            <LuListTodo />
            <span className="ml-4">Welcome to Todos</span>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
