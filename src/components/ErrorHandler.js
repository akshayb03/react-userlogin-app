import './ErrorHandler.css'

const ErrorHandler = (props) => {
    
    let content = '';
    if(!props.name){
        content = 'Name field is empty!!'
    } 
    else if(!props.age){
        content = 'Age field is empty!!'
    }
    return (
        <div>
            <p>{content}</p>
        </div>
    )
}
export default ErrorHandler;