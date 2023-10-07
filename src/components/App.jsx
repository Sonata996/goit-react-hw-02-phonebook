import { Component } from "react"
import { nanoid } from 'nanoid'
import { FormPhonebookName } from "./InputName/InputName";
import { ContactsList } from "./Contacts/Contacts";

export class App extends Component{
state ={
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  name: '',
  number: '',
  filter: ''
}

addName = ({name,number}) =>{
  this.setState(prevState =>({
    contacts: [...prevState.contacts, {name,number, id: nanoid()}],
    name: name,
    number:number
  }))
};

addFilter = (value) =>{
this.setState({
  filter:value
})
console.log(this.filter)
console.log(value);
// this.searchContacts()
}

searchContacts = () => {
  this.contacts.filter(elem => {
    const filters = this.filter.toLowerCase()
    const searchContact = elem.name.toLowerCase().includes(filters)
   return console.log(searchContact)
  })
}

  render(){
  return (
    <div>
      <h1>Phonebook</h1>
      <div>
      <FormPhonebookName 
      onCangeName={this.addName}
      />

      <ContactsList 
      title='Contacts'
      tilteInput="Find contacts by name"
      contact={this.state.contacts}
      name={this.state.name}
      number={this.state.number}
      onAddFilter={this.addFilter}
      />
      </div>
    </div>
  );
  }
};
