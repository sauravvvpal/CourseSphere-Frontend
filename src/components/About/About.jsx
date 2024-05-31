import React from 'react';
import {
  Avatar,
  Container,
  Heading,
  Stack,
  VStack,
  Text,
  Button,
  HStack,
  Box
} from '@chakra-ui/react';
import mp from "../../assets/images/sp.jpeg"
import { Link } from 'react-router-dom';
import introVideo from '../../assets/videos/Cutout Cartoon.mp4';
import { RiSecurePaymentFill } from 'react-icons/ri';
import termsAndCondition from '../../assets/docs/termsAndCondition'

export const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar src={mp} boxSize={['40', '48']} />
      <Text children="Founder" opacity={0.7} />
    </VStack>
    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="Saurav Pal" size={['md', 'xl']} />
      <Text
        textAlign={['center', 'left']}
        children={`Welcome to our innovative subscription-based learning platform, where education meets convenience. Founded by Saurav Pal, a passionate and skilled Full Stack developer, our mission is to make quality education accessible to everyone and everywhere.`}
      />
    </VStack>
  </Stack>
);
const VideoPlayer = () => (
    <div className='container3'>
  <video
    autoPlay
    loop
    muted
    src={introVideo}
    controlsList="nodownload noremoteplayback nofullscreen"
    controls
    disablePictureInPicture
    disRemotePlayBack
  />
  </div>
);
const TandC=({termsAndCondition})=>(
    <Box>
        <Heading children="Term & Condition"  textAlign={["center","left"]} size={'md'} my="4"/>
    <Box h="sm" p="4" overflowY={"scroll"}>
        <Text letterSpacing={"widest"} fontFamily={"heading"} textAlign={["center","left"]}>{termsAndCondition}</Text>
        <Heading my ='4'  size="xs" children="Refund Only applicable for cancellation within 7 days."/>
    </Box>
    </Box>

)


const About = () => {
  return (
    <div>
      <Container maxW={'container.lg'} padding={'16'} boxShadow={'lg'}>
        <Heading children="About Us" textAlign={['center', 'left']} />
        <Founder />
        <Stack direction={['column', 'row']} alignItems="center" m="8">
          <Text fontFamily={'cursive'} m="8" textAlign={['center', 'left']}>
            We are video streaming platform with some premium courses availble
            only for premium users.
          </Text>
          <Link to="/subscribe">
            <Button variant = {'ghost'} colorScheme="yellow">Check Out Plan </Button>
          </Link>
        </Stack>
        <VideoPlayer />

        <TandC termsAndCondition={termsAndCondition}/>

        <HStack my={'4'} p={'4'}>
          <RiSecurePaymentFill />
          <Heading
            size={'xs'}
            fontFamily="sans-serif"
            textTransform="uppercase"
            children={'Payment is secured by Razorpay'}
          />
        </HStack>
      </Container>
    </div>
  );
};

export default About;
