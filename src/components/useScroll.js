import {animateScroll as scroll} from 'react-scroll'

export default function useScroll() {
    
    const toggleIcon = () => {
        scroll.scrollToTop()
    }

    const linkProps = {
        smooth: true,
        duration: 500,
        spy: true,
        offset: -80
    }

    return({
            toggleIcon,
            linkProps
        }
    )
}