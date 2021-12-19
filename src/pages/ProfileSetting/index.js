import React from 'react'
import { Container, Heading, Stack, Text } from '@chakra-ui/react'
import ChakraNavbar from "../../components/ChakraNavbar";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../services/Url';
import ChakraFooter from '../../components/ChakraFooter';

const ProfileSetting = () => {
    const { userData } = useSelector(state => state);
    const Navigate = useNavigate();

    React.useEffect(() => {
        document.title = "Hanskering | Pengaturan Akun"
    }, []);

    return (
        <div style={{minHeight: 'calc(100vh + 307px)'}}>
            <ChakraNavbar />
            <Container minH='100vh' paddingTop={'84px'} paddingBottom={'50px'}>
                <Heading>Halaman Profile</Heading>
                <Text marginTop={'30px'}>Alamat</Text>
                <Stack 
                    marginTop={'10px'}
                    spacing="8" 
                    borderWidth="1px" 
                    rounded="lg" 
                    padding={'10px'} 
                    width="full"
                >
                    { userData && userData.alamat ? <Text>{JSON.parse(userData.alamat).full_address}, {JSON.parse(userData.alamat).city.city_name}, {JSON.parse(userData.alamat).province.province}</Text> : <Text cursor='pointer' onClick={() => Navigate(ROUTE.PROFILE_ADDRESS)}>Tambahkan Alamat</Text> }
                </Stack>
                { userData && userData.alamat && <Text textAlign='right' cursor='pointer' onClick={() => Navigate(ROUTE.PROFILE_ADDRESS)}>Rubah Alamat</Text>}

                <Text marginTop={'30px'}>No. Telepon</Text>
                <Stack 
                    marginTop={'10px'}
                    spacing="8" 
                    borderWidth="1px" 
                    rounded="lg" 
                    padding={'10px'} 
                    width="full"
                >
                    { userData && userData.telepon ? <Text>{userData.telepon}</Text> : <Text cursor='pointer' onClick={() => Navigate(ROUTE.PROFILE_PHONE)}>Tambahkan No. Telepon</Text> }
                </Stack>
                { userData && userData.telepon && <Text textAlign='right' cursor='pointer' onClick={() => Navigate(ROUTE.PROFILE_PHONE)}>Rubah No. Telepon</Text>}
            </Container>
            <div style={{width: '100%'}}>
                <ChakraFooter />
            </div>
        </div>
    )
}

export default ProfileSetting
