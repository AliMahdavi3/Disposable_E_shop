import React from 'react'
import Input from './Input';
import Radio from './Radio';
import Date from './Date';
import Password from './Password';
import TicketInput from './TicketInput';
import Textarea from './Textarea';
import File from './File';

const FormikControl = (props) => {
    switch (props.control) {
        case 'input':
            return <Input {...props} />
        case 'password':
            return <Password {...props} />
        case 'radio':
            return <Radio {...props} />
        case 'date':
            return <Date {...props} />
        case 'textarea':
            return <Textarea {...props} />
        case 'ticketInput':
            return <TicketInput {...props} />
        case 'file':
            return <File {...props} />
        default:
            return null;
    }
}

export default FormikControl
