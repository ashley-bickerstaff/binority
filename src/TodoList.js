import React, { Component } from "react";
import TodoItems from './TodoItems';
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        if (this.taskNameInput.value !== "") {
            var newItem = {
                text: this.taskNameInput.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                }
            });

            this.taskNameInput.value = "";
            console.log(this.state.items);
            e.preventDefault();
        }
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input
                            ref={(a) => this.taskNameInput = a}
                            type="text"
                            placeholder="enter task">

                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items} />
            </div>
        );
    }
}

export default TodoList;
