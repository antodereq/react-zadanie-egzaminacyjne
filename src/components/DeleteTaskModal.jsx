export default function DeleteTaskModal({
    task,
    onConfirm,
    onCancel
}) {
    if (!task) return null;

    return (
        <div
            className="modal fade show d-block"
            tabIndex="-1"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content border-0 shadow">
                    <div className="modal-header">
                        <h5 className="modal-title">
                            Usuń zadanie
                        </h5>

                        <button
                            type="button"
                            className="btn-close"
                            onClick={onCancel}
                        ></button>
                    </div>

                    <div className="modal-body">
                        <p className="mb-1">
                            Czy na pewno chcesz usunąć to zadanie?
                        </p>

                        <strong>{task.title}</strong>
                    </div>

                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={onCancel}
                        >
                            Anuluj
                        </button>

                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => onConfirm(task.id)}
                        >
                            Usuń
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}