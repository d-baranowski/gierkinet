const logInAction = {
  type: 'auth/loginSuccess',
  payload: {
    accessToken: 'eyJraWQiOiJRWkkxS05zNHEzTmx6S2pIRXVcLzh1MjZwR3hVOWhcLzFuMVU0a3gyODIzdTg9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIxZGI3ZWU4My05NGE5LTRiYzQtYTdkNi1jODZiMTUxOTA2OGMiLCJjb2duaXRvOmdyb3VwcyI6WyJldS13ZXN0LTFfMTJIYjRobUFIX0dvb2dsZSJdLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNTg5NzQ0MjA3LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0xLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMV8xMkhiNGhtQUgiLCJleHAiOjE1ODk3NDc4MDcsImlhdCI6MTU4OTc0NDIwNywidmVyc2lvbiI6MiwianRpIjoiM2Q1MThlNWEtMmQwMC00ZTBlLWFmZDUtNTZhZWI3MGI2ODEzIiwiY2xpZW50X2lkIjoiNTk0OTVocDQxNXZtYzZ0dGptN2MxNzYxcm4iLCJ1c2VybmFtZSI6Ikdvb2dsZV8xMDkzNTQ0ODQ2Nzc2NjMzMDgxNzgifQ.CMY5lm6oAlzwG7094HAM5Yz6xqniTydsqpfPo3mW5JYdRpbXQFnCe3MsVa4ia5QnFXVZBLWQggzJ-qPlAxJGYqTuXDJGVWeJ1RRCgP1b3TtBlgC8ge5OTm95d1DpjUzFYEjEQhcrsI6XcCX-Srn9gtdI_jXF_8Xarw-L2kTopSunorAYLJc2THjpQFXLptiuYHo9aZTLxd-RYkGqPY3qOFJYP2bhTwA6-HvXLcwnLVJ8LsAyxP7xQLAGeIoVl5NDV_WDhDOaNzVLbrtn5I40sFUxR-z-qjrPlcNNOcgcoks97Xpx6f31ycNO1JoSMeQVBkdmRBxqE6hLahVb5AGCXw',
    idToken: 'eyJraWQiOiJVcW10eTY5cWdIUXN3NWZXU2FMWVRKQlA4XC81TitRcFQ1VHk5dXRmM0Z2VT0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiUzF2ZndPUmNOMlRDRFNsVlV6UV8tQSIsInN1YiI6IjFkYjdlZTgzLTk0YTktNGJjNC1hN2Q2LWM4NmIxNTE5MDY4YyIsImNvZ25pdG86Z3JvdXBzIjpbImV1LXdlc3QtMV8xMkhiNGhtQUhfR29vZ2xlIl0sImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xXzEySGI0aG1BSCIsImNvZ25pdG86dXNlcm5hbWUiOiJHb29nbGVfMTA5MzU0NDg0Njc3NjYzMzA4MTc4Iiwibm9uY2UiOiJGXzByTjR2Z1FoUjFZLTdLUVViaDVoMlZBcmhmUTV0WkxHWnFjaEhqVHd1WFdYRlgtOTlxVmROTXJzdXJtRmY4d0x3UVVfYXdhTDRFT2ZESnJoZ1U0ejJSUFAtb1ZYVVotTV9BeGFKU1o2NlRDU0xtVjJqaVA1N0NTS2NqaThlZlEyenpLQjVMcXBkTGxMWlI4bnByTGx2Tm44MkNEaTNPaTZ0enF3TzNWWTQiLCJwaWN0dXJlIjoiaHR0cHM6XC9cL2xoMy5nb29nbGV1c2VyY29udGVudC5jb21cL2EtXC9BT2gxNEdqRVVab1Z1cDN5V3BGQnNITFRiM0dQblFiRE5BaHdUbXNMSGkzOD1zOTYtYyIsImF1ZCI6IjU5NDk1aHA0MTV2bWM2dHRqbTdjMTc2MXJuIiwiaWRlbnRpdGllcyI6W3sidXNlcklkIjoiMTA5MzU0NDg0Njc3NjYzMzA4MTc4IiwicHJvdmlkZXJOYW1lIjoiR29vZ2xlIiwicHJvdmlkZXJUeXBlIjoiR29vZ2xlIiwiaXNzdWVyIjpudWxsLCJwcmltYXJ5IjoidHJ1ZSIsImRhdGVDcmVhdGVkIjoiMTU4ODk0ODYyOTE4OSJ9XSwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE1ODk3NDQyMDcsIm5hbWUiOiJEYW5pZWwgQmFyYW5vd3NraSIsImV4cCI6MTU4OTc0NzgwNywiaWF0IjoxNTg5NzQ0MjA3LCJlbWFpbCI6ImRhbmllbC5tLmJhcmFub3dza2lAZ21haWwuY29tIn0.HX11e2MumjmeYGRh2n6hL94TnNxCc0SJUpx6KkzBZmUCGKbZNk0IKMMvGkc_flNLKaMI2i2rXxce1uYBTf8Dy-S9b0xaeG5xGz0BGz0e9PyP2Q420zugQtgyIgMclq_yQSJBHytc_VLUjLRNCbpccWSZPjUZoU5uxhjNjxkQB03WoVsScX-VLhJ2eOIVIzJRXiBI9J3GBpmC8gV-nrfZo_nt8arBv77_dkFB3DXfEDW7-v0ChpI7Y1sQsa528FCyjDP-tWE6JRw8pI-0tndScussxGZOnZPST3aWoaRafMuXVsALcCroFnLpqqeUDogFZhd0h7_jaYmcmsu-GIipqw',
    state: 'VFGvKDy3tD6ShiGSbhQCv',
    tokenType: 'Bearer',
    expiresIn: 3600
  }
};

window.DEV_ONLY_STORE.dispatch(logInAction);