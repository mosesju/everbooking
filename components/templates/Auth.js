import { useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import { 
    FormControl,
    FormLabel,
    Input,
    Button
} from '@chakra-ui/react'
export default function Auth({user}) {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  console.log({user})

  const handleLogin = async (email) => {
    if(!email) return
    try {
      setLoading(true)
      const { error } = await supabase.auth.signIn({ email })
      if (error) throw error
        alert('Please enter your email again')
    } catch (error) {
        alert(error.error_description || error.message)
    } finally {
        setLoading(false)
    }
  }

  return (
    <div>
    
        <FormControl>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Input
                id='email'
                placeholder='kingtut@gmail.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
             
        </FormControl>
        <Button mt={4} colorScheme='teal' 
            isLoading={loading} 
            type='submit' 
            onClick={(e) => {
                e.preventDefault()
                handleLogin(email)
            }}
            disabled={loading}
        >
            <span>{loading ? 'Loading' : 'Send magic link'}</span>
        </Button>

    </div>
    
  )
}