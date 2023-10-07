import { InputFilter } from "components/InputFilter/InputFilter"


export const ContactsList = ({contact,title,tilteInput,onAddFilter}) =>{
    return(
        <div>
            <h2>{title}</h2>
            
            <InputFilter 
            title={tilteInput}
            onAddFilter={onAddFilter}
            />

            <ul> 
               {contact.map(elem => <li key={elem.id}>
                <p>
                    {elem.name}: {elem.number}
                </p>
               </li>
                )}
            </ul>
        </div>
    )
}