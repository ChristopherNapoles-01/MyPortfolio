
const Modal = ({status}) => {
    return(
        <div id="myModal" className="modal">
            <div className="modal-content">
                {/* <span class="close">&times;</span> */}
                <p>{status}</p>
            </div>

        </div>
    )
}

export default Modal