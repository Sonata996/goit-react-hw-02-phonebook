import { Component } from "react"
import { nanoid } from 'nanoid'
import { FormPhonebookName } from "./InputName/InputName";
import { ContactsList } from "./Contacts/Contacts";
import { InputFilter } from "./InputFilter/InputFilter";

export class App extends Component{
state ={
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: ''
}

addName = ({name,number}) =>{
 const similarityContact = this.state.contacts.filter(elem =>  elem.name.toLowerCase().trim() === name.toLowerCase().trim())

  if (similarityContact.length === 0) {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, {name,number, id: nanoid()}]
    })
    ) 
  } else{
    alert(`${name} is already in contacts`) 

  }
};

addFilter = (value) =>{
this.setState({
  filter:value
})
// console.log(this.searchContacts());
}

searchContacts = () => {
 return this.state.contacts.filter(elem => {
    const filters = this.state.filter.toLowerCase()
    const searchContact = elem.name.toLowerCase().includes(filters)

   if (!searchContact) {
    return searchContact
  } 
  return this.state.contacts
}
)
}


deletContact =(idContact) =>{
  this.state.contacts.filter(elem => {
   return this.setState(prevState =>({
      contacts: prevState.contacts.filter(elem => elem.id !== idContact)
    }))
  })
}



  render(){
    const visibleItems = this.searchContacts();
  return (
    <div>
      <h1>Phonebook</h1>

      <FormPhonebookName 
      onCangeName={this.addName}
      />

      <h2>Contacts</h2>

      <InputFilter 
      tilteInput="Find contacts by name"
      onAddFilter={this.addFilter}
      /> 

      <ContactsList 
      onClickDelet={this.deletContact}
      contact={visibleItems}
      
      />
    </div>
  );
  }
};
