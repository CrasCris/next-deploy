import Layout from "../components/Layout";
import { skills } from "../profile";
import { experiencias } from "../profile";
import { proyectos } from "../profile";


console.log(skills)
console.log(experiencias)
const Index = () => (
    <Layout>
        <header className="row text-align">
            <div className="col-md-11">
                <div className="card card-body bg-primary text-light">
                    <div className="row ">
                        <div className="col-md-4">
                            <img src="Yo2.jpg" alt="" className="img-fluid">
                            </img>
                        </div>
                        <div className="col-md-8">
                            <h1>Cristian Diaz</h1>
                            <h3>Analista de datos</h3>
                            <p>Soy un estudiante de matemáticas puras con habilidades en R, Python, SQL y JavaScript, y me apasiona el análisis de datos y la ciencia de datos. Mi formación académica en matemáticas me ha permitido adquirir un sólido conocimiento teórico en estadística, cálculo, álgebra y análisis numérico, lo que me permite comprender y abordar problemas complejos en el análisis de datos. Además, mis habilidades en programación me permiten trabajar con conjuntos de datos grandes y complejos, y mi experiencia en el uso de herramientas como R y Python me permite realizar análisis estadísticos avanzados, visualizaciones y modelado predictivo. Estoy seguro de que mis habilidades teóricas en matemáticas, junto con mi experiencia práctica en análisis de datos, me convierten en un candidato ideal para trabajos de analista de datos o científico de datos en empresas y organizaciones de diversos sectores.</p>
                            <a href="mailto:cristianjdiaz11@gmail.com">Contactar</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/** Seccion 2 */}
        <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Habilidades</h1>
                        
                        {
                            skills.map(({skill,percentage},i) => (
                                <div className="py-3" key={i}>
                                   <h5>{skill}</h5>
                                   <div className="progress">
                                        <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{width: `${percentage}%`}}>


                                        </div>                                   </div>

                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Experiencia</h1>
                        
                        <ul>
                        {
                            experiencias.map(({title,description,from,to},index) => (
                                <li key={index}>
                                    <h3>{title}</h3>
                                    <h3>{from}-{to}</h3>
                                    <p>{description}</p>
                                </li>
                            ))
                        }
                        </ul>


                    </div>
                </div>

            </div>
        </div>

        {/** Seccion 3 */}
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-primary">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text-light">Proyectos</h1>
                        </div>

                        {
                            proyectos.map(({name,description,image},i) => (
                                <div className="col-md-4 p-2" key={i}>
                                    <div className="card ">
                                        <div className="overflow">
                                        <img src={`/${image}`} alt="" className="card-img-top ">
    
                                        </img>
                                        </div>
                                        <div className="card-body">
                                        <h3>{name}</h3>
                                        <p>{description}</p>
                                        <a href="https://github.com/CrasCris">Saber Mas</a>
                                        </div>
                                    </div>                               
    
                                </div>
                            ))
                        }

                    
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)
export default Index;