import { useContext, useState } from 'react';
import { Button, Flex, HStack, Image, Input, InvertTheme, Link } from '@stoplight/mosaic';
import { GlobalContext } from '../context';
import logo from '../assets/logo.png'

export const Navbar = () => {
  const { apiDescriptionUrl } = useContext(GlobalContext);

  return (
    <>
      <InvertTheme>
        <Flex h="2xl" shrink={0} px={5} alignItems="center" bg="canvas-pure">
          <HStack w="1/3" alignItems="center" spacing={4} pl={12}>
            <Link href={`${process.env.PUBLIC_URL}/?spec=${apiDescriptionUrl}`}>
              <Image src={logo} h={6} />
            </Link>
          </HStack>

          <Flex w="1/3" justifyContent="center">
            <SpecUrlInput />
          </Flex>
        </Flex>
      </InvertTheme>
    </>
  );
};

const SpecUrlInput = () => {
  const { apiDescriptionUrl, setDescriptionUrl } = useContext(GlobalContext);
  const [value, setValue] = useState(apiDescriptionUrl);

  return (
    <HStack spacing={2} flex={1}>
      <Input
        appearance="minimal"
        placeholder="URL to an OpenAPI document..."
        flex={1}
        bg="canvas-100"
        rounded
        value={value}
        onKeyUp={e => {
          if (e.key === 'Enter') {
            setDescriptionUrl(value);
          }
        }}
        onChange={e => {
          setValue(e.currentTarget.value);
        }}
      />

      <Button onClick={() => setDescriptionUrl(value)}>Load</Button>
    </HStack>
  );
};
