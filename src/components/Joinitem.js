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
  top: 200px;
  padding-bottom: 40px !important;
  width: 300px;
`;

const Join = () => {
  const theme = createTheme();
  const [checked, setChecked] = useState(false);
  const [userError, setUserError] = useState('');
  const [passwordState, setPasswordState] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');
  const [registerError, setRegisterError] = useState('');

  const history = useNavigate();

  const handleAgree = (event) => {
    setChecked(event.target.checked);
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const joinData = {
      user: data.get('user'),
      name: data.get('name'),
      password: data.get('password'),
      rePassword: data.get('rePassword'),
    };
    const { user, name, password, rePassword } = joinData;

    // 비밀번호 유효성 체크
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegex.test(password))
      setPasswordState('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!');
    else setPasswordState('');

    // 비밀번호 같은지 체크
    if (password !== rePassword) setPasswordError('비밀번호가 일치하지 않습니다.');
    else setPasswordError('');

    // 이름 유효성 검사
    const nameRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
    if (!nameRegex.test(name) || name.length < 1) setNameError('올바른 아이디를 입력해주세요.');
    else setNameError('');

    const userRegex = /^[가-힣a-zA-Z]+$/;
    if (!userRegex.test(user) || user.length < 1) setUserError('올바른 이름을 입력해주세요.');
    else setUserError('');


    // 회원가입 동의 체크
    if (!checked) alert('회원가입 약관에 동의해주세요.');

    if (

      passwordRegex.test(password) &&
      password === rePassword &&
      nameRegex.test(name) &&
      checked
    ) {
      onhandlePost(joinData);
    }
  };

  const onhandlePost = async (data) => {
    const { user, name, password } = data;
    console.log(data)
    await axios.post('join', {
      nickname: data.name,
      password: data.password,
      username: data.user,
    }).then((res) => {
      if (res.status === 200) {
        alert('회원가입 성공')
        sessionStorage.setItem('token', res.headers.authorization)
        history('/main')
      }
    }
    );
  };

  return (
    <div className=''>
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
            <Typography component="h1" variant="h5" sx={{mt: 10}}>
              회원가입
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
                      id="user"
                      name="user"
                      label="이름"
                      error={userError !== '' || false}
                    />
                  </Grid>
                  <FormHelperTexts>{userError}</FormHelperTexts>
                  
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      type="password"
                      id="password"
                      name="password"
                      label="비밀번호 (숫자+영문자+특수문자 8자리 이상)"
                      error={passwordState !== '' || false}
                    />
                  </Grid>
                  <FormHelperTexts>{passwordState}</FormHelperTexts>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      type="password"
                      id="rePassword"
                      name="rePassword"
                      label="비밀번호 재입력"
                      error={passwordError !== '' || false}
                    />
                  </Grid>
                  <FormHelperTexts>{passwordError}</FormHelperTexts>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox onChange={handleAgree} color="primary" />}
                      label="회원가입 약관에 동의합니다."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  size="large"
                >
                  회원가입
                </Button>
              </FormControl>
              <FormHelperTexts>{registerError}</FormHelperTexts>
            </Boxs>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Join;