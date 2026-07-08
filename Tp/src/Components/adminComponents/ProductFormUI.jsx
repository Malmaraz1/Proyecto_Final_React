export const ProductFormUI = ({
  product,
  errors,
  loading,
  onChange,
  onFileChange,
  onSubmit,
}) => {
  return (
    <section>
      <form className="product-from" onSubmit={onSubmit}>
        <h2>Agregar nuevo producto</h2>

        <div>
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={onChange}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={onChange}
            required
          />
          {errors.category && <p className="error">{errors.category}</p>}
        </div>
        <div>
          <label>Precio</label>
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={onChange}
            required
          />
          {errors.price && <p className="error">{errors.price}</p>}
        </div>
        <div>
          <label>description</label>
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={onChange}
            required
          />
          {errors.description && <p className="error">{errors.description}</p>}
        </div>
        <div>
          <label>Imagen:</label>
          <input type="file" accept="image/*" onChange={onFileChange} />
          {errors.file && <p className="error">{errors.file}</p>}
        </div>
        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Guardando..." : "Guardar"}
        </button>
        {errors.general && <p className="error">{errors.general}</p>}
      </form>
    </section>
  );
};
