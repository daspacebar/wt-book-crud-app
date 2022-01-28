
const BookFormField = (props) => {
    return (
        <form>
        <div>
            <label>{props.label}</label>
            <input
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
                name={props.name}
                className={props.className}
            />
        </div>
        </form>
    );
};

export default BookFormField;
