import { useState } from 'react'

function useInput() {

    const [values, setValues] = useState({ name: '', gender: '', room: '', admin: false, date: new Date().getTime() })

    const handleChange = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }

    return [values, handleChange]
}

export default useInput