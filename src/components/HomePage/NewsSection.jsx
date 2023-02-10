import React, { useState } from 'react'
const NewsSection = () => {
    const DEFAULT_FORM = { email: '' }
    const [ form, setForm ] = useState(DEFAULT_FORM)
    
    const [ loading, setLoading ] = useState(false)
    const [ ok, setOk ] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setOk(true)
            setForm(DEFAULT_FORM)
        }, 1000)
    }

    return (
        <article className="subscribebox">
            <div className="container px-15 flex flex-column items-center md:px-0">
                <h2 className="subscribebox-subtitle text-white">Suscríbete a nuestras novedades</h2>
                <p className="subscribebox-title p1 text-white">Suscríbete para recibir actualizaciones sobre los coaches más recientes y relevantes.</p>
                
                {!ok && 
                    <form className="subscribebox-form flex mt-24" onSubmit={handleSubmit}>
                        <input
                            name='email'
                            type="email"
                            placeholder="Ingresa tu email"
                            required
                            disabled={loading}
                            onChange={handleChange}
                            value={form.email}
                        />

                        <button className="button button-secondary" disabled={loading}>
                            { !loading ? 'Suscribirme' : 'Loading...'}
                        </button>
                    </form>
                }

                { ok && <p className="subscribebox-title p1 text-white mt-24">Gracias por suscribirte, pronto recibirás novedades.</p>}
            </div>
        </article>
    );
};

export default NewsSection;