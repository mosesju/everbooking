import EventTable from '../organisms/Events/EventTable';
import EventTableTest from '../organisms/Events/EventTable'
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase/supabaseClient';
import { Button } from '@chakra-ui/react';
import Link from 'next/link';


export default function Event ({ user }) {
    
    return (
        <div>
            Event Template
            <Link href="/events/add">
            <Button>Add an Event +</Button>
            </Link>
            
            <EventTable />
        </div>
    )
}
