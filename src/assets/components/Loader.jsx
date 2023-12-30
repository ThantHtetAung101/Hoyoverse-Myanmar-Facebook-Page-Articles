import React from 'react'
import { CircleLoader } from 'react-spinners'

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-[550px]">
            <CircleLoader color="#b90aff" />
        </div>
    )
}

export default Loader