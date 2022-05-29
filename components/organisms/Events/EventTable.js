import SimpleTable from '../../molecules/Table/SimpleTable'
import { useEffect, useState } from 'react'
import { supabase } from '../../../lib/supabase/supabaseClient';


export default function Events(){
    const [events, setEvents] = useState([])
    const [tableHeading, setTableHeading] = useState([])
    const caption = "Table Caption"

    async function fetchEvents() {
        const user = supabase.auth.user()
        const { data } = await supabase
            .from('Events')
            .select('*')
            .eq('user', user)
        setEvents(data)
    }
    function tableHeadingSetter(){
        setTableHeading(['Event Name', 'Venue', 'Date', 'See Details'])
    }
    useEffect(()=>{
        // await eventsData
        tableHeadingSetter()
        fetchEvents()
        
    },[])
    // useEffect(()=>{
    //     console.log('Event Change:' + events)
    // },[events])
    return (
        <div>
            Events Table
            <SimpleTable 
                data={ events }
                caption={ caption }
                headings={ tableHeading }
            />
        </div>
    )
}
