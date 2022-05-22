import {
    Input,
    FormLabel,
    FormControl,
    FormErrorMessage,
    Button
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

export default function HookForm() {
    console.log('login')
    const {
      handleSubmit,
      register,
      formState: { errors, isSubmitting },
    } = useForm()

    const onSubmit = async (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.name}>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input
                        id='email'
                        placeholder='email'
                        {...register('email', {
                            required: 'This is a required Field',
                            minLength: { value: 4, message: 'Minimum length should be 4' }
                        })}
                    />
                    <FormErrorMessage>
                        {errors.email && errors.email.message}
                    </FormErrorMessage>
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <Input
                        type='password'
                        placeholder='Password'
                        {...register("password", {
                            required: "Please enter Password",
                            minLength: { value: 8, message: "Too short" }
                        })}
                    />
                    <FormErrorMessage>
                        {errors.password && errors.password.message}
                    </FormErrorMessage>
                </FormControl>
                <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
                    Submit
                </Button>

            </form>
        </div>

    )

}