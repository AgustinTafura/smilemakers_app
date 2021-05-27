import './index.scss'
import $ from 'jquery'
import { useEffect } from 'react'


const PreguntasFrecuentes = () => {

    useEffect(() => {

        $('#accordion .collapse').on('show.bs.collapse', function (e) {
            const card = e.target.parentElement
            card.classList.add('active')

        })
        $('#accordion .collapse').on('hidden.bs.collapse', function (e) {
            const card = e.target.parentElement
            card.classList.remove('active')

        })
        return () => {
            
        }
    }, [])

    return (
        <section id='preguntasFrecuentes' >
            <h1>Preguntas Frecuentes</h1>

            <div id="accordion" className=''>
                <div className="card">
                        <h5 id="heading1" className="card-header btn-link btn mb-0" data-toggle="collapse" data-target="#collapse1" aria-controls="collapse1">
                            ¿Cómo limpiar tus Alienadores Invisibles?
                        </h5>
                    <div id="collapse1" className="collapse" aria-labelledby="heading1" data-parent="#accordion">
                    <div className="card-body">
                        <ul>
                            <li>
                                Uno de los paso fundamentales es el cepillado diario tus alineadores SMILE MAKERS, lo ideal sería dos veces al día.
                            </li>
                            <li>
                                Paso dos, y no menos importante, utilizá las pastillas efervescentes de corega y sumergilos de 2 a 3 minutos diariamente o día por medio.
                            </li>
                        </ul>
                        <p>
                            Los alineadores pueden mancharse pues absorben la pigmentación de las comidas y bebidas que consumimos a diario.

                            Cuánto se manchen va a depender de los hábitos alimenticios de cada persona. Bebidas como vino, café, mate, tienden a mancharlos, así como también el cigarrillo.

                            Sin embargo, la utilización de la placas protegerán el esmalte de tus dientes de la acción nociva de éstos productos.

                            Por este motivo es tan importante que higienices tus alineadores SMILE MAKERS a diario y con los productos recomendados.
                        </p>
                        <p>De esta forma tus alineadores se van a ver siempre limpios y translucidos.</p>
                    </div>
                    </div>
                </div>
                <div className="card">                                      
                    <h5 id="heading2" className="card-header btn-link btn mb-0 collapsed" data-toggle="collapse" data-target="#collapse2" aria-controls="collapse2">
                    ¿Qué ocurre si se rompre alguno de mis Alineadores?
                    </h5>
                    
                    <div id="collapse2" className="collapse" aria-labelledby="heading2" data-parent="#accordion">
                    <div className="card-body">
                        Como en todo tratamiento es importante seguir las recomendaciones del ortodoncista debido a que las placas podrían romperse por mal uso.

                        En estos casos comunicate de inmediato con nosotros para que hagamos la reposicion rápidamente
                    </div>
                    </div>
                </div>
                <div className="card">                                      
                    <h5 id="heading3" className="card-header btn-link btn mb-0 collapsed" data-toggle="collapse" data-target="#collapse3" aria-controls="collapse3">
                        ¿Es un tratamiento doloroso?
                    </h5>
                    
                    <div id="collapse3" className="collapse" aria-labelledby="heading3" data-parent="#accordion">
                    <div className="card-body">
                    <p>
                        Los alineadores invisibles SMILE MAKERS no modifican el habla, puede ser que el primer día de uso sientas alguna diferencia pero pasado este tiempo no vas a sentir que los tenes puestos.

                        Al ser un tratamiento donde hay un movimiento progresivo de tus dientes, puede ser que sientas un leve dolor cada vez que cambiemos tus placas, que se va a disipar cuando estos se adapten al nuevo alineador.
                    </p>
                    </div>
                    </div>
                </div>
                <div className="card">                                      
                    <h5 id="heading4" className="card-header btn-link btn mb-0 collapsed" data-toggle="collapse" data-target="#collapse4" aria-controls="collapse4">
                        ¿Cuánto tiempo debo cada Alineador?
                    </h5>
                    
                    <div id="collapse4" className="collapse" aria-labelledby="heading4" data-parent="#accordion">
                    <div className="card-body">
                        <p>
                            Son super cómodos, están confeccionados con materiales flexibles y de buena calidad.

                            Podes usarlos todo el día, solo deberas sacártelos para comer o cepillarte los dientes. 
                        </p>
                    </div>
                    </div>
                </div>
                <div className="card">                                      
                    <h5 id="heading5" className="card-header btn-link btn mb-0 collapsed" data-toggle="collapse" data-target="#collapse5" aria-controls="collapse5">
                        ¿Qué incluye el Kit Inicial?
                    </h5>
                    
                    <div id="collapse5" className="collapse" aria-labelledby="heading5" data-parent="#accordion">
                    <div className="card-body">
                        <p>
                            Con la entrega de tus primeros alineadores SMILE MAKERS vamos a entregarte:
                            - Un neceser
                            - Pastillas blanqueadoras Corega para que puedas limpiarlos,
                            - Un cepillo de dientes @merakisustentable que son un 💯,
                            - Estuche para que puedas guardarlos cuando no los estes usando,
                            - Pasta dental,
                            - Elemento para quitar tus placas con mayor facilidad,
                            - Alcohol en aerosol para que lo lleves a todos lados y siempre que te los quites estes seguro de que tenes las manos desinfectadas.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="card">                                      
                    <h5 id="heading6" className="card-header btn-link btn mb-0 collapsed" data-toggle="collapse" data-target="#collapse6" aria-controls="collapse6">
                        ¿Cada cuánto tiempo debo cambiar los Alineadores?
                    </h5>
                    
                    <div id="collapse6" className="collapse" aria-labelledby="heading6" data-parent="#accordion">
                    <div className="card-body">
                        <p>
                            Los alineadores invisibles SMILE MAKERS se cambian cada 20 dias.
                            No es necesario que el cambio se realice siempre en consultorio. 
                            Dependiendo del caso, podemos entregarte algunas placas para que vos lo hagas en tu casa en la fecha pactada con el ortodoncista.
                            Esto es una gran ventaja ya que podes irte de viaje y no retrasar el tiempo del tratamiento.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="card">                                      
                    <h5 id="heading7" className="card-header btn-link btn mb-0 collapsed" data-toggle="collapse" data-target="#collapse7" aria-controls="collapse7">
                        ¿Quienes pueden utilizar Alineadores Invisibles?
                    </h5>
                    
                    <div id="collapse7" className="collapse" aria-labelledby="heading7" data-parent="#accordion">
                    <div className="card-body">
                        <p>
                            Hoy en día el 90 % de los problemas de alineacion dentaria pueden ser resueltos mediante ortodoncia invisible.

                            Los alineadores realizan fuerzas digitalmente calculadas y de baja intensidad ideales para corregir cualquier tipo de caso.

                            Existen algunos casos en los cuales no se puede utilizar ortodoncia invisible,
                            * Pacientes con problemas periodontales, los cuales deberán tratar esta afección para poder utilizarlos.
                            * Pacientes con perdida ósea.
                            * Pacientes con reabsorciones de raíces.

                            Siempre es ideal tener una consulta con el ortodoncista, ya que muchos de los problemas por los cuales no se pueden utilizar alineadores son modificables.
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PreguntasFrecuentes
