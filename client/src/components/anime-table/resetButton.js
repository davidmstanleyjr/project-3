import React from "react"
//supposed to reset the database
const resetButton = ({ onClick }) => {
    return {
        <i
        className="reset-button"
        onClick={onClick}
        title="Reset Database"
        >

        <span>Reset Database</span>
        </i>
    }
}

export default resetButton