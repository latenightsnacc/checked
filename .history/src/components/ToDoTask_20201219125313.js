import React, { Component } from "react"

class ToDoTask extends Component {

    render() {
        return (
            <>
                <div className="max-w-sm blur shadow-2xl  mx-auto mt-20 h-24 flex items-center pl-5">
                    <input type="checkbox"/>
                    <p> Hello World</p>
                </div>
            </>
        )
    }
}

export default ToDoTask