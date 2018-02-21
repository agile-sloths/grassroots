import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


const LoginForm = () =>  (
    <div className = 'login-form'>
     <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
      <Grid
        textAlign='center'
        style = {{ height: '100%' }}
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header size='huge' style={{ fontSize: 60 }}>GRASSROOTS</Header>
          <Header as='h2' color='green' textAlign='center'>
            {' '}Log-in to your account
          </Header>
  
          <Form size='large'>
            <Segment stacked>
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Username'
              />
              <Form.Input 
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />
                
              <Button color='green' fluid size='large'>Login</Button>
            </Segment>
          </Form>
          <Message>
            New to Grassroots?  <a href='#'>Sign up</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  )

  export default LoginForm