import { motion } from "framer-motion";

const CardGeneral = ({imagen, titulo, texto}) => {
return(
    <motion.div 
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.6, duration: 1 }}
    className="d-flex flex-column justify-content-between w-30 minwidth py-5">
    <i className={`${imagen} fa-2xl my-5 text-center`}></i>
    <h3 className="text-center text-success pb-3">{titulo}</h3>
    <p className="text-center">{texto}</p>
  </motion.div>
)
}
export default CardGeneral;