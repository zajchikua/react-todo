import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

function AddTodoForm() {

  return (

    <form>
        <label htmlFor="todoTitle">Title</label>
        <input id="todoTitle" type="text" />
        <button text="Add"/>
    </form>
  ) ;
}

export default AddTodoForm;