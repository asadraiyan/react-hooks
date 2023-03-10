import React from 'react'
import { FirstName } from './CompA'
const CompC = () => {
    return (
        <div>
            <FirstName.Consumer>
                {(fname) => {
                    return <h1>My Name is {fname}</h1>
                }}
            </FirstName.Consumer>
        </div>
    )
}

export default CompC
