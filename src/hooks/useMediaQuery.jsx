import { useState, useEffect } from "react"
import { useEventListenerr } from "./useEventListener";

const useMediaQuery = (mediaQuery) => {
    const [isMatch, setIsMatch] = useState(false)
    const [mediaQueryList, setMediaQueryList] = useState(null)
    useEffect(() => {
        const list = window.matchMedia(mediaQuery)
        setMediaQueryList(list)
        setIsMatch(list.matches)
    }, [mediaQuery])
    useEventListenerr("change", e => setIsMatch(e.matches), mediaQueryList)
    return isMatch
}

export default useMediaQuery;
