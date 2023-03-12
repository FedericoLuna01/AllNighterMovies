import { Button, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export const Pagination = ({ actualPage, setActualPage, totalPages }) => {
  const [templatePages, setTemplatePages] = useState()

  const handleChange = (page) => {
    if (page === '...' || page === '..') return
    setActualPage(page)
    window.scrollTo(0, 0)
  }

  const handlePrev = () => {
    if (actualPage === 1) return
    setActualPage(actualPage - 1)
    window.scrollTo(0, 0)
  }

  const handleNext = () => {
    if (actualPage === totalPages) return
    setActualPage(actualPage + 1)
    window.scrollTo(0, 0)
  }

  const first = () => {
    if (actualPage <= 3) {
      setTemplatePages([1, 2, 3, 4, 5, '...', totalPages])
    } else if (actualPage === totalPages || actualPage === totalPages - 1 || actualPage === totalPages - 2) {
      setTemplatePages([1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages])
    } else {
      setTemplatePages([1, '..', actualPage - 1, actualPage, actualPage + 1, '...', totalPages])
    }
  }

  useEffect(() => {
    first()
  }, [actualPage])

  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      align='center'
      justify='center'
      py={5}
    >
      {
        templatePages && (
          <>
            <Button
              colorScheme='orange'
              variant='solid'
              onClick={handlePrev}
            >
              Anterior
            </Button>
            <Stack
              direction='row'
            >
            {
                templatePages.map(page => {
                  return (
                  <Button
                    key={page}
                    colorScheme='orange'
                    variant={actualPage === page ? 'solid' : 'outline'}
                    onClick={() => handleChange(page)}
                  >
                    {page}
                  </Button>
                  )
                })
            }
            </Stack>
            <Button
              colorScheme='orange'
              variant='solid'
              onClick={handleNext}
            >
              Siguiente
            </Button>
          </>
        )
      }
    </Stack>
  )
}
