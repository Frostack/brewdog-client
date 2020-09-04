import { useMediaQuery } from 'react-responsive'

function useDeviceSize() {
  const isSmall = useMediaQuery({ query: '(min-width: 576px)' })
  const isMedium = useMediaQuery({ query: '(min-width: 768px)' })
  const isLarge = useMediaQuery({ query: '(min-width: 992px)' })
  const isExtraLarge = useMediaQuery({ query: '(min-width: 1200px)' })

  const deviceSize = isExtraLarge
    ? 'EXTRA_LARGE'
    : isLarge
    ? 'LARGE'
    : isMedium
    ? 'MEDIUM'
    : isSmall
    ? 'SMALL'
    : 'SMALL'

  return deviceSize
}

export default useDeviceSize
