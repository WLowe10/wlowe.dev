const mainVariants = {
    enter: {
        transform: "translateX(0%)",
        opacity: 1,
        transition: {
            duration: .5
        }
    },
    exit: {
        transform: "translateX(-110%)",
        opacity: 0,
        transition: {
            duration: .5
        }
    }
}; 

const detailsVariants = {
    enter: {
        transform: "translateX(0%)",
        opacity: 1,
        transition: {
            duration: .5
        }
    },
    exit: {
        transform: "translateX(110%)",
        opacity: 0,
        transition: {
            duration: .5
        }
    }
};

export {
    mainVariants, 
    detailsVariants
}