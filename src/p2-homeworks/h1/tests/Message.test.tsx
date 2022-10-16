import React from 'react'
import {render} from '@testing-library/react'
import Message from '../Message'
import {messageData} from "../HW1";

test('find text "test message name"', () => {
    const {getByText} = render((
        <Message data={messageData}/>
    ))
    const linkElement = getByText(/some text/i)
    expect(linkElement).toBeInTheDocument()
})

// test('find text "test message"', () => {
//     const {getByText} = render((
//         <Message
//             avatar=""
//             name=""
//             message="test message"
//             time=""
//         />
//     ))
//     const linkElement = getByText(/test message/i)
//     expect(linkElement).toBeInTheDocument()
// })
// test('find text "test message time"', () => {
//     const {getByText} = render((
//         <Message
//             avatar=""
//             name=""
//             message=""
//             time="test message time"
//         />
//     ))
//     const linkElement = getByText(/test message time/i)
//     expect(linkElement).toBeInTheDocument()
// })
