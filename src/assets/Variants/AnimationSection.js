import fadeInUp from '../Variants/fadeInUp';
import {motion} from "framer-motion";

 const AnimationSection = ({children}) => {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
      >
        {children}
      </motion.div>
    )
  }

  export default AnimationSection;