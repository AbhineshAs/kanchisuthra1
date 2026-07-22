import "./customModal.css";

export default function CustomModal({
    show,
    title,
    message,
    type = "success",
    confirmText = "OK",
    onConfirm,
}) {
    if (!show) return null;

    return (
        <div className="custom-modal-overlay">
            <div className="custom-modal-box">
                <div className={`custom-modal-icon ${type}`}>
                    {type === "success" && "✓"}
                    {type === "error" && "✕"}
                    {type === "warning" && "!"}
                    {type === "info" && "i"}
                </div>

                <h3>{title}</h3>

                <p>{message}</p>

                <button
                    className={`custom-modal-btn ${type}`}
                    onClick={onConfirm}
                >
                    {confirmText}
                </button>
            </div>
        </div>
    );
}