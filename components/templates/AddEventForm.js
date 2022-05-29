
import { useForm } from "react-hook-form";
import { 
    Input, 
    FormControl, 
    FormLabel, 
    FormErrorMessage,
    Textarea,
    Button
} from '@chakra-ui/react'
import DatePicker from "react-datepicker";
import { useState } from "react";
import { supabase } from "../../lib/supabase/supabaseClient";

export default function AddEventForm () {
    const [date, setDate] = useState(new Date());
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) =>{
        console.log(data)
        const { data, error } = await supabase
            .from('Events')
            .insert([
                {
                    event_name: data.name,
                    venue: data.venue,
                    description: data.description
                },
            ])
    }
    function handleDateChange () {
        console.log('datechange')
    }
  
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.name}>
                    <FormLabel htmlFor='name'>Enter Event name</FormLabel>
                    <Input 
                        id="name" 
                        placeholder='Coolest Event Ever' 
                        {...register('name', {
                            required: 'Required Field',
                            minLength: { value: 4, message: 'Name should be longer than 4 characters'}
                        })}
                    />
                    <FormErrorMessage>
                        {errors.name && errors.name.message}
                    </FormErrorMessage>
                </FormControl>
                {/* <FormControl isInvalid={errors.name}>
                    <FormLabel htmlFor='Venue'>Enter Venue Name</FormLabel>
                    <Input 
                        id="Venue" 
                        placeholder='Coolest Venue Ever' 
                        {...register('venue', {
                            required: 'Required Field',
                            minLength: { value: 4, message: 'Name should be longer than 4 characters'}
                        })}
                    />
                    <FormErrorMessage>
                        {errors.name && errors.name.message}
                    </FormErrorMessage>
                </FormControl> */}
                <FormControl isInvalid={errors.name}>
                    <FormLabel htmlFor='Venue'>Enter Venue Name</FormLabel>
                    <Input 
                        id="venue" 
                        placeholder='Coolest Venue Ever' 
                        {...register('venue', {
                            required: 'Required Field',
                            minLength: { value: 4, message: 'Name should be longer than 4 characters'}
                        })}
                    />
                    <FormErrorMessage>
                        {errors.name && errors.name.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.name}>
                    <FormLabel htmlFor='description'>Enter Venue Name</FormLabel>
                    <Textarea 
                        id="description" 
                        placeholder='Coolest Venue Ever' 
                        {...register('description', {
                            required: 'Required Field',
                            minLength: { value: 4, message: 'Name should be longer than 4 characters'}
                        })}
                    />
                    <FormErrorMessage>
                        {errors.name && errors.name.message}
                    </FormErrorMessage>
                </FormControl>
                {/* <DatePicker 
                    selected={ date } 
                    onChange={ handleDateChange } 
                    showTimeSelect
                    dateFormat="Pp"
                /> */}
                <Button type='submit' >Submit Event</Button >
            </form>
        </div>
    )
}
