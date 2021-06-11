import React, { Component } from "react"
import Button from "../../Component/Button/Button"
import ListItems from '../../Component/ListItems/ListItems'
import { data } from '../../data'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import './style.css'
// import date from 

class HomeScreen extends Component {
    state = {
        value: "" ,
        list: [],
    };

   async componentDidMount() {  // function for one time after the first render   for data fetching ( if rerender happened it will be )

            try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/todos"
            );
                console.log(response);
                this.setState({
                    list: response.data.splice(0,30),
                });
                } catch (e) {
                    console.log(e);
                }
        }

        // componentDidMount() { 
        //     axios.get(
        //         "https://jsonplaceholder.typicode.com/todos"
        //     ).then(response)
        //         console.log(response);
        //         this.setstate({
        //             list: response.data.splice(0,30),
        //         });
        //         } catch (e) {
        //             console.log(e);
        //         }
        // }

        

    // componentDidMount() {  // anthor way to fetch data
    //     const fetchData = async () => {
    //         try {
    //         const response = await axios.get(
    //             "https://jsonplaceholder.typicode.com/todos"
    //         );
    //             console.log(response);
    //             this.setState({
    //                 list: response.data,
    //             });
    //             } catch (e) {
    //                 console.log(e);
    //             }
    //     };
    //     fetchData();
    // }

    render() {
        return (
            <div className="inner-container">
                <h1 className="page-title">To do List </h1>
                <section className="input-section">


                    <div className="input-box">
                    <input
                        // disabled={true}
                        className="add-task-input"
                        type="text"
                        placeholder="Enter a new task ... "

                        onChange={(event) => {
                            this.setState({ value: event.target.value })
                        }}

                        value={this.state.value}   // controlled input 

                    />
                    {this.state.error ? <span> {this.state.error} </span> : null }
                    </div>
                    <Button
                        text="Add"
                        handleClick={() => {
                            if (this.state.value){
                                const newArr = [
                         {                           
                            title: this.state.value,
                            id: uuidv4()
       
                                },
                                ...this.state.list, // to add the new value in the top
                            ]; // not write data here cus the data will accept a one new value
                            this.setState({
                                list:newArr,
                                value:"",
                                error: ""
                            });
                            
                        } else {
                            this.setState({
                                error: "Please submit a task",
                            });
                        }
                    }}
                    />
                </section>

                <section className="items-section">
                    {this.state.list.length ? (
                    this.state.list.map((item) => (
                        <ListItems
                            task={item.title}
                            key={item.id}
                            handleDelete={() => { //id for uniqe delete
                                const fliteredItems = this.state.list.filter(
                                    (fliteredItem) => fliteredItem.id != item.id
                                ); 
                                this.setState({
                                    list:fliteredItems
                                });   
                            }}
                        />
                        ))
                    ) : (
                        <span>Loading ....... </span>
                    )}
                    </section>
            </div>
        )
    }
}
export default HomeScreen;