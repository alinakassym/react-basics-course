import { useState } from "react"

export const useOpenItem = () => {
    const [openItem, setOpenItem] = useState();
    return {openItem, setOpenItem};
}