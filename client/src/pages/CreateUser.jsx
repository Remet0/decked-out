import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import { useForm } from 'hooks';
import { Button, Card, CardBody, CardHeader, Form, FormInput, FormGroupWithIcon, FormLabel } from 'elements';

const CreateUser = ({ history, setUser }) => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const [values, handleChange] = useForm({ username: '', password: '', secret: '' });

    useEffect(() => {
        const createUser = async () => {
            const { username, password, secret } = values;

            const res = await fetch('/api/createuser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({ username, password, secret }),
            });

            if (res.status === 200) {
                setUser({ username });

                return history.push('/account');
            }
        };

        if (formIsSubmitted) {
            createUser();
        }
    }, [formIsSubmitted]);

    return (
        <Card>
            <CardHeader as='h2'>Create Account</CardHeader>
            <CardBody>
                <Form
                    onSubmit={e => {
                        e.preventDefault();

                        setFormIsSubmitted(true);
                    }}
                >
                    <FormLabel htmlFor='username'>Username</FormLabel>
                    <FormInput
                        name='username'
                        type='text'
                        placeholder='What can we call you?'
                        required
                        value={values.username}
                        onChange={handleChange}
                    />

                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <FormInput
                        name='password'
                        type='password'
                        placeholder="Don't share this with anyone!"
                        required
                        value={values.password}
                        onChange={handleChange}
                    />

                    <FormLabel htmlFor='secret'>
                        What is your favorite Magic Card?
                        <br />
                        <small>This will be used to reset your password if you forget it.</small>
                    </FormLabel>

                    <FormInput
                        name='secret'
                        type='text'
                        placeholder="It's probably Jace isn't it..."
                        required
                        value={values.secret}
                        onChange={handleChange}
                    />

                    <Button type='submit'>Create User</Button>
                </Form>
            </CardBody>
        </Card>
    );
};

export default withRouter(CreateUser);
