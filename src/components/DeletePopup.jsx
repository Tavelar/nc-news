

const DeletePopup = (prop) => {
return (prop.trigger) ? (
    <div className="popup">
        <div className="inner-popup">
            <h2 className="popup-message" >Comment Deleted!</h2>
            <h4 className="popup-message">my css sucks</h4>
            <button onClick={() => prop.setTrigger(false)} className="popup-button">close</button>
        </div>
    </div>
) : '';
}

export default DeletePopup