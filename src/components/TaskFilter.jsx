export default function TaskFilter({categories, setCategories, statuses, selectedStatus, setSelectedStatus}) 
{
    function handleCheckbox(index) {
        setCategories(prev => prev.map((cat, i) => i === index ? { ...cat, isChecked: !cat.isChecked } : cat));
    }

    return (
        <div className="card shadow-sm border-0 p-4 mb-4">
            <h3 className="mb-3">Filtry</h3>

            <div className="row">
                <div className="col-md-6">
                    <h5 className="mb-3">Kategorie</h5>

                    {categories.map((category, index) => (
                        <div className="form-check mb-2" key={category.name}>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id={`category-${index}`}
                                checked={category.isChecked}
                                onChange={() => handleCheckbox(index)}
                            />

                            <label
                                className="form-check-label"
                                htmlFor={`category-${index}`}
                            >
                                {category.name}
                            </label>
                        </div>
                    ))}
                </div>

                <div className="col-md-6">
                    <h5 className="mb-3">Status</h5>

                    {statuses.map(status => (
                        <div className="form-check mb-2" key={status}>
                            <input
                                className="form-check-input"
                                type="radio"
                                id={status}
                                name="statuses"
                                checked={selectedStatus === status}
                                onChange={() => setSelectedStatus(status)}
                            />

                            <label
                                className="form-check-label"
                                htmlFor={status}
                            >
                                {status}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}