import React, { Component } from "react"

class ToDoTask extends Component {

    render() {
        return (
            <>
                <div className="max-w-sm blur shadow-2xl  mx-auto mt-20 h-auto flex items-center pl-5 p-10">
                    <input type="checkbox"/>
                    <p>&nbsp; Hello World</p>
                </div>
            </>
        )
    }
}

export default ToDoTask