import React from 'react'
import {BiAddToQueue} from 'react-icons/bi'
import { Button, Textarea, Flex, FormControl, FormLabel, Input, Radio,RadioGroup, useToast  } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
  } from '@chakra-ui/react'

function CreateUserModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Button onClick={onOpen}>
        <BiAddToQueue size={20} />
    </Button>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>My New BFF😍</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex alignItems={'center'} gap={4}>
                <FormControl>
                    <FormLabel>Full Name</FormLabel>
                    <Input placeholder='John Doe' />
                </FormControl>

                <FormControl>
                    <FormLabel>Role</FormLabel>
                    <Input placeholder='Software Engineer' />
                </FormControl>
            </Flex>

                <FormControl mt={4}>
                    <FormLabel>Description</FormLabel>
                    <Textarea
                    resize={'none'}
                    overflow={'hidden'}
                    palcceholder='He is a software engineer wo loves to code and build things.'></Textarea>
                </FormControl>

                <RadioGroup mt={4}>
                    <Flex gap={5}>
                        <Radio value='male'>Male</Radio>
                        <Radio value='female'>Female</Radio>
                    </Flex>
                </RadioGroup>
            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} >
              Add
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreateUserModal