import {motion} from "framer-motion";
import { useState } from "react";

const Test = () => {

    const [open, setOpen] = useState(false);

    const variants_1 = {
        visible:{
            opacity:1,
            x:100,
            transition:{type:"spring", stiffness:200, damping:100}
        },
        hidden:{opacity:0},
    }

    const variants_2 = {
        visible:{
            opacity:1,
            x:100,
            // Gives the transition to the children, every children start with a delay of 0.2 from the previous children
            transition:{staggerChildren : 0.2}
        },
        hidden:{opacity:0},
    }

    const variants = {
        visible: (i) =>({
            opacity:1,
            x:100,
            // Gives the transition to the children, every children start with a delay of 0.2 from the previous children
            transition:{deilay: i * 0.3}
        }),
        hidden:{opacity:0},
    }

    const item = [
        "item1", "item2", "item3", "item4"
    ]

    return (
        <div className="course">
            {/**
            <motion.div className="box"
             //initial={{opacity:0.5, scale:0.5}} 
             //animate={{opacity:1, scale:1}} 
             transition={{duration:2}}
             //whileHover={{opacity:1, scale:2}}
             //whileTap={{opacity:1, scale:2}}
             //whileInView={{opacity:1, scale:2}}
             variants={variants}
             initial="hidden"
             animate={open ? "visible" : "hidden"}
            >
            </motion.div>
            <button onClick={()=> setOpen(prev => !prev)}>Click</button>
             */}

            {//custom viene utilizzato per passare il parametro i alla variants.
            }
            <motion.ul initial="hidden" animate="visible" variants={variants}>
                {
                    item.map((item, el) => {
                        return (<motion.li variants={variants} key={el} custom={i}>{item}</motion.li>)
                    })
                }
            </motion.ul>

        </div>
    )
}

export default Test;