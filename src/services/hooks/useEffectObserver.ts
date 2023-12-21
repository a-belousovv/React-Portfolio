import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export const useIntersectionObserverHook = (
	ref: React.RefObject<HTMLElement>,
	className: string,
	threshold: number
) => {
	const [inViewRef, inView] = useInView({
		threshold: threshold,
	})

	useEffect(() => {
		const targetElement = ref.current

		if (targetElement) {
			if (inView) {
				targetElement.classList.add(className)
			} else {
				targetElement.classList.remove(className)
			}
		}
	}, [inView, className, ref])

	return inViewRef
}

export default useIntersectionObserverHook
