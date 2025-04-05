import { CardHeader, Card, Flex, Avatar, IconButton,Box, Heading, Text, CardBody, useToast } from "@chakra-ui/react";
import React from "react";
import { BiTrash } from "react-icons/bi";
import EditModal from "./EditModal";
import { BASE_URL } from "../App";

function UserCard({ user, setUsers }) {
  const toast = useToast()

  const handleDeleteUser = async () => {
    try{
      const res = await fetch(BASE_URL + 'friends/'+user.id, {
        method: 'DELETE',
      })
      const data = await res.json()
      if(!res.ok){
        throw new Error(data.error)
      }
      setUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id))
      toast({
        status: 'success',
        title:'Yayy!',
        description: 'Your friend has been deleted successfully.',
        duration: 2000,
        position: 'top-center',
      })
    }catch(error){
      console.log(error)
      toast({
        status: 'error',
        title:'An Error occured!',
        description: error.message,
        duration: 4000,
        position: 'top-center',
        isClosable:true
      })
    }
  }

  return (
    <Card>
      <CardHeader>
        <Flex>
          <Flex flex={"1"} gap={"4"} alignItems={"center"}>
            <Avatar src={user.imgUrl} />
            <Box>
              <Heading size="sm">{user.name}</Heading>
              <Text>{user.role}</Text>
            </Box>
          </Flex>
          <Flex>
            <EditModal 
            setUsers={setUsers}
            user={user} />
            <IconButton
              variant="ghost"
              colorScheme="red"
              size={"sm"}
              arai-label="See menu"
              icon={<BiTrash size={20} />}
              onClick={handleDeleteUser}
            />
          </Flex>
        </Flex>
      </CardHeader>

      <CardBody>
        <Text>
          {user.description}
        </Text>
      </CardBody>
    </Card>
  );
}

export default UserCard;
