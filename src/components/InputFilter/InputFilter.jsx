

export const InputFilter = ({tilteInput,onAddFilter}) =>{
    return (
        <div>
                <label htmlFor="filters">{tilteInput}</label>
                <input 
                    name='filters'
                    type="text" 
                    onChange={(value)=> onAddFilter(value.target.value)}
                    
                    />
            </div>
    )
}