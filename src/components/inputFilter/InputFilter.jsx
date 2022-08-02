import { Form } from 'react-bootstrap'


export const InputFilter = ({ onInputChange, value }) => {
  return (
    <Form className='w-25'>
      <Form.Group>
        <Form.Control
          placeholder='empty slots'
          onChange={onInputChange}
          name='emptySlots'
          value={value}
        />
      </Form.Group>
    </Form>
  )
}
