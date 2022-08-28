import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material/';

import face from "../image/face.png"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';

// mui의 css 우선순위가 높기때문에 important를 설정 - 실무하다 보면 종종 발생 우선순위 문제
const FormHelperTexts = styled(FormHelperText)`
  width: 100%;
  padding-left: 16px;
  font-weight: 700 !important;
  color: #d32f2f !important;
`;

const Boxs = styled(Box)`
  position: absolute;
  top: 250px;
  padding-bottom: 40px !important;
  width: 300px;

`;





const Login = () => {
  const theme = createTheme();
  const [checked, setChecked] = useState(false);
  const [passwordState, setPasswordState] = useState('');
  const [nameError, setNameError] = useState('');
  const [registerError, setRegisterError] = useState('');
  const history = useNavigate();

  const handleAgree = (event) => {
    setChecked(event.target.checked);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const LoginData = {
      name: data.get('name'),
      password: data.get('password')
    };
    const { name, password } = LoginData;

    await axios.post('login', {
      nickname: LoginData.name,
      password: LoginData.password

    }).then((res) => 
      {
        if(res.status === 200){
          alert('로그인 성공')
          sessionStorage.setItem('token', res.headers.authorization)
          sessionStorage.setItem('user_id', LoginData.name)

          history('/main')
        } else {
          alert('잘못된 로그인')
        }
      }
    
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ mt: 10 , fontFamily:"content", fontSize: "28px"}}>
          <img src={face} style={{width:"60px", height: "60px", position: "absolute", top: "110px", left: "170px"}} /><br/>
            로그인
          </Typography>
          <Boxs component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <FormControl component="fieldset" variant="standard">

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    name="name"
                    label="아이디"
                    error={nameError !== '' || false}
                  />
                </Grid>
                <FormHelperTexts>{nameError}</FormHelperTexts>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type="password"
                    id="password"
                    name="password"
                    label="비밀번호"
                    error={passwordState !== '' || false}
                  />
                </Grid>
                <FormHelperTexts>{passwordState}</FormHelperTexts>

              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 , bgcolor: "#37AC82", fontFamily: "content", fontSize: "24px"}}
                size="large"
              >
                로그인
              </Button>

            </FormControl>
            <FormHelperTexts>{registerError}</FormHelperTexts>
          </Boxs>

        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;