type Props = {
    toast: any
    status: 'success' | 'error'
    title: string
    description?: string
    isClosible?: boolean
  }
  const onToast = ({
    toast,
    status,
    title,
    description,
    isClosible = false,
  }: Props) => {
    if (description) {
      toast({
        title: title,
        description: description,
        status: status,
        variant: 'solid',
        duration: 1000,
        containerStyle: {
          opacity: 0.9,
        },
        isClosible: isClosible,
      })
    } else {
      toast({
        title: title,
        status: status,
        variant: 'solid',
        duration: 1000,
        containerStyle: {
          opacity: 0.9,
        },
        isClosible: isClosible,
      })
    }
  }
  export default onToast