import { motion } from "framer-motion";

const TestComponent: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-20 w-20 bg-blue-500"
    >
      Hello, Framer Motion!
    </motion.div>
  );
};

export default TestComponent;
